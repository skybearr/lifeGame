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
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameSkin";
        return _this;
    }
    GameUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initEvent();
    };
    GameUI.prototype.setMer = function (i) {
        this.reset();
        this.id = i;
        this.data = GameCache.mers[i];
        this.initMer();
    };
    GameUI.prototype.reset = function () {
    };
    GameUI.prototype.initMer = function () {
        this.mer.skinName = "Mer" + this.id + "Skin";
    };
    GameUI.prototype.initEvent = function () {
    };
    GameUI.prototype.readytoStart = function () {
    };
    GameUI.prototype.gameStart = function () {
    };
    GameUI.prototype.gameOver = function () {
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map