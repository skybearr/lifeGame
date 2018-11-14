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