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
var Game1UI = (function (_super) {
    __extends(Game1UI, _super);
    function Game1UI() {
        var _this = _super.call(this) || this;
        _this.skinName = "Game1Skin";
        return _this;
    }
    Game1UI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Game1UI;
}(eui.Component));
__reflect(Game1UI.prototype, "Game1UI");
//# sourceMappingURL=Game1UI.js.map