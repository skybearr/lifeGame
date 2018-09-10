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
        _this.bases = [];
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
        if (b === void 0) { b = false; }
        //利息计算
        if (b) {
            DataBase.debt = Formula.getDebt(DataBase.debt);
            DataBase.deposit = Formula.getDeposit(DataBase.deposit);
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
    GameCommand.prototype.sendEvent = function () {
        this.dealOtherEvent();
        var arr = DataBase.events;
        for (var i = 0; i < arr.length; i++) {
            GameLogic.getInstance().gameui.eventAppear(arr[i]);
        }
        DataBase.events = [];
    };
    GameCommand.prototype.sendError = function (i) {
        egret.setTimeout(function () {
            GameLogic.getInstance().gameui.errorRsp(i);
        }, this, 100);
    };
    GameCommand.prototype.sendOver = function (t) {
        DataBase.gameState = 0;
        if (t == 0) {
            //结算
            DataBase.debt = Formula.getDebt(DataBase.debt);
            DataBase.deposit = Formula.getDeposit(DataBase.deposit);
            DataBase.money = DataBase.money + DataBase.deposit - DataBase.debt + this.getStorePrice();
            DataBase.debt = 0;
            DataBase.deposit = 0;
        }
        else if (t == 1) {
        }
        this.sendData();
        GameLogic.getInstance().gameui.over();
        if (t == 0) {
            WxApi.getInstance().setHigherScore(DataBase.money);
        }
    };
    /**----------------------------------------------- 数据获得 --------------------------------------------------------------------- */
    GameCommand.prototype.getStorePrice = function () {
        var p = 0;
        for (var i = 0; i < DataBase.storeGoods.length; i++) {
            var good = DataBase.storeGoods[i];
            p += good.dwPrice * good.dwNum;
        }
        return p;
    };
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
        var googlen = this.bases.length;
        var len = 4 + Math.floor(Math.random() * (googlen - 3));
        var arr = this.bases.slice();
        var lll = DataBase.gamePackage == 1 ? arr.length - 1 : arr.length;
        arr = StringUtil.shuffle(arr);
        var goodIds = [];
        for (var i = 0; i < len; i++) {
            goodIds.push(arr[i]);
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
    /**其他事件触发几率 */
    GameCommand.prototype.dealOtherEvent = function () {
        var o = Formula.getOtherEvent();
        if (o != null) {
            this.addEvent(o['a'], o['b'], o['c']);
        }
    };
    /**事件
     * @param a	类型  1现金 2存款 3健康 4声望 5
     * @param b 1减少 2增加
     * @param c	随机值
     */
    GameCommand.prototype.addEvent = function (a, b, c) {
        var id = a * 100 + b * 10 + c;
        var o = GameLogic.getInstance().goods["evt" + id];
        if (o == null) {
            return;
        }
        var isadd = b == 2;
        var value = o['value'];
        if (a < 5) {
            switch (a) {
                case 1://money
                    if (value <= 1) {
                        value = Math.floor(DataBase.money * value);
                    }
                    else {
                        value = Math.floor(Math.random() * value / 5);
                    }
                    DataBase.money = DataBase.money + (isadd ? value : -value);
                    DataBase.money = DataBase.money <= 0 ? 0 : DataBase.money;
                    break;
                case 2://deposit
                    if (value <= 1) {
                        value = Math.floor(DataBase.money * value);
                    }
                    else {
                        value = Math.floor(Math.random() * value / 5);
                    }
                    DataBase.deposit = DataBase.deposit + (isadd ? value : -value);
                    DataBase.deposit = DataBase.deposit <= 0 ? 0 : DataBase.deposit;
                    break;
                case 3://pow
                    DataBase.pow = DataBase.pow + (isadd ? value : -value);
                    DataBase.pow = DataBase.pow <= 0 ? 0 : DataBase.pow;
                    break;
                case 4://fame
                    DataBase.fame = DataBase.fame + (isadd ? value : -value);
                    DataBase.fame = DataBase.fame <= 0 ? 0 : DataBase.fame;
                    break;
            }
        }
        if (typeof (o) == "string") {
            DataBase.events.push(StringUtil.getSwfLangStr(o));
        }
        else {
            DataBase.events.push(StringUtil.getSwfLangStrVar(o['str'], [value]));
        }
    };
    /**浮动区间	0.2,3,5,10
     *
     */
    GameCommand.prototype.getPrice = function (o, evt) {
        //上下浮动 0.2~10
        var n = o['price'];
        var r1 = Formula.getRandom1();
        //第一次随机后的价格
        var v = Math.floor(n * r1);
        // console.log(o['name'],"正常价格：",n,"范围浮动随机：",r1,"实际价格：",v);
        var b2 = Formula.isAdd();
        var v2 = Math.floor(v * Formula.getRandom2());
        //随机值 看起来不是每次都一样的价格
        v = b2 ? v + v2 : v - v2;
        // console.log(o['name'],"正常价格：",n,"上下浮动随机0.2：",v);
        if (evt) {
            //出现事件概率 0.1
            var b3 = Formula.apperEvent();
            if (b3) {
                //事件翻倍数随机
                var r3 = Formula.getRandom3();
                v = Math.floor(v * r3);
                // console.log(o['name'],"正常价格：",n,"事件浮动随机：",r3,"实际价格：",v);
                //记录事件
                var r4 = Math.floor(Math.random() * 3) + 1;
                var evt_1 = 'evt' + (r3 < 1 ? 0 : 1) + r4;
                DataBase.events.push(o[evt_1]);
            }
        }
        if (v <= 0) {
            v = 1;
        }
        return v;
    };
    GameCommand.prototype.sortfun = function (a, b) {
        return a < b ? -1 : 1;
    };
    GameCommand.prototype.saveAchieve = function () {
        if (DataBase.money > DataBase.achives[0]) {
            DataBase.achives[0] = DataBase.money;
        }
        if (DataBase.deposit > DataBase.achives[1]) {
            DataBase.achives[1] = DataBase.deposit;
        }
        if (DataBase.debt > DataBase.achives[2]) {
            DataBase.achives[2] = DataBase.debt;
        }
        if (DataBase.pow < DataBase.achives[3]) {
            DataBase.achives[3] = DataBase.pow;
        }
        if (DataBase.fame < DataBase.achives[4]) {
            DataBase.achives[4] = DataBase.fame;
        }
        if (DataBase.fame > DataBase.achives[5]) {
            DataBase.achives[5] = DataBase.fame;
        }
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
        DataBase.marketGoods = [];
        DataBase.storeGoods = [];
        DataBase.events = [];
        DataBase.achives = [0, 0, 0, 0, 0];
        DataBase.gameState = 1;
        this.sendData();
        this.sendMarket(false);
    };
    /**过一天 */
    GameCommand.prototype.passOneDay = function () {
        if (DataBase.gameState == 0) {
            return;
        }
        DataBase.times++;
        if (DataBase.times >= GameLogic.getInstance().data['maxday']) {
            this.sendOver(0);
            return;
        }
        this.sendMarket(true);
        this.sendEvent();
        this.sendData(true);
        if (DataBase.pow <= 0) {
            this.sendOver(1);
            return;
        }
        this.saveAchieve();
    };
    GameCommand.prototype.buyGoods = function (id, num) {
        if (num == 0) {
            this.sendError(ERROR.BUY_ZERO);
            return;
        }
        if (id == this.bases[this.bases.length - 1] && DataBase.gamePackage == 1) {
            this.sendError(ERROR.NEED_LICIENCE);
            return;
        }
        var arr = DataBase.marketGoods;
        for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            if (good.dwID == id) {
                var n = good.dwPrice * num;
                if (n > DataBase.money) {
                    this.sendError(ERROR.MONEY_NOT_ENOUGH);
                    return;
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
                        return;
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
                            var nn = g.dwNum + num;
                            var p = Math.floor((g.dwPrice * g.dwNum + good.dwPrice * num) / nn);
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
    GameCommand.prototype.cun = function (num) {
        if (num > 0 && num <= DataBase.money) {
            DataBase.deposit += num;
            DataBase.money -= num;
            this.sendData();
        }
    };
    GameCommand.prototype.qu = function (num) {
        if (num > 0 && num <= DataBase.deposit) {
            DataBase.deposit -= num;
            DataBase.money += num;
            this.sendData();
        }
    };
    GameCommand.prototype.huan = function (num) {
        if (num > 0 && num <= DataBase.money && num <= DataBase.debt) {
            DataBase.debt -= num;
            DataBase.money -= num;
            this.sendData();
        }
    };
    GameCommand.prototype.treat = function (n) {
        if (n > 0 && n < 100) {
            if (n + DataBase.pow > 100) {
                n = 100 - DataBase.pow;
            }
            var needmoney = n * GameLogic.getInstance().data['hospital'];
            if (needmoney >= DataBase.money) {
                this.sendError(ERROR.MONEY_NOT_ENOUGH);
                return;
            }
            DataBase.money -= needmoney;
            DataBase.pow += n;
            this.sendData();
        }
    };
    /**慈善 */
    GameCommand.prototype.charity = function (n) {
        if (n > DataBase.money) {
            this.sendError(ERROR.MONEY_NOT_ENOUGH);
            return;
        }
        var charity = GameLogic.getInstance().data['charity'];
        var c;
        if (n < charity) {
            var r = Math.random() * 100;
            if (r < 2) {
                DataBase.fame += 3;
                c = 0;
            }
            else {
                c = 1;
            }
        }
        else {
            var i = Math.floor(n / charity);
            DataBase.fame += i;
            c = i < 10 ? 2 : (i < 100 ? 3 : 4);
        }
        this.addEvent(5, 1, c);
        DataBase.money -= n;
        this.sendData();
        this.sendEvent();
    };
    GameCommand.prototype.buyStore = function (price) {
        var max = GameLogic.getInstance().data['maxstore'];
        if (DataBase.maxStoreNum >= max) {
            this.sendError(ERROR.MAX_STORE_NUM);
            return;
        }
        var n = GameLogic.getInstance().data['storeprice'];
        if (price < n) {
            console.log("价格低于标准值，请勿作弊");
            return;
        }
        if (DataBase.money < price) {
            this.sendError(ERROR.MONEY_NOT_ENOUGH);
            return;
        }
        else {
            DataBase.maxStoreNum += 10;
            if (DataBase.maxStoreNum >= max) {
                DataBase.maxStoreNum = max;
            }
            var r = Math.floor(Math.random() * n / 5);
            DataBase.money -= (price + r);
            this.sendData();
            this.addEvent(5, 0, 0);
            this.sendEvent();
        }
    };
    return GameCommand;
}(egret.EventDispatcher));
__reflect(GameCommand.prototype, "GameCommand");
//# sourceMappingURL=GameCommand.js.map