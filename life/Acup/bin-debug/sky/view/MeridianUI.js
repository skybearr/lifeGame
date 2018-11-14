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
var MeridianUI = (function (_super) {
    __extends(MeridianUI, _super);
    function MeridianUI() {
        var _this = _super.call(this) || this;
        _this.props = ["time", "treat", "food", "shi", "xu"];
        _this.keys = ["时辰", "主治", "饮食", "实证", "虚症"];
        _this.skinName = "MeridianSkin";
        return _this;
    }
    MeridianUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStart, this);
    };
    Object.defineProperty(MeridianUI.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
            this.data = GameCache.mers[v];
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    MeridianUI.prototype.initView = function () {
        this.clearLbl();
        this.lbl_mer.text = this.data['nam'];
        var n = 0;
        for (var i = 0; i < 5; i++) {
            var o = this.data[this.props[i]];
            if (o != null) {
                this['lbl' + n].text = this.keys[i] + "： " + o;
                this['lbl' + n].filters = [new egret.GlowFilter(0x000000, 1, 1, 1, 1, 1, false, false)];
                n++;
            }
        }
    };
    MeridianUI.prototype.clickStart = function () {
        this.clickBack(false);
    };
    MeridianUI.prototype.clickBack = function (b) {
        var _this = this;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ scaleX: 0, scaleY: 0 }, 300).call(function () {
            if (_this.parent != null) {
                _this.parent.removeChild(_this);
            }
            if (!b) {
                GameLogic.getInstance().startui.inGame(_this.id);
            }
        }, this);
    };
    MeridianUI.prototype.clearLbl = function () {
        for (var i = 0; i < 5; i++) {
            this['lbl' + i].text = "";
        }
    };
    return MeridianUI;
}(eui.Component));
__reflect(MeridianUI.prototype, "MeridianUI");
//# sourceMappingURL=MeridianUI.js.map