//egret publish --target wxgame
//egret build --target wxgame
class Main extends eui.UILayer {
    // private host = "http://192.168.1.137:3000";
    private host = "https://xgw-server.wxqiyou.com";
    /**
     * 游戏类型-微信的配置在version.js文件里面
     */
    private gameType = "test";
    /**
     * 换皮唯一识别号-微信的配置在version.js文件里面
     */
    private gameID = 1;
    /**
     * 非热更新代码的版本号-微信的配置在version.js文件里面
     */
    private nativeVersion = 1;
    protected createChildren(): void {
        super.createChildren();
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
    }
    /**
     * 请求开关
     */
    private querySwitch() {
        var request: egret.HttpRequest = new egret.HttpRequest();
        request.open(this.host + "/qygame/getSwitch?gameType=" + this.gameType + "" + this.gameID);
        request.withCredentials = false;
        request.addEventListener(egret.Event.COMPLETE, () => {
            var data = JSON.parse(request.response).data;
            if (this.nativeVersion > data.version) {//版本过高则显示套壳游戏
                this.addChild(new Game());
            }
            else {
                this.queryCode();
            }
        }, this);
        request.send();
    }
    /**
     * 请求热更新代码
     */
    private queryCode() {
        var request: egret.HttpRequest = new egret.HttpRequest();
        request.open(egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME
            ? "resource/script/" + this.gameType + "" + this.gameID + ".js" : this.host + "/qygame/hot?gameType=" + this.gameType + "" + this.gameID);
        request.withCredentials = false;
        request.addEventListener(egret.Event.COMPLETE, () => {
            qyscript.run(request.response,
                {
                    window: window,
                    egret: egret,
                    RES: RES,
                    eui: eui,
                    promise: Promise,
                    app: this,
                    gameType: this.gameType,
                    gameID: this.gameID,
                    qy: qy,
                    how: how
                });
        }, this);
        request.send();
    }
}
