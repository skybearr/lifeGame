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
var AchieveUI = (function (_super) {
    __extends(AchieveUI, _super);
    function AchieveUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "AchieveSkin";
        return _this;
    }
    AchieveUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.checkFit();
        this.initView();
        this.initEvent();
    };
    AchieveUI.prototype.checkFit = function () {
        this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
        this.btn_back.y = this.rect_bg.height - this.btn_back.height;
    };
    AchieveUI.prototype.initView = function () {
    };
    AchieveUI.prototype.initEvent = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    AchieveUI.prototype.clickBack = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    AchieveUI.prototype.clear = function () {
        this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    return AchieveUI;
}(eui.Component));
__reflect(AchieveUI.prototype, "AchieveUI");
//# sourceMappingURL=AchieveUI.js.map