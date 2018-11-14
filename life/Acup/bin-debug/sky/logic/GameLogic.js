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