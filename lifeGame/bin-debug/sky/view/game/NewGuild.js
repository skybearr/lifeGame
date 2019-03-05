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
var NewGuild = (function (_super) {
    __extends(NewGuild, _super);
    function NewGuild() {
        var _this = _super.call(this) || this;
        _this.skinName = "NewGuildSkin";
        return _this;
    }
    NewGuild.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.guidestep = 0;
        this.nextGuide();
        this.checkFit();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    NewGuild.prototype.checkFit = function () {
        this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
    };
    NewGuild.prototype.clickBtn = function (e) {
        if (e.target == this.btn_over) {
            this.over();
        }
        else {
            this.nextGuide();
        }
    };
    NewGuild.prototype.over = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    NewGuild.prototype.nextGuide = function () {
        if (this.crtstep != null) {
            this.crtstep.visible = false;
        }
        var step = this['gp_' + this.guidestep];
        if (step == null) {
            this.over();
            return;
        }
        this['lbl_' + this.guidestep].text = StringUtil.getSwfLangStr("guidestr" + this.guidestep);
        this.crtstep = step;
        this.crtstep.visible = true;
        this.guidestep++;
    };
    NewGuild.prototype.clear = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    return NewGuild;
}(eui.Component));
__reflect(NewGuild.prototype, "NewGuild");
