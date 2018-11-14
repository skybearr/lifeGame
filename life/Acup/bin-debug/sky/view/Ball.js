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
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(o) {
        var _this = _super.call(this) || this;
        _this.data = o;
        _this.init();
        return _this;
    }
    Ball.prototype.init = function () {
        var r = 30;
        this.bg.graphics.clear();
        this.bg.graphics.beginFill(0x000000);
        this.bg.graphics.moveTo(r, r);
        this.bg.graphics.lineTo(r * 2, r);
        this.bg.graphics.drawArc(r, r, r, 2 * Math.PI, 0, false);
        this.bg.graphics.lineTo(r, r);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
    };
    return Ball;
}(egret.DisplayObjectContainer));
__reflect(Ball.prototype, "Ball");
//# sourceMappingURL=Ball.js.map