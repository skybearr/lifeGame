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
var SearchUI = (function (_super) {
    __extends(SearchUI, _super);
    function SearchUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "SearchSkin";
        return _this;
    }
    SearchUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStart, this);
    };
    SearchUI.prototype.clickStart = function () {
    };
    SearchUI.prototype.clickBack = function (b) {
        var _this = this;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ scaleX: 0, scaleY: 0 }, 300).call(function () {
            if (_this.parent != null) {
                _this.parent.removeChild(_this);
            }
        }, this);
    };
    return SearchUI;
}(eui.Component));
__reflect(SearchUI.prototype, "SearchUI");
//# sourceMappingURL=SearchUI.js.map