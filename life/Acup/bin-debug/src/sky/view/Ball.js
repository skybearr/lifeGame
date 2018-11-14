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