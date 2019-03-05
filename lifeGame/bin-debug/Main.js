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
//egret publish --target wxgame
//egret build --target wxgame
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // private host = "http://192.168.1.137:3000";
        _this.host = "https://xgw-server.wxqiyou.com";
        /**
         * 游戏类型-微信的配置在version.js文件里面
         */
        _this.gameType = "test";
        /**
         * 换皮唯一识别号-微信的配置在version.js文件里面
         */
        _this.gameID = 1;
        /**
         * 非热更新代码的版本号-微信的配置在version.js文件里面
         */
        _this.nativeVersion = 1;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        if (window["gameType"] != undefined) {
            this.gameType = window["gameType"];
        }
        if (window["gameID"] != undefined) {
            this.gameID = window["gameID"];
        }
        if (window["nativeVersion"] != undefined) {
            this.nativeVersion = window["nativeVersion"];
        }
        this.querySwitch();
    };
    /**
     * 请求开关
     */
    Main.prototype.querySwitch = function () {
        var _this = this;
        var request = new egret.HttpRequest();
        request.open(this.host + "/qygame/getSwitch?gameType=" + this.gameType + "" + this.gameID);
        request.withCredentials = false;
        request.addEventListener(egret.Event.COMPLETE, function () {
            var data = JSON.parse(request.response).data;
            if (_this.nativeVersion > data.version) {
                _this.addChild(new Game());
            }
            else {
                _this.queryCode();
            }
        }, this);
        request.send();
    };
    /**
     * 请求热更新代码
     */
    Main.prototype.queryCode = function () {
        var _this = this;
        var request = new egret.HttpRequest();
        request.open(egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME
            ? "resource/script/" + this.gameType + "" + this.gameID + ".js" : this.host + "/qygame/hot?gameType=" + this.gameType + "" + this.gameID);
        request.withCredentials = false;
        request.addEventListener(egret.Event.COMPLETE, function () {
            qyscript.run(request.response, {
                window: window,
                egret: egret,
                RES: RES,
                eui: eui,
                promise: Promise,
                app: _this,
                gameType: _this.gameType,
                gameID: _this.gameID,
                qy: qy,
                how: how
            });
        }, this);
        request.send();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
