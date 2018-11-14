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