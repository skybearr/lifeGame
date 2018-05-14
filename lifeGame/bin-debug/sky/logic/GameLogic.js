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
    GameLogic.prototype.openStart = function () {
        this.initData();
        this.main.removeChildren();
        this.main.addChild(new StartUI());
    };
    GameLogic.prototype.initData = function () {
        if (this.data == null) {
            this.data = RES.getRes("config_json");
        }
        if (this.goods == null) {
            this.goods = RES.getRes("goods_json");
        }
        if (this.strings == null) {
            this.strings = RES.getRes("string_json");
        }
    };
    GameLogic.prototype.startGame = function () {
        this.main.removeChildren();
        this.main.addChild(new GameUI());
    };
    /**转发 */
    GameLogic.prototype.share = function (type) {
        var wx = window["wx"];
        wx.onShareAppMessage(function () {
            return {
                title: '转发标题',
                imageUrl: 'qua_3_png',
                success: function (res) {
                    console.log('转发成功');
                }
            };
        });
    };
    return GameLogic;
}(egret.EventDispatcher));
__reflect(GameLogic.prototype, "GameLogic");
//# sourceMappingURL=GameLogic.js.map