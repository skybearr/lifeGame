var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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