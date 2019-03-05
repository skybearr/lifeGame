class Game extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();
        RES.setMaxLoadingThread(1);
        GameLogic.getInstance().GameStage = this.stage;
        WxApi.getInstance().GameStage = this.stage;
        GameLogic.getInstance().main = this;

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new qy.AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new qy.ThemeAdapter("resource/"));


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        // await platform.login();
        // WxApi.getInstance().userInfo = await platform.getUserInfo();
        // console.log("userinfo:",WxApi.getInstance().userInfo);
    }

    private loadingView: LoadingUI;
    private async loadResource() {
        try {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, this.loadingView);
            if (this.loadingView != null && this.loadingView.parent != null) {
                this.loadingView.parent.removeChild(this.loadingView);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        if (this.loadingView != null && this.loadingView.parent != null) {
            this.loadingView.parent.removeChild(this.loadingView);
        }
        this.loadingView = null;
        GameLogic.getInstance().init();
    }
}
