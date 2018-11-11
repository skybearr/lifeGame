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
var StartUI = (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "StartSkin";
        return _this;
    }
    StartUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.checkFit();
        var data = GameLogic.getInstance().data;
        this.lbl_content.text = StringUtil.getSwfLangStr("s2");
        this.updateProp();
        for (var i = 1; i <= 3; i++) {
            var o = data['config' + i];
            var str = "开始游戏";
            str = i == 1 ? str : "使用券" + str;
            str += "\n" + o['pow'] + "体力 " + o['debt'] + "欠债 " + o['money'] + "启动资金\n";
            if (i == 2) {
                str += "(可获炒房证)";
            }
            var btn = this['btn_' + i];
            btn.label = str;
            btn.name = i + "";
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        GameLogic.getInstance().addEventListener(GameEvent.PROP_NUM_CHANGE, this.updateProp, this);
        this.btn_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        if (WxApi.getInstance().checkWx()) {
            this.button = wx.createGameClubButton({
                icon: 'white',
                style: {
                    left: 10,
                    top: 40,
                    width: 32,
                    height: 32,
                    text: "游戏圈"
                }
            });
        }
    };
    StartUI.prototype.checkFit = function () {
        this.img_bg.height = GameLogic.getInstance().GameStage.stageHeight;
    };
    StartUI.prototype.updateProp = function () {
        this.lbl_prop.text = "分享可获得炒房券（炒房券 X" + PlayerConst.prop_num + "）";
    };
    StartUI.prototype.clickBtn = function (e) {
        if (GameLogic.getInstance().strings == null) {
            this.lbl_log.text = "正在形成市场，请稍后...";
            return;
        }
        var i = parseInt(e.currentTarget.name);
        if (i == 2 && PlayerConst.prop_num <= 0) {
            WxApi.getInstance().showToast("邀请好友进入游戏可获得炒房券");
            return;
        }
        GameCommand.getInstance().selectPackage(i);
        GameLogic.getInstance().startGame();
    };
    StartUI.prototype.clickbtn1 = function (e) {
        switch (e.currentTarget) {
            case this.btn_10:
                WxApi.getInstance().showRewardAd(WATCHTYPE.NONE);
                break;
            case this.btn_11:
                this.addChild(new RankUI());
                break;
            case this.btn_12:
                WxApi.getInstance().share();
                break;
        }
    };
    StartUI.prototype.clear = function () {
        for (var i = 1; i <= 3; i++) {
            this['btn_' + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        GameLogic.getInstance().removeEventListener(GameEvent.PROP_NUM_CHANGE, this.updateProp, this);
        this.btn_10.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_11.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_12.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        if (this.button != null) {
            this.button.destroy();
        }
    };
    return StartUI;
}(eui.Component));
__reflect(StartUI.prototype, "StartUI");
//# sourceMappingURL=StartUI.js.map