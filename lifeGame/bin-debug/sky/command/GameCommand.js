var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameCommand = (function (_super) {
    __extends(GameCommand, _super);
    function GameCommand() {
        var _this = _super.call(this) || this;
        _this.bases = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        _this.diss1 = [0.2, 5, 10];
        //事件概率
        _this.diss2 = [0.1, 0.2, 5, 10];
        return _this;
    }
    GameCommand.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameCommand();
        }
        return this._instance;
    };
    /**-------------------------------------------------- 服务器发送 -------------------------------------------------------- */
    GameCommand.prototype.sendData = function (b) {
        if (b === void 0) { b = true; }
        //利息计算
        if (b) {
            DataBase.debt = Math.floor(DataBase.debt * 1.1);
            DataBase.deposit = Math.floor(DataBase.deposit * 1.04);
        }
        var msg = this.getData();
        GameLogic.getInstance().gameui.initData(msg);
    };
    GameCommand.prototype.sendMarket = function (evt) {
        DataBase.events = [];
        DataBase.marketGoods = [];
        var msg = this.getMarket(evt);
        DataBase.marketGoods = msg.goods;
        GameLogic.getInstance().gameui.initMarket(msg);
    };
    //购买柜子
    GameCommand.prototype.sendStore = function () {
        var msg = new msgGoodsStoreRsp();
        msg.goods = DataBase.storeGoods;
        GameLogic.getInstance().gameui.initStore(msg);
    };
    GameCommand.prototype.sendBuy = function () {
    };
    GameCommand.prototype.sendSell = function () {
    };
    /**还债 */
    GameCommand.prototype.sendDebt = function () {
    };
    /**存款/取款 */
    GameCommand.prototype.sendDeposit = function () {
    };
    GameCommand.prototype.sendEvent = function () {
        this.dealOtherEvent();
        var arr = DataBase.events;
        for (var i = 0; i < arr.length; i++) {
            GameLogic.getInstance().gameui.eventAppear(arr[i]);
        }
    };
    GameCommand.prototype.sendError = function (i) {
        GameLogic.getInstance().gameui.errorRsp(i);
    };
    GameCommand.prototype.sendOver = function () {
        DataBase.gameState = 0;
        //结算
        DataBase.debt = Math.floor(DataBase.debt * 1.1);
        DataBase.deposit = Math.floor(DataBase.deposit * 1.04);
        GameLogic.getInstance().gameui.over();
    };
    /**----------------------------------------------- 数据获得 --------------------------------------------------------------------- */
    GameCommand.prototype.getData = function () {
        var msg = new msgLifeDataRsp();
        msg.dwMoney = DataBase.money;
        msg.dwDebt = DataBase.debt;
        msg.dwDeposit = DataBase.deposit;
        msg.dwPow = DataBase.pow;
        msg.dwTimes = DataBase.times;
        msg.dwMaxStoreNum = DataBase.maxStoreNum;
        msg.dwFame = DataBase.fame;
        return msg;
    };
    GameCommand.prototype.getMarket = function (evt) {
        var msg = new msgGoodsBuyRsp();
        msg.goods = [];
        var len = 4 + Math.floor(Math.random() * 6);
        var arr = this.bases.slice();
        var lll = DataBase.gamePackage < 2 ? arr.length : arr.length - 1;
        var goodIds = [];
        for (var i = 0; i < len; i++) {
            var i_1 = Math.floor(Math.random() * lll);
            goodIds.push(arr[i_1]);
            arr.splice(i_1, 1);
        }
        goodIds.sort(this.sortfun);
        // console.log("开始随机价格");
        for (var i = 0; i < goodIds.length; i++) {
            var good = new varGoods();
            var id = goodIds[i];
            var o = GameLogic.getInstance().goods[id];
            if (o == null) {
                continue;
            }
            good.dwID = id;
            good.strName = o['name'];
            good.dwPrice = this.getPrice(o, evt);
            good.dwNum = 0;
            msg.goods.push(good);
        }
        return msg;
    };
    /**其他事件 */
    GameCommand.prototype.dealOtherEvent = function () {
        var b = Math.random() < 0.2;
        if (b) {
            var a = Math.floor(Math.random() * 4) + 1;
            var b_1 = Math.random() < 0.5 ? 1 : 2;
            var c = Math.floor(Math.random() * 3) + 1;
            var key = "evt" + a + b_1 + c;
            var str = GameLogic.getInstance().goods[key];
            if (str != null) {
                DataBase.events.push(str);
            }
        }
    };
    GameCommand.prototype.getRandom1 = function () {
        var r = Math.random();
        if (r < 0.1) {
            var i = Math.floor(Math.random() * 3);
            return this.diss1[i];
        }
        else {
            return 1;
        }
    };
    GameCommand.prototype.getRandom2 = function () {
        var i = Math.floor(Math.random() * 4);
        return this.diss2[i];
    };
    /**浮动区间	0.2,3,5,10
     *
     */
    GameCommand.prototype.getPrice = function (o, evt) {
        //上下浮动 0.2~10
        var n = o['price'];
        var r1 = this.getRandom1();
        var v = Math.floor(n * r1);
        // console.log(o['name'],"正常价格：",n,"范围浮动随机：",r1,"实际价格：",v);
        var b2 = Math.random() < 0.5;
        var v2 = Math.floor(v * Math.random() * 0.2);
        v = b2 ? v + v2 : v - v2;
        // console.log(o['name'],"正常价格：",n,"上下浮动随机0.2：",v);
        if (evt) {
            //出现事件概率 0.1
            var b3 = Math.random() < 0.1;
            if (b3) {
                //事件翻倍数随机
                var r3 = this.getRandom2();
                v = Math.floor(v * r3);
                // console.log(o['name'],"正常价格：",n,"事件浮动随机：",r3,"实际价格：",v);
                //记录事件
                var r4 = Math.floor(Math.random() * 3) + 1;
                var evt_1 = 'evt' + (r3 < 1 ? 0 : 1) + r4;
                DataBase.events.push(o[evt_1]);
            }
        }
        return v;
    };
    GameCommand.prototype.sortfun = function (a, b) {
        return a < b ? -1 : 1;
    };
    GameCommand.prototype.getPriceInMarket = function (id) {
        var arr = DataBase.marketGoods;
        for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            if (id == good.dwID) {
                return good.dwPrice;
            }
        }
        return null;
    };
    /**-------------------------------------------- 客户端发送  ------------------------------------------------------------------------ */
    GameCommand.prototype.selectPackage = function (i) {
        DataBase.gamePackage = i;
    };
    /**根据type 刷数据 */
    GameCommand.prototype.startGame = function () {
        var o = GameLogic.getInstance().data["config" + DataBase.gamePackage];
        DataBase.times = 1;
        DataBase.money = o['money']; //new Int64(o['money'], 0);
        DataBase.debt = o['debt'];
        DataBase.deposit = 0; //new Int64(0, 0);
        DataBase.pow = o['pow'];
        DataBase.maxStoreNum = 100;
        DataBase.fame = o['fame'];
        DataBase.gameState = 1;
        DataBase.storeGoods = [];
        this.sendData(false);
        this.sendMarket(false);
    };
    /**过一天 */
    GameCommand.prototype.passOneDay = function () {
        DataBase.times++;
        if (DataBase.times >= 40) {
            this.sendOver();
            return;
        }
        this.sendData(true);
        this.sendMarket(true);
        this.sendEvent();
    };
    GameCommand.prototype.buyGoods = function (id, num) {
        if (num == 0) {
            this.sendError(ERROR.BUY_ZERO);
            return;
        }
        var arr = DataBase.marketGoods;
        for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            if (good.dwID == id) {
                var n = good.dwPrice * num;
                if (n > DataBase.money) {
                    this.sendError(ERROR.MONEY_NOT_ENOUGH);
                }
                else {
                    var arr1 = DataBase.storeGoods;
                    var total = 0;
                    var index = void 0;
                    for (var j = 0; j < arr1.length; j++) {
                        var good1 = arr1[j];
                        if (good1.dwID == id) {
                            index = j;
                        }
                        total += good1.dwNum;
                    }
                    if (total + num > DataBase.maxStoreNum) {
                        this.sendError(ERROR.STORE_NOT_ENOUGH);
                    }
                    else {
                        DataBase.money -= n;
                        var g = arr1[index];
                        if (g == null) {
                            g = new varGoods();
                            g.dwID = id;
                            g.dwPrice = good.dwPrice;
                            g.dwNum = num;
                            g.strName = good.strName;
                            arr1.push(g);
                        }
                        else {
                            var nn = g.dwNum + n;
                            var p = Math.floor((g.dwPrice * g.dwNum + good.dwPrice * n) / nn);
                            g.dwNum = nn;
                            g.dwPrice = p;
                            arr1[index] = g;
                        }
                        this.sendData();
                        this.sendStore();
                    }
                }
                break;
            }
        }
    };
    GameCommand.prototype.sellGoods = function (id, num) {
        if (num == 0) {
            this.sendError(ERROR.SELL_ZERO);
            return;
        }
        var marketprice = this.getPriceInMarket(id);
        if (marketprice == null) {
            this.sendError(ERROR.MARKET_NO_GOOD);
            return;
        }
        var arr = DataBase.storeGoods;
        for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            if (good.dwID == id) {
                DataBase.money += marketprice * num;
                good.dwNum -= num;
                if (good.dwNum <= 0) {
                    DataBase.storeGoods.splice(i, 1);
                }
                this.sendData();
                this.sendStore();
                break;
            }
        }
    };
    return GameCommand;
}(egret.EventDispatcher));
__reflect(GameCommand.prototype, "GameCommand");
//# sourceMappingURL=GameCommand.js.map