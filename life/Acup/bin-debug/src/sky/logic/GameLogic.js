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
var GameLogic = (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        return _super.call(this) || this;
    }
    GameLogic.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameLogic();
        }
        return this._instance;
    };
    GameLogic.prototype.startLogin = function () {
        if (this.startui == null) {
            this.startui = new StartUI();
        }
        GameCache.initData();
        this.main.addChild(this.startui);
    };
    GameLogic.prototype.startGame = function (i) {
        var _this = this;
        if (this.gameui == null) {
            this.gameui = new GameUI();
        }
        this.gameui.y = this.main.stage.height;
        this.main.addChild(this.gameui);
        this.gameui.setMer(i);
        egret.Tween.get(this.startui).to({ y: -this.startui.height }, 200);
        egret.Tween.get(this.gameui).to({ y: 0 }, 200).call(function () {
            _this.gameui.readytoStart();
        }, this);
    };
    return GameLogic;
}(egret.EventDispatcher));
__reflect(GameLogic.prototype, "GameLogic");
//# sourceMappingURL=GameLogic.js.map