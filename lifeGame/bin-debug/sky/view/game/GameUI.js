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
        this.initView();
        this.initEvent();
        GameCommand.getInstance().startGame();
    };
    /**出现事件 */
    GameUI.prototype.eventAppear = function (str) {
    };
    /**刷新基本数据*/
    GameUI.prototype.initData = function (msg) {
        this.lbl_1.text = msg.dwMoney.toString();
        this.lbl_2.text = msg.dwDeposit.toString();
        this.lbl_3.text = msg.dwDebt.toString();
        this.lbl_4.text = msg.dwPow.toString();
        this.lbl_5.text = msg.dwFame.toString();
    };
    /**刷新商店*/
    GameUI.prototype.initMarket = function (msg) {
    };
    /**我的商品里有价格上涨的时候显示箭头
     * @param arr 一组id
     */
    GameUI.prototype.storeUp = function (arr) {
    };
    /**刷新我的商品*/
    GameUI.prototype.initStore = function (msg) {
    };
    /**结算 */
    GameUI.prototype.over = function () {
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
    };
    GameUI.prototype.clickBtn = function (e) {
        var i = parseInt(e.currentTarget.name);
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
        }
    };
    GameUI.prototype.pop = function (i) {
        if (this.crtPop != null) {
            var gp = this['gp' + this.crtPop];
            if (gp != null) {
                gp.visible = false;
            }
        }
        this['gp' + i].visible = true;
        this.crtPop = i;
    };
    GameUI.prototype.restart = function () {
        GameLogic.getInstance().openStart();
    };
    GameUI.prototype.clear = function () {
        this.clearEvent();
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