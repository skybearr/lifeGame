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
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameSkin";
        return _this;
    }
    GameUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        GameLogic.getInstance().gameui = this;
        this.market_arr = [];
        this.store_arr = [];
        this.initView();
        this.initEvent();
        GameCommand.getInstance().startGame();
    };
    /**出现事件 */
    GameUI.prototype.eventAppear = function (str) {
    };
    /**刷新基本数据*/
    GameUI.prototype.initData = function (msg) {
        this.data = msg;
        this.setLeft();
        this.lbl_1.text = this.data.dwMoney.toString();
        this.lbl_2.text = this.data.dwDeposit.toString();
        this.lbl_3.text = this.data.dwDebt.toString();
        this.lbl_4.text = this.data.dwPow.toString();
        this.lbl_5.text = this.data.dwFame.toString();
    };
    GameUI.prototype.setLeft = function () {
        this.leftStore = this.data.dwMaxStoreNum - this.getStoreNum();
    };
    GameUI.prototype.getStoreNum = function () {
        var n = 0;
        for (var i = 0; i < this.store_arr.length; i++) {
            var item = this.store_arr[i];
            n += item.good.dwNum;
        }
        return n;
    };
    /**刷新商店*/
    GameUI.prototype.initMarket = function (msg) {
        this.clearMarket();
        for (var i = 0; i < msg.goods.length; i++) {
            var item = new MarketItem(msg.goods[i]);
            item.y = (item.height + 2) * i;
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickMarketItem, this);
            this.market_arr.push(item);
            this.gp_market.addChild(item);
        }
    };
    GameUI.prototype.clickMarketItem = function (e) {
        var item = e.currentTarget;
        if (this.crtMarketItem != null) {
            this.crtMarketItem.select = false;
        }
        this.crtMarketItem = item;
        this.crtMarketItem.select = true;
        this.pop(9);
        var max = Math.floor(this.data.dwMoney / item.good.dwPrice);
        this.max_num = max > this.leftStore ? this.leftStore : max;
        this['lbl_buy_1'].text = item.good.strName;
        this['lbl_num6'].text = this.max_num + "";
    };
    /**刷新我的商品*/
    GameUI.prototype.initStore = function (msg) {
        this.clearStore();
        for (var i = 0; i < msg.goods.length; i++) {
            var item = new StoreItem(msg.goods[i]);
            item.y = (item.height + 2) * i;
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStoreItem, this);
            this.store_arr.push(item);
            this.gp_store.addChild(item);
        }
    };
    GameUI.prototype.clickStoreItem = function (e) {
        var item = e.currentTarget;
        if (this.crtMarketItem != null) {
            this.crtMarketItem.select = false;
        }
        this.crtStoreItem = item;
        this.crtStoreItem.select = true;
        this.pop(10);
        this.max_num = this.crtStoreItem.good.dwNum;
        this['lbl_sell_1'].text = item.good.strName;
        this['lbl_num7'].text = this.max_num + "";
    };
    /**我的商品里有价格上涨的时候显示箭头
     * @param arr 一组id
     */
    GameUI.prototype.storeUp = function (arr) {
    };
    /**结算 */
    GameUI.prototype.over = function () {
    };
    GameUI.prototype.errorRsp = function (i) {
        console.log("error:", i);
    };
    GameUI.prototype.initView = function () {
    };
    GameUI.prototype.initEvent = function () {
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        for (var i = 1; i <= 27; i++) {
            var btn = this['btn_' + i];
            btn.name = i + "";
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        for (var i = 1; i <= 7; i++) {
            var lbl = this['lbl_num' + i];
            lbl.name = 'lbl' + i;
            lbl.addEventListener(egret.Event.CHANGE, this.txtChange, this);
        }
    };
    GameUI.prototype.txtChange = function (e) {
        var lbl = e.currentTarget;
        var n = parseInt(lbl.text);
        if (n > this.max_num) {
            lbl.text = this.max_num + "";
        }
    };
    GameUI.prototype.clickBtn = function (e) {
        var i = parseInt(e.currentTarget.name);
        if (this.gamestate == 0) {
            if (i < 9 && i > 12 && i < 26) {
                return;
            }
        }
        switch (i) {
            case 1:
            case 2:
            case 3:
                GameCommand.getInstance().passOneDay();
                break;
            case 4://慈善
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                this.pop(i);
                break;
            case 9://转发
                break;
            case 10://广告
                break;
            case 11://排行榜
                break;
            case 12://重新开始
                this.restart();
                break;
            case 13://存钱
                break;
            case 14://取钱
                break;
            case 15://治疗
                break;
            case 16: //关闭
            case 18:
            case 20:
            case 22:
            case 24:
            case 25:
                this.pop(0);
                break;
            case 17://买柜子
                break;
            case 19://还债
                break;
            case 21://购买
                var n21 = parseInt(this['lbl_num6'].text);
                if (n21 > 0) {
                    GameCommand.getInstance().buyGoods(this.crtMarketItem.good.dwID, n21);
                }
                this.pop(0);
                break;
            case 23://出售
                var n23 = parseInt(this['lbl_num7'].text);
                if (n23 > 0) {
                    GameCommand.getInstance().sellGoods(this.crtStoreItem.good.dwID, n23);
                }
                this.pop(0);
                break;
            case 26://再来一次
                break;
            case 27://炫耀
                break;
        }
    };
    GameUI.prototype.pop = function (i) {
        if (this.crtPop != null) {
            var gp_1 = this['gp_' + this.crtPop];
            if (gp_1 != null) {
                gp_1.visible = false;
            }
        }
        var gp = this['gp_' + i];
        if (gp != null) {
            gp.visible = true;
            this.crtPop = i;
        }
        else {
            this.crtPop = null;
        }
    };
    GameUI.prototype.clearMarket = function () {
        for (var i = 0; i < this.market_arr.length; i++) {
            var item = this.market_arr[i];
        }
        this.gp_market.removeChildren();
        this.market_arr = [];
        this.crtMarketItem = null;
    };
    GameUI.prototype.clearStore = function () {
        for (var i = 0; i < this.store_arr.length; i++) {
            var item = this.store_arr[i];
            item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStoreItem, this);
        }
        this.gp_store.removeChildren();
        this.store_arr = [];
        this.crtStoreItem = null;
    };
    GameUI.prototype.restart = function () {
        GameLogic.getInstance().openStart();
    };
    GameUI.prototype.clear = function () {
        this.clearEvent();
        this.clearMarket();
        this.clearStore();
        GameLogic.getInstance().gameui = null;
    };
    GameUI.prototype.clearEvent = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        for (var i = 1; i <= 27; i++) {
            var btn = this['btn_' + i];
            btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map