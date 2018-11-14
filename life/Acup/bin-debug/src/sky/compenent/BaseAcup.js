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
var BaseAcup = (function (_super) {
    __extends(BaseAcup, _super);
    function BaseAcup(o) {
        var _this = _super.call(this) || this;
        _this.data = o;
        _this.skinName = "BaseAcupSkin";
        return _this;
    }
    BaseAcup.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
    };
    return BaseAcup;
}(eui.Component));
__reflect(BaseAcup.prototype, "BaseAcup");
//# sourceMappingURL=BaseAcup.js.map