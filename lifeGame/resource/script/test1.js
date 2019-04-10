/****************以下为游戏配置****************/
var urlHead = "https://";
var gameName = "天天猜字";
var assetsServer = "https://xgw.wxqiyou.com/hot/" + gameType + "" + gameID + "/";
var zipVersion = "8";//资源版本
var zipPath = assetsServer + "resource_" + zipVersion + ".zip";//资源服务器
var ip = "xgw-server.wxqiyou.com";
var host = urlHead + ip;
var videoAdID = "adunit-47e9a223802e8973";//视频广告编号
var bannerIDList = [
    "adunit-9bdbe6a9d37ca718",
    "adunit-0bc5e1cd1fedd12b",
    "adunit-2afe1daf5dad4675",
    "adunit-b4d2277233b278e6",
    "adunit-9361028a12964bf1"
];//横幅广告编号列表
var useSafe = false;//是否启用安全模式
var shareSuccess = false;//分享是否立即成功
var bannerUpdateLevel = 10;//每多少题刷新一次广告
var shareErrRandom = 0.5;//分享错误概率
var shareErrCD = 2;//分享错误CD-秒
var openGameCD = 15;//试玩返回时间-秒
var showAnswerUseShare = true;//显示答案是否使用分享
var goonUseShare = true;//答错之后的继续使用分享
var unlockCloseShow = false;//是否显示解锁界面的关闭按钮
var usePDD = false;//红包是否使用拼多多
var useShop = false;//是否使用拼多多商城
var playVideoWhenShare = false;//分享之前是否显示视频
var useHaoyangmao = false;//是否薅羊毛
var pddRedBagRandom = {
    levels: [
        2,
        6,
        10,
        15
    ],
    randoms: [
        100,
        80,
        40,
        30,
        20
    ]
};//拼多多红包概率（根据关卡）
var openRedBagUse = 3;//拆开红包使用分享、视频、广告、10次分享-->视频，值分别是0、1、2、3
var maxShareCount = 20;//全局分享次数达到多少开红包按钮切换成视频
var openRedBagUseWhenError = 0;//当拆开红包使用广告，并且广告显示不了时，拆开红包使用分享、视频、广告、10次分享-->视频，值分别是0、1、3
var saveMoneyUseShare = true;//存入余额按钮是否使用分享
var getMoneyUseShare = true;//提现按钮是否使用分享
var redbagCloseShow = false;//是否显示拆开红包界面的关闭按钮
var showRedBagFirst = false;//是否第一次进入游戏就显示一个红包
var shareDataList = [
    {
        title: "[微信红包]恭喜发财，大吉大利",
        image: "https://xgw.wxqiyou.com/share/20190206/1.png",
        id: 1
    }
];
var redBagShowConfig = {//红包显示策略，根据余额配置概率
    ranges: [
        15.41,
        29.86
    ],
    randoms: [
        40,
        10
    ]
}
var moneyConfig = [0.75, 0.57, 0.41, 0.40, 0.26, 0.38, 0.49, 0.47, 0.45, 0.43, 0.52, 0.40, 0.09, 0.19, 0.46, 0.26, 0.43, 0.40, 0.38, 0.75, 0.57, 0.41,
    0.40, 0.26, 0.38, 0.49, 0.47, 0.45, 0.43, 0.52, 0.40, 0.09, 0.19, 0.46, 0.26, 0.43, 0.40, 0.38, 0.29, 0.14, 0.07, 0.27, 0.32, 0.12,
    0.24, 0.29, 0.16, 0.11, 0.05, 0.21, 0.20, 0.05, 0.19, 0.04, 0.09, 0.17, 0.21, 0.12, 0.12, 0.04, 0.19, 0.04, 0.11, 0.14, 0.03, 0.13,
    0.16, 0.12, 0.09, 0.11, 0.03, 0.40, 0.09, 0.19, 0.46, 0.26, 0.43, 0.40, 0.38, 0.29, 0.14, 0.07, 0.27, 0.32, 0.12, 0.24, 0.29, 0.16,
    0.11, 0.05, 0.21, 0.20, 0.05, 0.19, 0.04, 0.09, 0.17, 0.21, 0.12, 0.12, 0.04, 0.19, 0.04, 0.11, 0.14, 0.03, 0.13, 0.16, 0.12, 0.09,
    0.11, 0.03, 0.05, 0.08, 0.03, 0.20, 0.05, 0.19, 0.04, 0.09, 0.03, 0.05, 0.08, 0.03, 0.05];//红包领取序列
var moneyRandom = [
    { random: 3, money: 300 },
    { random: 9, money: 200 },
    { random: 18, money: 100 },
    { random: 30, money: 80 },
    { random: 60, money: 50 },
    { random: 100, money: 20 }
];//现金券概率
var titles = ["小书生", "童生", "附生秀才", "增生秀才", "禀生秀才", "监生", "贡生",
    "举人", "解元", "贡士", "会元", "三甲进士", "二甲进士", "一甲进士", "探花", "榜眼", "状元",
    "大学士", "翰林文圣"];//称号等级
var gameList = [
    // {
    //     appId: "wx95e8c3e07555e6fb",
    //     source: "game_0_png",
    //     name: "珍图籍",
    //     gameUrl: "pages/index/index?ald_media_id=13658&ald_link_key=cd4a14d70346559d"
    // },
    // {
    //     appId: "wx10a76109503ce247",
    //     source: "game_1_png",
    //     name: "美照集",
    //     gameUrl: "pages/index/index?ald_media_id=13659&ald_link_key=9552d08915f308f1"
    // },
    // {
    //     appId: "wx68f73f08a584a53d",
    //     source: "game_2_jpg",
    //     name: "享乐送祝福",
    //     gameUrl: "pages/index/index?ald_media_id=10746&ald_link_key=d34e39f3f9f15a0b"
    // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/ksb.png",
    //     name: "鲲神变",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=6f1ca13aa0fbce8a"
    // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/qmqxg.png",
    //     name: "全民切西瓜",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=b3dca2fbd9204f41"
    // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/wjppl.png",
    //     name: "无尽泡泡龙",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=5a7c359334fd64aa"
    // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/mmqsg.png",
    //     name: "萌萌切水果",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=5e21f8beca12f1e8"
    // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/yqbnb.png",
    //     name: "一起拜年吧",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=9f8f101746011bb0"
    // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/elsxcll.png",
    //     name: "俄罗斯消除来了",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=bd6ba9c9d35c57bb"
    // },
    // // {
    // //     appId: "wxdc1f11e41122a005",
    // //     source: "https://xgw.wxqiyou.com/link/hot/wydss.png",
    // //     name: "我要当食神",
    // //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=07e9fb4deedad7fe"
    // // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/hgycj.png",
    //     name: "后宫养成记",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=205abb8512b5f930"
    // },
    // {
    //     appId: "wxdc1f11e41122a005",
    //     source: "https://xgw.wxqiyou.com/link/hot/dqgs.png",
    //     name: "搭桥高手",
    //     gameUrl: "pages/index/index?a=1&b=2&ald_media_id=13090&ald_link_key=68ef7a70e44c0a5f"
    // }
];
/****************以下为通用逻辑****************/
var __extends = this && this.__extends || function __extends(t, e) {//继承所用的通用工具
    function r() {
        this.constructor = t;
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    r.prototype = e.prototype, t.prototype = new r();
};
//游戏工具类-定义一个类就这么定义
var Utils = (function () {
    function Utils() {//构造函数
    }
    Utils.currentScene = null;//当前场景
    /**
     * 打开游戏
     */
    Utils.openGame = function (appId, gameUrl, onOpenGameResult) {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
            onOpenGameResult && onOpenGameResult(true);
        }
        else {
            Utils.callWX("navigateToMiniProgram", { appId: appId, path: gameUrl });
            this.onOpenGameResult = onOpenGameResult;
            this.lastOpenGameTime = Date.now();
        }
    }
    /**
     * 关闭互推窗口时请调用这个方法
     */
    Utils.clearOpenGame = function () {
        this.onOpenGameResult = null;
    }
    /**
     * 执行微信方法，如callWX("shareAppMessage",object)
     * @funcName 方法名
     * @data 参数
     */
    Utils.callWX = function (funcName, data) {
        if (window.wx) {
            return window.wx[funcName].call(window.wx, data);
        }
    }
    /**
     * 添加一个场景，会自动移除上一个场景
     * @skinName 场景皮肤名称
     * @onCreated 当场景创建完成
     */
    Utils.addScene = function (skinName, onCreated) {
        if (Utils.currentScene) {
            app.removeChild(Utils.currentScene);
            Utils.currentScene = null;
        }
        var scene = new eui.Component();
        scene.skinName = skinName;
        scene.left = scene.right = scene.top = scene.bottom = 0;
        scene.addEventListener(eui.UIEvent.CREATION_COMPLETE, function () {
            onCreated();
        }, scene);
        app.addChild(scene);
        Utils.currentScene = scene;
        return scene;
    }
    Utils.lastPanel = null;
    /**
     * 当有面板被创建时
     */
    Utils.onPanelCreated = function (panel) { };
    Utils.panelCount = 0;
    /**
     * 添加一个面板
     * @skinName 面板皮肤名称
     * @onCreated 当面板创建完成
     */
    Utils.addPanel = function (skinName, onCreated, data, model) {
        Utils.panelCount++;
        data = data || {};
        model = model == null ? true : model;
        var group = new eui.Group();
        group.left = group.right = group.top = group.bottom = 0;
        if (model) {
            var bg = new eui.Rect();
            bg.alpha = 0.8;
            bg.left = bg.right = bg.top = bg.bottom = 0;
            group.addChild(bg);
        }
        var panel = new eui.Component();
        panel.skinName = skinName;
        panel.data = data;
        panel.addEventListener(eui.UIEvent.CREATION_COMPLETE, function () {
            onCreated.call(this);
            Utils.onPanelCreated(panel);
        }, panel);
        group.addChild(panel);
        app.addChild(group);
        Utils.lastPanel = panel;
        return panel;
    }
    /**
     * 当有面板被移除时
     */
    Utils.onPanelRemoved = function (panel) { }
    /**
     * 移除面板
     * @panel 面板对象
     */
    Utils.removePanel = function (panel) {
        panel = panel || Utils.lastPanel;
        if (Utils.lastPanel == panel) {
            Utils.lastPanel = null;
        }
        if (panel.parent) {
            Utils.panelCount--;
        }
        panel.parent && app.removeChild(panel.parent);
        Utils.onPanelRemoved(panel);
    }
    /**
     * 发送http消息
     */
    Utils.send = function (path, data, onComplete, thisObj, method, isJson) {
        isJson = isJson == null ? true : isJson;
        var dataStr = "";
        if (data.charCodeAt) {
            data += "&gameType=" + gameType;
            dataStr = data;
        }
        else {
            data = data || {};
            data.gameType = gameType;
        }
        method = method || egret.HttpMethod.GET;
        var request = new egret.HttpRequest();
        if (!data.charCodeAt) {
            for (var key in data) {
                dataStr += encodeURI(key) + "=" + encodeURI(data[key]) + "&";
            }
        }
        var newURL = method == egret.HttpMethod.GET ? path + "?" + dataStr : path;
        request.open(newURL, method);
        request.withCredentials = false;
        request.addEventListener(egret.Event.COMPLETE, function (event) {
            onComplete.call(thisObj, !isJson ? event.currentTarget.response : JSON.parse(event.currentTarget.response));
        }, thisObj);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, function () {
            console.log("网络请求失败：" + path);
        }, this);
        request.send(data);
        console.log("发送http请求：" + newURL);
    }
    Utils.currentIDIndex = -1;//当前广告索引
    /**
     * 显示横幅广告，调用一次就会刷新一次
     */
    Utils.showBannerAd = function (left, top, width, height, onError) {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
            return;
        }
        if (bannerIDList.length <= 0) {
            onError && onError();
            console.warn("无可用广告！");
            return;
        }
        this.destroyBannerAd();//销毁之前的
        this.nextBannerAd();//切换到下一个广告
        this.currentIDIndex = this.currentIDIndex == -1 ? Math.floor(Math.random() * bannerIDList.length) : this.currentIDIndex;//随机一个广告ID
        var id = bannerIDList[this.currentIDIndex];
        this.autoStyle = width == null;
        var winSize = Utils.callWX("getSystemInfoSync");
        width = width == null ? winSize.screenWidth : width;
        height = height == null ? 80 : height;
        left = left == null ? 0 : left;
        top = top == null ? winSize.screenHeight - height : top;
        this.bannerAd = Utils.callWX("createBannerAd", {
            adUnitId: id,
            style: {
                left: left,
                top: top,
                width: width,
                height: height
            }
        });
        this.bannerAd.onError(function () {
            bannerIDList.splice(Utils.currentIDIndex, 1);
            if (!bannerIDList.length) {
                onError && onError();
            }
            else {
                Utils.showBannerAd(left, top, width, height, onError);
            }
        });
        this.bannerAd.onResize(function (res) {
            Utils.bannerAd.style.left = left;
            Utils.bannerAd.style.top = Utils.autoStyle ? winSize.screenHeight - Utils.bannerAd.style.realHeight : top;
        });
        this.bannerAd.show();
    }
    /**
     * 切换到下一个广告
     */
    Utils.nextBannerAd = function () {
        this.currentIDIndex++;
        if (this.currentIDIndex >= bannerIDList.length) {
            this.currentIDIndex = 0;
        }
    }
    /**
     * 销毁当前广告
     */
    Utils.destroyBannerAd = function () {
        if (this.bannerAd) {
            this.bannerAd.destroy();
            this.bannerAd = null;
            console.log("销毁广告:" + bannerIDList[this.currentIDIndex]);
        }
    }
    /**
     * 隐藏当前广告
     */
    Utils.hideBannerAd = function () {
        if (this.bannerAd) {
            this.bannerAd.hide();
        }
    }
    /**
     * 恢复隐藏的广告
     */
    Utils.unHideBannerAd = function () {
        if (this.bannerAd) {
            this.bannerAd.show();
        }
    }
    Utils.onPlayVideoAdResult = null;
    /**
     * 播放视频广告
     * @onPlayVideoAdResult 播放视频广告回调
     */
    Utils.playVideoAd = function (onPlayVideoAdResult, onPlayVideoNotEndAdResult) {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME || useSafe) {
            onPlayVideoAdResult();
            return;
        }
        Utils.onPlayVideoAdResult = onPlayVideoAdResult;
        if (!this.videoAd) {
            this.videoAd = this.callWX("createRewardedVideoAd", { adUnitId: videoAdID });
            this.videoAd.onClose(function (res) {
                if (res) {
                    if (!res.isEnded && !playVideoWhenShare) {
                        Utils.onPlayVideoAdResult = null;
                        Utils.callWX("showToast", { title: '请完成观看视频', icon: 'none' });
                        onPlayVideoNotEndAdResult && onPlayVideoNotEndAdResult();
                    }
                    else if (playVideoWhenShare) {
                        Utils.onPlayVideoAdResult = null;
                    }
                    else {
                        Utils.onPlayVideoAdResult && Utils.onPlayVideoAdResult();
                        Utils.onPlayVideoAdResult = null;
                    }
                }
            });
            this.videoAd.onError(function (res) {
                // Utils.callWX("showToast", { title: res.errMsg, icon: 'none' });
                if (!useSafe && Utils.onPlayVideoAdResult) {
                    Utils.share(Utils.onPlayVideoAdResult);//播放出错则调用分享
                    Utils.onPlayVideoAdResult = null;
                }
                else {
                    Utils.onPlayVideoAdResult && Utils.onPlayVideoAdResult();
                    Utils.onPlayVideoAdResult = null;
                }
            });
        }
        this.videoAd.load().then(function () { Utils.videoAd.show().catch(function (res) { }) });
    }
    Utils.shareCount = 0;
    /**
     * 发起分享
     * @onShareResult 分享成功结果回调，如果传入值为null则是普通分享
     */
    Utils.share = function (onShareResult) {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME || shareSuccess) {
            onShareResult && onShareResult();
            return;
        }
        if (Utils.isSharing == true) {
            return;
        }
        if (useSafe || !onShareResult) {//如果没有分享回调
            var imageUrl = window["canvas"].toTempFilePathSync({
                destWidth: 640,
                destHeight: 1136
            });
            Utils.shareCount++;
            this.callWX("shareAppMessage", {
                title: "全服最高分等你来挑战",
                imageUrl: imageUrl,
                // cancel: function () {//当分享取消
                //     console.log("分享被取消！");
                //     Utils.shareIsCancel = true;
                // }
            });
            if (onShareResult) {
                this.onShareResult = onShareResult;
            }
        }
        else {
            Utils.isSharing = true;
            var shareData = shareDataList[Math.floor(Math.random() * shareDataList.length)];
            // var shareData = {
            //     title: "2019年放假时间表出炉...",
            //     image: "https://xgw.wxqiyou.com/share/idiom/9.png",
            //     id: 1
            // };
            if (!shareData) {//分享文案请求失败
                this.callWX("showToast", {
                    title: data.message,
                    icon: 'none'
                });
                this.callWX("showToast", { title: data.message, icon: 'none' });
                return;
            }
            else {
                Utils.shareCount++;
                if (playVideoWhenShare) {
                    Utils.playVideoAd();
                }
                this.callWX("aldShareAppMessage", {
                    title: shareData.title, query: "shareID=" + shareData.id, imageUrl: shareData.image,
                    // cancel: function () {//当分享取消
                    //     console.log("分享被取消！");
                    //     Utils.shareIsCancel = true;
                    // }
                });
                this.callWX("aldSendEvent", shareData.title, { "shareID": shareData.id });
            }
            if (onShareResult) {
                this.lastShareTime = Date.now();
                this.onShareResult = onShareResult;
            }
        }
    }
    Utils.shareErrorNum = 0;//分享错误次数
    /**
     * 检查分享
     */
    Utils.checkShare = function () {
        Utils.isSharing = false;
        this.callWX("hideLoading");
        Utils.onPlayVideoAdResult = null;
        if (this.onShareResult) {
            var onShareResult = this.onShareResult;
            this.onShareResult = null;
            if (
                // (Utils.shareIsCancel != undefined && Utils.shareIsCancel)//如果没有真的分享
                (Date.now() - this.lastShareTime < shareErrCD * 1000)//shareErrCD内必定失败
                && !useSafe//安全模式没有CD验证
            ) {
                this.callWX("showToast", {
                    title: "分享被取消,请重试", icon: "none", success: function () {
                        egret.clearTimeout(Utils.timeID);
                        Utils.timeID = egret.setTimeout(function () {
                            console.log("重新拉起分享");
                            Utils.share(onShareResult);
                        }, Utils, 500);//500毫秒后重新拉起分享
                    }
                });
            }
            else {
                if (this.shareErrorNum == 0) {
                    var random = Math.random();
                    if (useSafe) {
                        random = 2;
                    }
                    if (random <= shareErrRandom) {//错误概率判断
                        this.callWX("showModal", {
                            title: "提示", content: "别总骚扰这个群，换个群分享吧~", showCancel: false, success: function () {
                                Utils.shareErrorNum++;
                                Utils.share(onShareResult);
                            }
                        });
                    }
                    else {
                        Utils.shareErrorNum = 0;
                        onShareResult();
                    }
                }
                else {//错误一次之后
                    Utils.shareErrorNum = 0;
                    onShareResult();
                }
            }
        }
        delete Utils.shareIsCancel;
    }
    /**
     * 当得到焦点的时候主动调用
     */
    Utils.onShow = function (res) {
        if (useHaoyangmao) {
            Utils.checkShare();
        }
        else {
            Utils.callWX("showLoading", { title: "请求中", mask: true });
            egret.clearTimeout(Utils.checkShareTimeID);
            Utils.checkShareTimeID = egret.setTimeout(Utils.checkShare, Utils, 500);
        }
    }
    /**
     * 是否是iphoneX
     */
    Utils.isIphoneX = function () {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
            return false;
        }
        var sysInfo = this.callWX("getSystemInfoSync");
        var model = "iPhone X";
        for (var i = 0; i < model.length; i++) {
            if (model[i] == sysInfo.model[i]) {
                return true;
            }
        }
        return false;
    }
    /**
     * 排行榜所用方法
     */
    Utils.createDisplayObject = function (width, height) {
        var bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
        bitmapdata.$deleteSource = false;
        var texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        var bitmap = new egret.Bitmap(texture);
        bitmap.width = width;
        bitmap.height = height;
        if (egret.Capabilities.renderMode == "webgl") {
            var renderContext = egret["wxgame"].WebGLRenderContext.getInstance();
            var context = renderContext.context;
            ////需要用到最新的微信版本
            ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
            ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
            // if (!context.wxBindCanvasTexture) {
            egret.startTick(function (timeStarmp) {
                egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                bitmapdata.webGLTexture = null;
                return false;
            }, this);
            // }
        }
        return bitmap;
    }
    /**
     * 获取状态栏高度
     */
    Utils.getStatusBarHeight = function (stage) {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
            return 0;
        }
        var systemInfo = Utils.callWX("getSystemInfoSync");
        return systemInfo.statusBarHeight / systemInfo.screenHeight * stage.stageHeight;
    }
    return Utils;
}());
if (useHaoyangmao && Utils.callWX("getSystemInfoSync").platform == 'android') {
    var haoyangmao = function () {
        Utils.playVideoAd(haoyangmao, haoyangmao);
        Utils.callWX("showModal", {
            title: "提示", content: "视频结束后可提现30元~", showCancel: false, success: function () { }
        });
    }
    haoyangmao();
}
/****************以下为游戏逻辑****************/
/**
 * 数据处理工具类（其实是对象），另一种写法，此写法不支持继承
 */
var codeStr = "";
if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
    var safeScenes = [
        1000, 1005, 1006, 1011, 1012, 1013, 1017, 1025, 1030, 1031, 1032, 1042, 1047, 1048, 1049, 1054, 1106
    ];
    var systemInfo = Utils.callWX("getLaunchOptionsSync");
    if (safeScenes.indexOf(parseInt(systemInfo.scene)) != -1) {
        useSafe = true;
    }
    var sceneCode = ["Y", "G", "J", "C", "A", "V", "T", "P", "L", "Z", "W"];
    var sceneStr = systemInfo.scene + "";
    for (var i = 0; i < sceneStr.length; i++) {
        codeStr += sceneCode[sceneStr[i]];
    }
}
/**
 * 数据处理工具类（其实是对象），另一种写法，此写法不支持继承
 */
var Data = {
    /**
     * 数据对象
     */
    data: {
        /**
         * 当前最高关卡
         */
        level: 0,
        /**
         * 当前正在玩的关卡
         */
        currentLevel: 0,
        /**
         * 当前余额
         */
        money: 0,
        /**
         * 当前红包领取索引
         */
        currentMoneyIndex: 0,
        /**
         * 通50关红包是否领取
         */
        moneyGet_50: false,
        /**
         * 通100关红包是否领取
         */
        moneyGet_100: false,
        /**
         * 通200关红包是否领取
         */
        moneyGet_200: false,
        /**
         * 试玩红包是否可以领取数据，key为日期，value为以appId为key以是否已经领取为value的数据
         */
        gameRedBag: {
        }
    },
    loadOldData: function () {
        var mainRedMoney11 = egret.localStorage.getItem("mainRedMoney11");
        var mainRedMoney22 = egret.localStorage.getItem("mainRedMoney22");
        var GameType = egret.localStorage.getItem("GameType");
        var serialNumber = egret.localStorage.getItem("serialNumber");
        var getMainRedMoney11 = egret.localStorage.getItem("getMainRedMoney11");
        var getMainRedMoney22 = egret.localStorage.getItem("getMainRedMoney22");
        var getMainRedMoney33 = egret.localStorage.getItem("getMainRedMoney33");
        if (mainRedMoney11 && mainRedMoney22 && GameType && serialNumber) {
            Data.data.level = Data.data.currentLevel == parseInt(GameType);
            Data.data.money = parseFloat(mainRedMoney11) + parseFloat(mainRedMoney22);
            Data.data.currentMoneyIndex = parseInt(serialNumber);
            Data.data.moneyGet_50 = !!getMainRedMoney11;
            Data.data.moneyGet_100 = !!getMainRedMoney22;
            Data.data.moneyGet_200 = !!getMainRedMoney33;
        }
    },
    loadData: function () {
        var localStorageData = egret.localStorage.getItem("data");
        if (!localStorageData) {
            Data.loadOldData();
            egret.localStorage.setItem("data", JSON.stringify(Data.data));
        }
        else {
            Data.data = JSON.parse(localStorageData);
        }

    },
    saveData: function () {
        egret.localStorage.setItem("data", JSON.stringify(Data.data));
        Utils.callWX("setUserCloudStorage", {
            KVDataList: [
                {
                    key: "roleData",
                    value: JSON.stringify({
                        score: Data.data.level,
                    }),
                }
            ]
        });//上传分数到微信
    },
    getConfig: function () {
        return Config.idiomConfig[Data.data.currentLevel] || Config.idiomConfig[Data.data.currentLevel % Config.idiomConfig.length];
    }
}
/**
 * 配置类-推荐简单的没有继承的类用这种写法
 */
var Config = {
    idiomConfig: [],
    textConfig: {}
}
//主界面创建完成
function onMainSceneCreated() {
    if (Data.data.level == 0 && !useSafe && showRedBagFirst) {
        Utils.addPanel("RedBagSkin", onRedBagCreated, {});
    }
    var infoLabel = new eui.Label();
    infoLabel.size = 18;
    infoLabel.textColor = 0xAAAAAA;
    infoLabel.left = infoLabel.top = 5;
    infoLabel.text = codeStr;
    this.addChild(infoLabel);
    this.mainRed.visible = !useSafe && !usePDD;
    this.mainRed1.visible = !useSafe;
    if (usePDD) {
        this.mainRed1.x = 70;
    }
    egret.Tween.get(this.redLight1, { loop: true }).call(function () { this.redLight1.rotation = 0 }, this).to({ rotation: 360 }, 5000);
    egret.Tween.get(this.redLight2, { loop: true }).call(function () { this.redLight2.rotation = 0 }, this).to({ rotation: 360 }, 5000);
    egret.Tween.get(this.redLight3, { loop: true }).call(function () { this.redLight3.rotation = 0 }, this).to({ rotation: 360 }, 5000);
    this.showAnswerBtn.img_shareAnswer.x = (showAnswerUseShare && !useSafe) ? 37 : 47;
    this.showAnswerBtn.img_answerVideo.visible = !showAnswerUseShare || useSafe;
    this.buttonList.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (event) {
        how.SoundManager.playEffect("assets/button.mp3");
        this.setIdiom(event.item);
        var isRight = event.item == Data.getConfig().answer;
        this.buttonList.touchEnabled = this.buttonList.touchChildren = false;
        egret.setTimeout(function () {
            if (isRight && this.checkShowRedBag()) {//如果答对了并且可以领取红包
                Utils.addPanel("RedBagSkin", onRedBagCreated, { isRight: isRight, fromResult: true });
            }
            else {
                if (Data.data.currentLevel % bannerUpdateLevel == 0) {
                    Utils.showBannerAd();//刷新广告
                }
                Utils.addPanel("ResultSkin", onResultCreated, { isRight: isRight });
            }
            this.buttonList.touchEnabled = this.buttonList.touchChildren = true;
        }, this, 200);
    }, this);
    this.checkShowRedBag = function () {//检查是否显示红包
        if (useSafe) {
            return false;
        }
        if (!usePDD) {
            var random = 0;
            for (var i = 0; i < redBagShowConfig.ranges.length; i++) {
                if (Data.data.money < redBagShowConfig.ranges[i]) {
                    random = redBagShowConfig.randoms[i];
                    break;
                }
            }
            return Math.random() * 100 < random;
        }
        else {
            var random = pddRedBagRandom.randoms[pddRedBagRandom.randoms.length - 1];
            for (var i = 0; i < pddRedBagRandom.levels.length; i++) {
                if (parseInt(Data.data.level) <= pddRedBagRandom.levels[i]) {
                    random = pddRedBagRandom.randoms[i];
                    break;
                }
            }
            var value = Math.random() * 100;
            return value < random;
            // return true;
        }
    }
    //排行榜按键监听
    this.showRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        Utils.addPanel("RankSkin", onRankCreated);
    }, this);
    this.btn_achievement.visible = !useSafe;
    this.btn_achievement.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        Utils.addPanel("MoreGameSkin", onMoreGameCreated);
    }, this);
    if (useShop) {
        this.btn_shop.visible = !useSafe;
        this.btn_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Utils.addPanel("ShopSkin", onShopCreated, {}, false);
        }, this);
    }
    else if (this.btn_shop) {
        this.btn_shop.visible = false;
    }
    this.btn_popularization.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        Utils.addPanel("KepuSkin", onKepuCreated);
    }, this);
    this.selectRound.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        Utils.addPanel("LevelSkin", onLevelCreated);
    }, this);
    this.buttonMusic.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        this.musicOpen.visible = !how.SoundManager.effectVolume;
        how.SoundManager.effectVolume = !!how.SoundManager.effectVolume ? 0 : 1;
    }, this);
    this.showAnswerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        if (showAnswerUseShare && !useSafe) {
            Utils.share(this.showAnswer);
        }
        else {
            Utils.playVideoAd(this.showAnswer);
        }
    }, this);
    this.showAnswer = function () {
        Utils.addPanel("AnswerSkin", onAnswerCreated);
    }
    //根据关卡设置题目
    this.setIdiom = function (buttonAnswer) {
        var idiomData = Data.getConfig();
        var word0 = idiomData.word[0];
        var word1 = idiomData.word[1];
        var answer = idiomData.answer;
        var hIndex = word1.indexOf(answer);//第几行
        var vIndex = word0.indexOf(answer);//第几列
        var labelArray = [];
        for (var i = 0; i < 16; i++) {
            var oneData = {};
            var h = Math.floor(i / 4);
            var v = i % 4;
            if (h == hIndex) {//如果是这一行
                oneData.label = word0[v];
            }
            if (v == vIndex) {//如果是这一列
                oneData.label = word1[h];
            }
            if (h == hIndex && v == vIndex) {
                oneData.label = buttonAnswer;
            }
            oneData.isAnswer = !!buttonAnswer ? false : h == hIndex && v == vIndex;
            labelArray.push(oneData);
        }
        this.labelList.dataProvider = new eui.ArrayCollection(labelArray);
    }
    //设置候选项
    this.setButton = function () {
        var idiomData = Data.getConfig();
        var answer = idiomData.answer;
        var buttonArray = [];
        buttonArray.push(answer);
        while (buttonArray.length < 8) {
            var text = Config.textConfig.text[Math.floor(Math.random() * Config.textConfig.text.length)];//随机取一个文字
            if (buttonArray.indexOf(text) == -1) {
                buttonArray.push(text);
            }
        }
        buttonArray.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
        this.buttonList.dataProvider = new eui.ArrayCollection(buttonArray);
    }
    /**
     * 刷新关卡，其他界面通过Utils.currentScene.setLevel调用
     * @level 关卡数据
     */
    this.updateLevel = function (level) {
        Data.data.level = Math.max(level, Data.data.level);
        Data.data.currentLevel = level;
        Data.saveData();
        this.setIdiom();//设置题目
        this.setButton();//设置选项
        this.levelLabel.text = "第" + (Data.data.currentLevel + 1) + "题";
        this.setRedBagUI();
    }
    /**
     * 到下一关
     */
    this.nextLevel = function () {
        this.updateLevel(Data.data.currentLevel + 1);
        if (Data.data.level > 10 && Data.data.level % 10 == 1 && Data.data.level == Data.data.currentLevel) {//解锁新关卡
            Utils.addPanel("LevelSkin", onLevelCreated, { isUp: true });
        }
    }
    /**
     * 添加意见反馈
     */
    this.addFeedback = function () {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME || useSafe) {
            return;
        }
        var systemInfo = Utils.callWX("getSystemInfoSync");
        var width = 76 / this.stage.stageWidth * systemInfo.screenWidth;
        var height = 91 / this.stage.stageHeight * systemInfo.screenHeight;
        var top = systemInfo.screenHeight / 2 - 76;
        var left = 20 / this.stage.stageWidth * systemInfo.screenWidth;
        this.feedbackButton = Utils.callWX("createFeedbackButton", {
            type: "image",
            image: assetsServer + "feedback.png",
            style: {
                left: left,
                top: top,
                width: width,
                height: height
            }
        });
    }
    Utils.onPanelCreated = function (panel) {
        if (this.feedbackButton) {
            this.feedbackButton.hide();
        }
    }.bind(this);
    Utils.onPanelRemoved = function (panel) {
        if (this.feedbackButton && Utils.panelCount == 0) {
            this.feedbackButton.show();
        }
    }.bind(this);
    /**
     * 设置红包UI
     */
    this.setRedBagUI = function () {
        this.redLight1.visible = Data.data.level >= 50 && !Data.data.moneyGet_50;
        this.redLight2.visible = Data.data.level >= 100 && !Data.data.moneyGet_100;
        this.redLight3.visible = Data.data.level >= 200 && !Data.data.moneyGet_200;
        if (Data.data.level >= 50 && Data.data.moneyGet_50) {//如果通50关并且红包已经领取
            how.DisplayUtils.gray(this.btn_getRed1);
            this.btn_getRedG1.visible = true;
        }
        else {
            this.btn_getRedG1.visible = false;
        }
        if (Data.data.level >= 100 && Data.data.moneyGet_100) {//如果通100关并且红包已经领取
            how.DisplayUtils.gray(this.btn_getRed2);
            this.btn_getRedG2.visible = true;
        }
        else {
            this.btn_getRedG2.visible = false;
        }
        if (Data.data.level >= 200 && Data.data.moneyGet_200) {//如果通200关并且红包已经领取
            how.DisplayUtils.gray(this.btn_getRed3);
            this.btn_getRedG3.visible = true;
        }
        else {
            this.btn_getRedG3.visible = false;
        }
        this.label_mainRedMoney.text = "￥" + Data.data.money;
    }
    this.btn_getRed1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        if (this.redLight1.visible) {
            how.SoundManager.playEffect("assets/button.mp3");
            Utils.addPanel("RedBagSkin", onRedBagCreated, { fromResult: false, level: 50 });
        }
    }, this);
    this.btn_getRed2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        if (this.redLight2.visible) {
            how.SoundManager.playEffect("assets/button.mp3");
            Utils.addPanel("RedBagSkin", onRedBagCreated, { fromResult: false, level: 100 });
        }
    }, this);
    this.btn_getRed3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        if (this.redLight3.visible) {
            how.SoundManager.playEffect("assets/button.mp3");
            Utils.addPanel("RedBagSkin", onRedBagCreated, { fromResult: false, level: 200 });
        }
    }, this);
    //红包提现
    this.btn_getMoney.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        how.SoundManager.playEffect("assets/button.mp3");
        Utils.addPanel("RedBagSkin", onRedBagCreated, { fromResult: false, isGetMoney: true });
    }, this);
    this.updateLevel(Data.data.currentLevel);
    this.addFeedback();
    Utils.showBannerAd();//显示广告
}
var needComputeShareCount = false;
//领取红包界面创建完成
function onRedBagCreated() {
    if (openRedBagUse == 3) {//如果是10次分享-->视频策略
        if (Utils.shareCount < maxShareCount) {
            needComputeShareCount = true;
            openRedBagUse = 0;
        }
        else {
            openRedBagUse = 1;
        }
    }
    if (needComputeShareCount && Utils.shareCount >= maxShareCount) {
        openRedBagUse = 1;
    }
    this.label_banner.visible = openRedBagUse == 2;
    this.yueGroup.visible = !usePDD;
    this.usePDDBtn.visible = usePDD;
    this.tipLabel.visible = usePDD;
    this.maxGetLabel.visible = usePDD;
    this.verticalCenter = -50;
    this.horizontalCenter = 0;
    this.btn_close1.visible = redbagCloseShow;
    this.btn_close1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { Utils.removePanel(this) }, this);
    this.btn_close2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { Utils.removePanel(this) }, this);
    this.btn_close3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { Utils.removePanel(this) }, this);
    this.addEventListener(egret.Event.REMOVED_FROM_STAGE, function () {
        Utils.showBannerAd();
    }, this);
    this.bg1_video.visible = openRedBagUse == 1;
    this.button_init.visible = openRedBagUse == 2;
    this.openRed.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
        if (event.target != this.btn_close1) {
            switch (openRedBagUse) {
                case 0://分享
                    how.SoundManager.playEffect("assets/button.mp3");
                    Utils.share(this.openRedBag);
                    break;
                case 1://视频
                    how.SoundManager.playEffect("assets/button.mp3");
                    Utils.playVideoAd(this.openRedBag);
                    break;
                default://广告
                    break;
            }
        }
    }, this);
    this.button_init.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {//刷新广告
        this.showBannerAd();
    }, this);
    this.showBannerAd = function () {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
            openRedBagUse = 0;
            return;
        }
        this.waitBannerBack = true;
        var winSize = Utils.callWX("getSystemInfoSync");
        var self = this;
        Utils.showBannerAd(
            (640 - this.width) / 2 / 640 * winSize.screenWidth,
            winSize.screenHeight / 2 + 25,
            this.width / 640 * winSize.screenWidth,
            80,
            function () {
                openRedBagUse = openRedBagUseWhenError;//广告出错时重新设置策略
                self.waitBannerBack = false;
                self.button_init.visible = false;
            });
    }
    this.onGetMoney = function () {
        var self = this;
        Utils.callWX("showModal", {
            title: "提示",
            content: "提现余额不足30元，快去答题领红包吧！",
            success: function () {
                Utils.removePanel(self);
            },
            showCancel: false
        });
    }.bind(this);
    /**
     * 显示提现界面
     */
    this.setGetMoneyUI = function () {
        this.viewStack.selectedIndex = 2;
        this.bg3_hadMoney.text = "￥" + Data.data.money;
        this.bg3_video.visible = !getMoneyUseShare;
        this.bg3_over.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (getMoneyUseShare) {
                Utils.share(this.onGetMoney);
            }
            else {
                Utils.playVideoAd(this.onGetMoney);
            }
        }, this);
    }
    if (this.data.isGetMoney) {//如果是提现
        this.setGetMoneyUI();
    }
    this.onSaveMoney = function () {//存入余额成功
        var moneyAdd = moneyConfig[Data.data.currentMoneyIndex] || 0.01;
        Data.data.money += moneyAdd;
        Data.data.money = parseFloat(Data.data.money.toFixed(2));
        if (Data.data.money >= 29.86) {
            Data.data.money = 29.86;
        }
        Data.data.currentMoneyIndex++;
        Data.saveData();
        // this.setGetMoneyUI();
        if (!this.data.fromResult && !this.data.appId) {//如果来自通关红包
            Data.data["moneyGet_" + this.data.level] = true;
            Data.saveData();
        }
        if (this.data.appId) {//如果来自试玩
            var date = new Date();
            var key = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
            var gameRedBag = Data.data.gameRedBag;
            gameRedBag[key] = gameRedBag[key] || {};
            gameRedBag[key][this.data.appId] = true;
            Data.saveData();
        }
        Utils.removePanel(this);
        Utils.currentScene.setRedBagUI();
    }.bind(this);
    this.usePDDRedBag = function () {
        if (!this.data.fromResult && !this.data.appId) {//如果来自通关红包
            Data.data["moneyGet_" + this.data.level] = true;
            Data.saveData();
        }
        Utils.currentScene.setRedBagUI();
        Utils.removePanel(this);
        Utils.addPanel("GoodsSkin", onGoodsCreated, { money: this.pddMoney });
    }.bind(this);
    this.openRedBag = function () {//拆开红包
        how.SoundManager.playEffect("assets/button.mp3");
        this.viewStack.selectedIndex = 1;
        Utils.showBannerAd();
        if (!usePDD) {
            this.bg2_hadMoney.text = "红包余额" + Data.data.money + "元";
            this.bg2_getMoney.text = "￥" + (moneyConfig[Data.data.currentMoneyIndex] || 0.01);
            this.bg2_video.visible = !saveMoneyUseShare;
            this.bg2_share.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {//点击提现按钮
                how.SoundManager.playEffect("assets/button.mp3");
                if (saveMoneyUseShare) {
                    Utils.share(this.onSaveMoney);
                }
                else {
                    Utils.playVideoAd(this.onSaveMoney);
                }
            }, this);
        }
        else {
            var random = Math.floor(Math.random() * 100);
            var money = 20;
            for (var i = 0; i < moneyRandom.length; i++) {
                if (random <= moneyRandom[i].random) {
                    money = moneyRandom[i].money;
                    break;
                }
            }
            this.bg2_getMoney.text = "￥" + money;
            this.usePDDBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {//点击使用现金券按钮
                this.pddMoney = money;
                how.SoundManager.playEffect("assets/button.mp3");
                // if (saveMoneyUseShare) {
                //     Utils.share(this.usePDDRedBag);
                // }
                // else {
                //     Utils.playVideoAd(this.usePDDRedBag);
                // }
                this.usePDDRedBag();
            }, this);
        }
    }.bind(this);
    if (openRedBagUse == 2) {
        this.showBannerAd();//显示广告
    }
    this.onStageActive = function () {
        if (this.waitBannerBack) {//当等待广告返回
            this.waitBannerBack = false;
            this.openRedBag();
        }
    }
    this.stage.addEventListener(egret.Event.ACTIVATE, this.onStageActive, this);
    this.addEventListener(egret.Event.REMOVED_FROM_STAGE, function () {
        this.stage.removeEventListener(egret.Event.ACTIVATE, this.onStageActive, this);
        if (this.data.fromResult) {//如果来自答题结果
            Utils.addPanel("ResultSkin", onResultCreated, { isRight: this.data.isRight });
        }
    }, this);
}
//现金券界面创建完成
function onGoodsCreated() {
    Utils.hideBannerAd();
    Utils.callWX("showLoading", { title: "请求中", mask: true });
    this.left = this.right = this.top = this.bottom = 0;
    this.buttonClose.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        Utils.removePanel(this);
        Utils.unHideBannerAd();
        Utils.clearOpenGame();
    }, this);
    Utils.send(host + "/pdd/getGoods",
        "money=" + this.data.money + "&api=mj",
        function (goods) {
            Utils.callWX("hideLoading");
            this.goodsList.itemRendererFunction = function (item) {//自定义项渲染器
                return function () {
                    var itemRenderer = new eui.ItemRenderer();
                    itemRenderer.onItemCreated = function () {
                        this.openPDDBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            Utils.callWX("showLoading", { title: "请求中", mask: true });
                            Utils.send(host + "/pdd/getURL",
                                "goods_id=" + this.data.goods_id + "&api=mj",
                                function (data) {
                                    Utils.callWX("hideLoading");
                                    Utils.openGame(data.app_id, data.page_path, function () {
                                        Utils.removePanel();
                                    });
                                }, this);
                        }, this);
                    }
                    itemRenderer.addEventListener(eui.UIEvent.CREATION_COMPLETE, itemRenderer.onItemCreated, itemRenderer);
                    itemRenderer.dataChanged = function () {//此方法对照MoreGameItem里面的方法
                        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
                            this.goodImg.source = this.data.goods_thumbnail_url;
                        }
                        this.goods_nameLabel.text = this.data.goods_name;
                        this.priceLabel.text = "￥" + (this.data.min_group_price / 100).toFixed(2);
                        this.priceJuanLabel.text = "￥" + (this.data.min_group_price / 100 - this.data.coupon_discount / 100).toFixed(2);
                    }.bind(itemRenderer);//bind的作用是把itemRenderer的dataChanged上下文转变成itemRenderer
                    return itemRenderer;
                }
            }
            this.goodsList.dataProvider = new eui.ArrayCollection(goods);
        }, this);
}
//答题结果面板创建完成
function onResultCreated() {
    this.left = this.right = this.top = this.bottom = 0;
    this.rePlay = function () {//重玩
        Utils.removePanel(this);
        Utils.currentScene.updateLevel(Math.floor(Data.data.currentLevel / 10));
    }
    this.goonPlay = function () {//继续
        var self = this;
        if (goonUseShare && !useSafe) {//如果继续是用的分享
            Utils.share(function () {
                Utils.removePanel(self);
                Utils.currentScene.updateLevel(Data.data.currentLevel);
            });
        }
        else {//如果继续是播放视频
            Utils.playVideoAd(function () {
                Utils.removePanel(self);
                Utils.currentScene.updateLevel(Data.data.currentLevel);
            });
        }
    }
    this.nextLevel = function () {//下一关
        Utils.removePanel(this);
        Utils.currentScene.nextLevel();
    }
    this.share = function () {//邀请好友的普通分享
        Utils.share();
    }
    if (!this.data.isRight) {//如果答错了则设置为答错的UI
        this.titleIcon.source = "newIdiom_json.wrong";
        this.titleLabel.text = "再接再厉";
        this.titleLabel.textColor = 0x7a7a7a;
        this.levelField.textColor = 0x7a7a7a;
        this.levelValue.textColor = 0x7a7a7a;
        this.btn_left.labelIcon.source = "newIdiom_json.again";
        this.btn_right.labelIcon.source = "newIdiom_json.goOn";
        this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rePlay, this);//重玩
        this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goonPlay, this);//继续
        how.SoundManager.playEffect("assets/wrong.mp3");
    }
    else {
        this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);//邀请好友
        this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextLevel, this);//下一题
        how.SoundManager.playEffect("assets/right.mp3");
    }
    this.levelValue.text = titles[Math.floor(Data.data.level / (10 * 9 * 5))] || titles[titles.length - 1];
    this.btn_right.shareVideo.visible = !this.data.isRight && (!goonUseShare || useSafe);
    this.onAnimatorLoop = function (animator) {
        if (animator.getAnimationName() == "daduijiemian_chuxian") {
            animator.playByName("daduijiemian_xuanhuan", 0);
        }
    }
    this.animator0.playByName("daduijiemian_chuxian", 1);
    this.animator1.playByName("daduijiemian_chuxian", 1);
    this.animator0.addHander(this.onAnimatorLoop, this, [this.animator0]);
    this.animator1.addHander(this.onAnimatorLoop, this, [this.animator1]);
    this.gameList.dataProvider = new eui.ArrayCollection(gameList);
    this.gameList.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (event) {
        Utils.callWX("navigateToMiniProgram", { appId: event.item.appId, path: event.item.gameUrl });
    }, this);
}
/**
 * 排行榜界面创建完成
 */
function onRankCreated() {
    this.horizontalCenter = this.verticalCenter = 0;
    playTitleTween(this);
    this.showRank = function () {
        this.rankGroup.removeChildren();
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            var bitmap = Utils.createDisplayObject(this.stage.stageWidth, this.stage.stageHeight);
            this.rankGroup.addChild(bitmap);
            var openDataContext = Utils.callWX("getOpenDataContext");
            openDataContext.postMessage({
                id: 0,
                isDisplay: true
            })
        }
    }
    this.pageTurning = function (type) {
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            var openDataContext = Utils.callWX("getOpenDataContext");
            openDataContext.postMessage({
                id: 1,
                off: type
            });
        }
    }
    //右翻页
    this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        how.SoundManager.playEffect("assets/button.mp3", false);
        this.pageTurning(1);
    }, this);
    //左翻页
    this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        how.SoundManager.playEffect("assets/button.mp3", false);
        this.pageTurning(-1);
    }, this);
    //关闭排行榜
    this.buttonClose.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        how.SoundManager.playEffect("assets/button.mp3", false);
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            var openDataContext = Utils.callWX("getOpenDataContext");
            openDataContext.postMessage({
                id: 0,
                isDisplay: false
            });
        }
        Utils.removePanel(this);
    }, this);
    this.showRank();//显示排行榜
}
//商城面板创建完成
function onShopCreated() {
    Utils.hideBannerAd();
    this.spaceRect.height += Utils.getStatusBarHeight(this.stage);
    this.left = this.right = this.top = this.bottom = 0;
    this.page = 1;
    this.page_size = 10;
    this.sort_type = 0;
    this.opt_id = 0;
    this.keyword = "";
    this.searchButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        this.contentScroller.stopAnimation();
        this.contentScroller.viewport.scrollV = this.bannerGroup.height;
        this.onContentScroll();
        this.keyword = this.keywordInput.text;
        this.sort_type = 0;
        this.queryGoods(true, false);
        this.keywordInput.text = "";
    }, this);
    this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        this.contentScroller.stopAnimation();
        this.contentScroller.viewport.scrollV = this.bannerGroup.height;
        this.onContentScroll();
        this.queryGoods(false, false);
    }, this);
    this.preButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        this.contentScroller.stopAnimation();
        this.contentScroller.viewport.scrollV = this.bannerGroup.height;
        this.onContentScroll();
        this.page -= this.page_size * 2;
        this.page = this.page < 1 ? 1 : this.page;
        this.queryGoods(false, false);
    }, this);
    this.mainOpt.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        this.mainOpt.selected = true;
        this.optList.selectedIndex = -1;
        this.opt_id = 0;
        this.keyword = this.keywordInput.text = "";
        this.queryGoods(true, true);
    }, this);
    this.optList.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (event) {
        this.mainOpt.selected = false;
        this.opt_id = event.item.opt_id;
        this.keyword = this.keywordInput.text = "";
        this.queryGoods(true, true);
    }, this);
    this.onSort = function (event) {
        this.zonghe.getChildAt(0).textColor = 0x000000;
        this.zonghe.getChildAt(1).visible = false;
        this.xiaoliang.getChildAt(0).textColor = 0x000000;
        this.xiaoliang.getChildAt(1).visible = false;
        this.haoping.getChildAt(0).textColor = 0x000000;
        this.haoping.getChildAt(1).visible = false;
        event.currentTarget.getChildAt(0).textColor = 0xFED30C;
        event.currentTarget.getChildAt(1).visible = true;
        if (event.currentTarget == this.zonghe) {
            this.sort_type = 0;
        }
        else if (event.currentTarget == this.xiaoliang) {
            this.sort_type = 6;
        }
        else if (event.currentTarget == this.haoping) {
            this.sort_type = 28;
        }
        this.queryGoods(true, true);
    }
    this.zonghe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSort, this);
    this.xiaoliang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSort, this);
    this.haoping.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSort, this);
    this.shopList.itemRendererFunction = function (item) {//自定义项渲染器
        return function () {
            var itemRenderer = new eui.ItemRenderer();
            itemRenderer.onItemCreated = function () {
                this.buyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    openPDD(this.data.goods_id);
                }, this);
                this.touchGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    Utils.addPanel("GoodInfoSkin", onGoodInfoCreated, { goods_id: this.data.goods_id });
                }, this);
            }
            itemRenderer.addEventListener(eui.UIEvent.CREATION_COMPLETE, itemRenderer.onItemCreated, itemRenderer);
            itemRenderer.dataChanged = function () {//此方法对照MoreGameItem里面的方法
                this.image.source = this.data.goods_thumbnail_url;
                this.goodName.text = this.data.goods_name;
                this.juan.text = "劵￥" + (this.data.coupon_discount / 100).toFixed(0);
                this.juanhoujia.text = "￥" + (this.data.min_group_price / 100 - this.data.coupon_discount / 100).toFixed(2);
                this.pddjia.text = "拼多多价¥" + (this.data.min_group_price / 100).toFixed(2);
                this.xiaoliang.text = "已售" + this.data.sold_quantity + "单";
                this.buyButton.label = "领" + (this.data.coupon_discount / 100).toFixed(0) + "元劵购买";
            }.bind(itemRenderer);//bind的作用是把itemRenderer的dataChanged上下文转变成itemRenderer
            return itemRenderer;
        };
    }
    this.goods = new eui.ArrayCollection();
    this.shopList.dataProvider = this.goods;
    this.queryGoods = function (resetPage, resetScroll) {
        if (!this.isSend) {
            this.isSend = true;
            if (resetPage) {
                this.page = 1;
            }
            if (resetScroll) {
                this.menu.y = 0;
                this.menuGroup.addChild(this.menu);
                this.contentScroller.viewport.scrollV = 0;
            }
            Utils.callWX("showLoading", { title: "请求中", mask: true });
            Utils.send(host + "/pdd/getGoodsByPage",
                "sort_type=" + this.sort_type +
                "&page=" + this.page +
                "&page_size=" + this.page_size +
                "&opt_id=" + this.opt_id +
                "&keyword=" + this.keyword
                , function (goods) {
                    Utils.callWX("hideLoading");
                    this.isSend = false;
                    this.goods.source = goods;
                    this.goods.refresh();
                    this.page += goods.length;
                }, this);
        }
    }
    this.queryTheme = function () {
        Utils.send(host + "/pdd/getTheme", ""
            , function (themes) {
                for (var i = 0; i < themes.length; i++) {
                    var image = new eui.Image();
                    image.width = this.stage.stageWidth;
                    image.height = 300;
                    image.source = themes[i].image_url;
                    image.themeID = themes[i].id;
                    image.themeName = themes[i].name;
                    this.swiper.viewport.addChild(image);
                    image.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
                        Utils.addPanel("ShopGoodsSkin", onShopGoodsCreated, {
                            queryString: "theme_id=" + event.currentTarget.themeID,
                            path: "getGoodsByTheme",
                            title: event.currentTarget.themeName
                        });
                    }, this);
                }
                setSwiper.call(this.swiper, this.points);
                this.points.dataProvider = new eui.ArrayCollection(themes);
            }, this);
    }
    this.baoyou.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
        Utils.addPanel("ShopGoodsSkin", onShopGoodsCreated, { queryString: "channel_type=0", path: "getRecommend", title: "9.9包邮" });
    }, this);
    this.ppqc.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
        Utils.addPanel("ShopGoodsSkin", onShopGoodsCreated, { queryString: "channel_type=2", path: "getRecommend", title: "品牌清仓" });
    }, this);
    this.jrbk.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
        Utils.addPanel("ShopGoodsSkin", onShopGoodsCreated, { queryString: "channel_type=1", path: "getRecommend", title: "今日爆款" });
    }, this);
    this.onContentScroll = function () {
        if (this.contentScroller.viewport.scrollV >= this.bannerGroup.height) {
            this.menu.y = this.topGroup.height;
            this.addChild(this.menu);
        }
        else {
            this.menu.y = 0;
            this.menuGroup.addChild(this.menu);
        }
        // if (this.contentScroller.viewport.scrollV > (this.contentScroller.viewport.contentHeight - this.contentScroller.viewport.height) + 40) {
        //     this.queryGoods();
        // }
    }
    this.contentScroller.addEventListener(egret.Event.CHANGE, this.onContentScroll, this);
    this.queryGoods();
    this.queryTheme();
    this.root.x = this.stage.stageWidth;
    egret.Tween.get(this.root).to({ x: 0 }, 300).call(function () {
        Utils.currentScene.visible = false;
    }, this);
    this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        Utils.currentScene.visible = true;
        egret.Tween.get(this.root).to({ x: this.stage.stageWidth }, 300).call(function () {
            Utils.removePanel(this);
            Utils.unHideBannerAd();
        }, this);
    }, this);
}
function openPDD(goods_id, autoRemove) {
    Utils.callWX("showLoading", { title: "请求中", mask: true });
    Utils.send(host + "/pdd/getURL",
        "goods_id=" + goods_id + "&api=qy",
        function (data) {
            Utils.callWX("hideLoading");
            console.log("打开拼多多，app_id：" + data.app_id + "，page_path：" + data.page_path);
            Utils.openGame(data.app_id, data.page_path, function () {
                if (autoRemove) {
                    Utils.removePanel();
                }
            });
        }, this);
}
function onShopGoodsCreated() {
    this.spaceRect.height += Utils.getStatusBarHeight(this.stage);
    this.title.text = this.data.title;
    Utils.callWX("showLoading", { title: "请求中", mask: true });
    this.left = this.right = this.top = this.bottom = 0;
    this.page = 0;
    this.page_size = 6;
    this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        this.goodsScroller.viewport.scrollV = 0;
        this.queryGoods();
    }, this);
    this.preButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        this.goodsScroller.viewport.scrollV = 0;
        this.page -= this.page_size * 2;
        this.page = this.page < 0 ? 0 : this.page;
        this.queryGoods();
    }, this);
    this.goods = new eui.ArrayCollection();
    this.goodList.dataProvider = this.goods;
    this.queryGoods = function () {
        if (!this.isSend) {
            this.isSend = true;
            Utils.send(host + "/pdd/" + this.data.path,
                this.data.queryString + "&offset" + "=" + this.page + "&page_size=" + this.page_size,
                function (goods) {
                    this.isSend = false;
                    Utils.callWX("hideLoading");
                    this.goods.source = goods;
                    this.goods.refresh();
                    this.page += goods.length;
                }, this);
        }
    }
    this.root.x = this.stage.stageWidth;
    egret.Tween.get(this.root).to({ x: 0 }, 300);
    this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        egret.Tween.get(this.root).to({ x: this.stage.stageWidth }, 300).call(function () {
            Utils.removePanel(this);
        }, this);
    }, this);
    this.goodList.itemRendererFunction = function (item) {//自定义项渲染器
        return function () {
            var itemRenderer = new eui.ItemRenderer();
            itemRenderer.onItemCreated = function () {
                this.buyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    openPDD(this.data.goods_id);
                }, this);
                this.touchGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    Utils.addPanel("GoodInfoSkin", onGoodInfoCreated, this.data);
                }, this);
            }
            itemRenderer.addEventListener(eui.UIEvent.CREATION_COMPLETE, itemRenderer.onItemCreated, itemRenderer);
            itemRenderer.dataChanged = function () {//此方法对照MoreGameItem里面的方法
                this.image.source = this.data.goods_thumbnail_url;
                this.goodName.text = this.data.goods_name;
                this.juan.text = "劵￥" + (this.data.coupon_discount / 100).toFixed(0);
                this.juanhoujia.text = "￥" + (this.data.min_group_price / 100 - this.data.coupon_discount / 100).toFixed(2);
                this.xiaoliang.text = "已售" + this.data.sold_quantity + "单";
                this.buyButton.label = "领" + (this.data.coupon_discount / 100).toFixed(0) + "元劵购买";
            }.bind(itemRenderer);//bind的作用是把itemRenderer的dataChanged上下文转变成itemRenderer
            return itemRenderer;
        };
    }
    this.queryGoods();
}
function onGoodInfoCreated() {
    Utils.hideBannerAd();
    this.fromShare = this.data.fromShare;
    this.spaceRect.height += Utils.getStatusBarHeight(this.stage);
    this.left = this.right = this.top = this.bottom = 0;
    Utils.callWX("showLoading", { title: "请求中", mask: true });
    this.root.x = this.stage.stageWidth;
    egret.Tween.get(this.root).to({ x: 0 }, 300);
    this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        egret.Tween.get(this.root).to({ x: this.stage.stageWidth }, 300).call(function () {
            Utils.removePanel(this);
            if (this.fromShare) {
                Utils.unHideBannerAd();
            }
        }, this);
    }, this);
    this.swiper.height = this.stage.stageWidth;
    this.setUI = function () {
        this.juan.text = "劵￥" + (this.data.coupon_discount / 100).toFixed(0);
        this.juanhoujia.text = "￥" + (this.data.min_group_price / 100 - this.data.coupon_discount / 100).toFixed(2);
        this.pddjia.text = "拼多多价¥" + (this.data.min_group_price / 100).toFixed(2);
        this.goodName.text = this.data.goods_name;
        this.xiaoliang.text = "已售" + this.data.sold_quantity + "单";
        this.youhui.text = (this.data.coupon_discount / 100).toFixed(0);
        this.shuliang.text = "总" + this.data.coupon_total_quantity + "张 剩余" + this.data.coupon_remain_quantity + "张";
        this.fen.text = this.data.goods_eval_score == null ? "暂无" : this.data.goods_eval_score;
        this.fuwuFen.text = (this.data.avg_serv / 100).toFixed(2);
        this.miaoshuFen.text = (this.data.avg_desc / 100).toFixed(2);
        this.wuliuFen.text = (this.data.avg_lgst / 100).toFixed(2);
        this.fuwuBi.percentWidth = (this.data.serv_pct * 100).toFixed(2);
        this.miaoshuBi.percentWidth = (this.data.desc_pct * 100).toFixed(2);
        this.wuliuBi.percentWidth = (this.data.lgst_pct * 100).toFixed(2);
        this.fuwuBai.text = (this.data.serv_pct * 100).toFixed(2) + "%";
        this.miaoshuBai.text = (this.data.desc_pct * 100).toFixed(2) + "%";
        this.wuliuBai.text = (this.data.lgst_pct * 100).toFixed(2) + "%";
        this.desc.text = this.data.goods_desc;
    }
    this.queryGoods = function () {
        Utils.callWX("showLoading", { title: "请求中", mask: true });
        Utils.send(host + "/pdd/getGoodsInfo",
            "goods_id=" + this.data.goods_id
            , function (goods) {
                Utils.callWX("hideLoading");
                if (goods.length) {
                    this.data = goods[0];
                    this.goods_thumbnail_url = this.data.goods_thumbnail_url;
                    this.setUI();
                }
                this.setSwiper();
            }, this);
    }
    this.setSwiper = function () {
        this.data.goods_gallery_urls = this.data.goods_gallery_urls || [this.data.goods_thumbnail_url];
        for (var i = 0; i < this.data.goods_gallery_urls.length; i++) {
            var image1 = new eui.Image();
            image1.source = this.data.goods_gallery_urls[i];
            image1.height = image1.width = this.stage.stageWidth;
            this.swiper.viewport.addChild(image1);
            var image2 = new eui.Image();
            image2.source = this.data.goods_gallery_urls[i];
            image2.height = image2.width = this.stage.stageWidth;
            this.imagesGroup.addChild(image2);

        }
        this.points.dataProvider = new eui.ArrayCollection(this.data.goods_gallery_urls);
        setSwiper.call(this.swiper, this.points);
    }
    this.buyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        openPDD(this.data.goods_id);
    }, this);
    this.buyButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        openPDD(this.data.goods_id);
    }, this);
    this.shareButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        var shareData = {
            id: 99,
            title: "送你一张【拼多多】优惠券" + (this.data.coupon_discount / 100).toFixed(0) + "元",
            imageUrl: this.data.goods_thumbnail_url
        };
        Utils.callWX("aldShareAppMessage", {
            title: shareData.title, query: "shareID=" + shareData.id + "&goods_id=" + this.data.goods_id, imageUrl: shareData.imageUrl,
        });
        Utils.callWX("aldSendEvent", shareData.title, { "shareID": shareData.id });
        console.log("分享数据，title：" + shareData.title + "，imageUrl：" + shareData.imageUrl);
    }, this);
    this.queryGoods();
}
function setSwiper(points) {
    this.curItemCount = 0;//当前滚动到第几项  0表示第1项
    this.delayScroll = 250;//滚动时间
    //设置尺寸
    this.width = this.stage.stageWidth;
    for (var i = 0; i < this.viewport.numChildren; i++) {
        this.viewport.getChildAt(i).width = this.stage.stageWidth;
    }
    //立即验证，获取width、height
    this.validateNow();
    //判断是垂直还是水平滚动
    var widthDist = this.viewport.contentWidth - this.viewport.width;
    if (widthDist > 0) {
        this.isHScroller = true;
        this.itemSize = this.viewport.width;
        this.itemNum = this.viewport.contentWidth / this.viewport.width;
    }
    else {
        this.isHScroller = false;
        this.itemSize = this.viewport.height;
        this.itemNum = this.viewport.contentHeight / this.viewport.height;
    }
    //滚动容器设置
    this.throwSpeed = 0;
    this.bounces = true;
    this.onChangeStartHandler = function () {
        if (this.isHScroller) {
            this.touchStartPos = this.viewport.scrollH;
        }
        else {
            this.touchStartPos = this.viewport.scrollV;
        }
    }
    this.onChangeEndHandler = function () {
        if (this.touchStartPos == -1) { //防点击触发changeend
            return;
        }
        var dict;
        if (this.isHScroller) {
            dict = this.viewport.scrollH - this.touchStartPos;
        }
        else {
            dict = this.viewport.scrollV - this.touchStartPos;
        }
        if (dict > 0) {
            this.scrollToNext();
        }
        else if (dict < 0) {
            this.scrollToLast();
        }
        this.touchStartPos = -1;
    }
    this.scrollToNext = function () {
        if (this.bScrolling) {
            return;
        }
        var item = this.curItemCount;
        if (item < this.itemNum - 1) {
            item++;
        }
        this.scrollToItem(item);
    }
    this.scrollToLast = function () {
        if (this.bScrolling) {
            return;
        }
        var item = this.curItemCount;
        if (item > 0) {
            item--;
        }
        this.scrollToItem(item);
    }
    this.scrollToItem = function (item) {
        if (this.bScrolling) {
            return;
        }
        if (item >= 0 && item < this.itemNum) {
            this.bScrolling = true;
            this.disableTouch();
            this.curItemCount = item;
            egret.Tween.removeTweens(this.viewport);
            if (this.isHScroller) {
                egret.Tween.get(this.viewport).to({ scrollH: item * this.itemSize, ease: egret.Ease.quadOut }, this.delayScroll);
            } else {
                egret.Tween.get(this.viewport).to({ scrollV: item * this.itemSize, ease: egret.Ease.quadOut }, this.delayScroll);
            }
            egret.Tween.get(this.viewport).wait(this.delayScroll).call(function () {
                this.bScrolling = false;
                this.enableTouch();
                this.dispatchEventWith("EVENT_SCROLL_COMPLETE", false, this.curItemCount);
                points.selectedIndex = this.curItemCount;
            }, this);
        }
    }
    this.enableTouch = function () {
        this.touchEnabled = true;
        this.touchChildren = true;
    }
    this.disableTouch = function () {
        this.touchChildren = false;
        this.touchEnabled = false;
    }
    this.addEventListener(eui.UIEvent.CHANGE_START, this.onChangeStartHandler, this);
    this.addEventListener(eui.UIEvent.CHANGE_END, this.onChangeEndHandler, this);
    points.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (event) {
        this.scrollToItem(event.itemIndex);
    }, this);
}
//试玩面板创建完成
function onMoreGameCreated() {
    this.horizontalCenter = this.verticalCenter = 0;
    playTitleTween(this);
    this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { Utils.removePanel(this) }, this);
    var newGameList = gameList.concat();
    newGameList.sort(function (a, b) {
        var date = new Date();
        var key = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
        var gameRedBag = Data.data.gameRedBag;
        if (gameRedBag[key] && !!gameRedBag[key][a.appId]) {
            return 1;
        }
        else if (gameRedBag[key] && !!gameRedBag[key][b.appId]) {
            return -1;
        }
    });
    this.gameList.dataProvider = new eui.ArrayCollection(newGameList);
    this.gameList.itemRendererFunction = function (item) {//自定义项渲染器
        return function () {
            var itemRenderer = new eui.ItemRenderer();
            itemRenderer.onItemCreated = function () {
                this.playGameButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    how.SoundManager.playEffect("assets/button.mp3");
                    Utils.openGame(this.data.appId, this.data.gameUrl,
                        function (success) {//参数为是否成功
                            if (success) {
                                var date = new Date();
                                var key = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
                                var gameRedBag = Data.data.gameRedBag;
                                gameRedBag[key] = gameRedBag[key] || {};
                                if (gameRedBag[key][this.data.appId] == undefined) {//如果没试玩过
                                    gameRedBag[key][this.data.appId] = false;
                                    Data.saveData();
                                    Utils.removePanel();
                                    Utils.addPanel("RedBagSkin", onRedBagCreated, { appId: this.data.appId });
                                }
                            }
                            else {
                                Utils.callWX("showToast", { title: '请完成体验游戏', icon: 'none' });
                            }
                        }.bind(this));//打开游戏
                }, this);
                this.redImage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    how.SoundManager.playEffect("assets/button.mp3");
                    Utils.removePanel();
                    Utils.addPanel("RedBagSkin", onRedBagCreated, { appId: this.data.appId });
                }, this);
            }
            itemRenderer.addEventListener(eui.UIEvent.CREATION_COMPLETE, itemRenderer.onItemCreated, itemRenderer);
            itemRenderer.playTween = function () {
                egret.Tween.removeTweens(this.redImage);
                egret.Tween.get(this.redImage).
                    to({ rotation: 10 }, 100).to({ rotation: -10 }, 100).
                    to({ rotation: 8 }, 100).to({ rotation: -8 }, 100).
                    to({ rotation: 0 }, 100).wait(1500).call(this.playTween, this);
            };
            itemRenderer.dataChanged = function () {//此方法对照MoreGameItem里面的方法
                var date = new Date();
                var key = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
                var gameRedBag = Data.data.gameRedBag;
                this.redImage.visible = gameRedBag[key] &&
                    gameRedBag[key][this.data.appId] != undefined &&
                    !gameRedBag[key][this.data.appId] &&
                    !!moneyConfig[Data.data.currentMoneyIndex];//如果有可以领的红包并且红包没有领取过并且红包没有溢出
                this.hadGet.visible = this.playGameButton0.visible = gameRedBag[key] && !!gameRedBag[key][this.data.appId];//如果已经试玩过
                if (this.redImage.visible) {
                    this.playTween();
                }
                if (!gameRedBag[key] || gameRedBag[key][this.data.appId] == undefined) {//如果没有试玩过
                    if (!this.redImage.visible) {
                        this.redImage.touchEnabled = false;
                    }
                    this.redImage.visible = true;
                }
            }.bind(itemRenderer);//bind的作用是把itemRenderer的dataChanged上下文转变成itemRenderer
            return itemRenderer;
        };
    }
    this.gameList.dataProvider = this.gameList.dataProvider;
}
//科普面板创建完成
function onKepuCreated() {
    this.horizontalCenter = this.verticalCenter = 0;
    this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { Utils.removePanel(this) }, this);
    playTitleTween(this);
}
//关卡面板创建完成
function onLevelCreated() {
    this.horizontalCenter = this.verticalCenter = 0;
    this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { Utils.removePanel(this) }, this);
    this.closeButton.visible = !this.data.isUp;
    playTitleTween(this);
    this.setLevelList = function (page) {//设置列表数据
        var bigLevel = Data.data.level % 10 == 0 && Data.data.level != 0 ?
            Math.floor(Data.data.level / 10) - 1 :
            Math.floor(Data.data.level / 10);//当前所在大关卡
        var pageIndex = page == -1 ? Math.floor(bigLevel / 9) : page;//大关卡所在页数
        this.page = pageIndex;//保存当前页面
        var ac = new eui.ArrayCollection();
        for (var i = pageIndex * 9; i < pageIndex * 9 + 9; i++) {
            var data = {
                lock: i <= bigLevel,
                isUp: this.data.isUp && i == bigLevel,
                level: i
            };
            ac.addItem(data);
        }
        this.levelList.dataProvider = ac;
        for (var i = 1; i < 6; i++) {//设置星级
            this["star_" + i].visible = i <= this.page % 5 + 1;
        }
    }
    this.setLevelList(-1);
    this.levelList.itemRendererFunction = function (item) {//自定义项渲染器
        return function () {
            var itemRenderer = new eui.ItemRenderer();
            itemRenderer.dataChanged = function () {//此方法对照MoreGameItem里面的方法
                this.labelChoose.text = this.data.level + 1;
                if (this.data.isUp) {
                    how.SoundManager.playEffect("assets/unlock.mp3");
                    egret.Tween.get(this.chooseLock).to({ x: this.chooseLock.x - 2 }, 160).to({ x: this.chooseLock.x + 2 }, 160)
                        .to({ x: this.chooseLock.x - 2 }, 150).to({ x: this.chooseLock.x + 2 }, 150)
                        .to({ x: this.chooseLock.x - 2 }, 130).to({ x: this.chooseLock.x + 2 }, 130)
                        .to({ x: this.chooseLock.x - 1 }, 120).to({ x: this.chooseLock.x + 1 }, 120)
                        .to({ x: this.chooseLock.x - 1 }, 100).to({ x: this.chooseLock.x }, 100)
                        .call(function () {
                            this.chooseLock.visible = false;
                        }, this).wait(1000).call(function () {
                            Utils.removePanel();
                            if (!useSafe) {
                                Utils.addPanel("UnlockSkin", onUnlockCreated, { level: this.data.level });//解锁特效播放完成显示解锁界面
                            }
                        }, this);
                }
                else {
                    this.chooseLock.visible = !this.data.lock;
                }
            }.bind(itemRenderer);//bind的作用是把itemRenderer的dataChanged上下文转变成itemRenderer
            return itemRenderer;
        };
    }
    if (!this.data.isUp) {
        this.levelList.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (event) {
            Utils.removePanel(this);
            Utils.currentScene.updateLevel(event.item.level * 10);
        }, this);
    }
    this.buttonLeft.visible = !this.data.isUp;
    this.buttonLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        how.SoundManager.playEffect("assets/button.mp3");
        if (this.page > 0) {
            this.setLevelList(this.page - 1);
        }
    }, this);
    this.buttonRight.visible = !this.data.isUp;
    this.buttonRight.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        how.SoundManager.playEffect("assets/button.mp3");
        this.setLevelList(this.page + 1);
    }, this);
}
//解锁面板创建完成
function onUnlockCreated() {
    this.horizontalCenter = this.verticalCenter = 0;
    this.closeButton.visible = unlockCloseShow || useSafe;
    this.label_roundNumber.text = "第" + this.data.level + 1 + "关";
    this.button_share.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        Utils.share(function () {
            Utils.removePanel();
        })
    }, this);
    this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { Utils.removePanel(this) }, this);
}
//显示答案面板创建完成
function onAnswerCreated() {
    this.horizontalCenter = this.verticalCenter = 0;
    var idiomData = Data.getConfig();
    var word0 = idiomData.word[0];
    var word1 = idiomData.word[1];
    var answer = idiomData.answer;
    for (var i = 0; i < 4; i++) {
        this["idiom_0" + i].text = word0[i];
        this["idiom_1" + i].text = word1[i];
        if (word0[i] == answer) {
            this["idiom_0" + i].textColor = 0xed453b;
        }
        if (word1[i] == answer) {
            this["idiom_1" + i].textColor = 0xed453b;
        }
    }
    this.button_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        how.SoundManager.playEffect("assets/button.mp3");
        Utils.removePanel(this);
    }, this);
}
//播放标题缓动特效
function playTitleTween(panel) {
    panel.title_0.scaleX = panel.title_0.scaleY =
        panel.title_1.scaleX = panel.title_1.scaleY =
        panel.title_2.scaleX = panel.title_2.scaleY =
        panel.title_3.scaleX = panel.title_3.scaleY =
        0;
    egret.Tween.get(panel.title_0).to({ scaleX: 1, scaleY: 1 }, 200);
    egret.Tween.get(panel.title_1).wait(100).to({ scaleX: 1, scaleY: 1 }, 200);
    egret.Tween.get(panel.title_2).wait(200).to({ scaleX: 1, scaleY: 1 }, 200);
    egret.Tween.get(panel.title_3).wait(300).to({ scaleX: 1, scaleY: 1 }, 200);
}
/****************以下为第一次初始化逻辑****************/
var main = function () {//main函数-方法自执行
    this.start = function () {//启动方法
        app.removeChildren();
        Config.idiomConfig = RES.getRes("idiom_json");//初始化词库配置
        Config.textConfig = RES.getRes("text_json");//初始化随机字配置
        Data.loadData();//加载本地数据
        Utils.addScene("MainSkin", onMainSceneCreated);//添加主场景
        Utils.callWX("onShow", function (res) {
            Utils.onShow(res);
            if (res.query.goods_id && !useSafe && useShop) {
                Utils.addPanel("GoodInfoSkin", onGoodInfoCreated, { goods_id: res.query.goods_id, fromShare: true });
            }
            if (Utils.onOpenGameResult) {
                var onOpenGameResult = Utils.onOpenGameResult;
                Utils.onOpenGameResult = null;
                if (Date.now() - Utils.lastOpenGameTime >= openGameCD * 1000) {
                    onOpenGameResult(true);
                }
                else {
                    onOpenGameResult(false);
                }
            }
        });
        var systemInfo = Utils.callWX("getLaunchOptionsSync");
        if (systemInfo && systemInfo.query.goods_id && !useSafe && useShop) {
            Utils.addPanel("GoodInfoSkin", onGoodInfoCreated, { goods_id: systemInfo.query.goods_id, fromShare: true });
        }
    }
    this.loadZIP = function () {
        var self = this;
        self.showLoading();
        var root = window.wx.env.USER_DATA_PATH + "/resource/";
        var fileManager = Utils.callWX("getFileSystemManager");
        try {
            var oldZipVersion = egret.localStorage.getItem("zipVersion")
            if (oldZipVersion == zipVersion) {
                fileManager.accessSync(window.wx.env.USER_DATA_PATH + "/resource/");//判断文件是否存在
                self.loadRES(root, self.start);//启动主函数
            }
            else {
                throw ("");
            }
        } catch (error) {
            try {
                fileManager.rmdirSync(window.wx.env.USER_DATA_PATH + "/resource/");//删除老的
            } catch (error) { }
            finally {
                var task = Utils.callWX("downloadFile", {
                    url: zipPath,
                    success: function (res) {
                        if (res.statusCode == 200) {
                            var filePath = res.tempFilePath; // 下载路径
                            fileManager.unzip({//解压缩zip文件
                                zipFilePath: filePath,
                                targetPath: root,
                                success: function () {
                                    self.setLoadMessage("正在解压缩资源");
                                    egret.localStorage.setItem("zipVersion", zipVersion);//更新资源版本
                                    self.loadRES(root, self.start);//启动主函数
                                },
                                fail: function (res) {
                                    self.onLoadError("解压缩失败");
                                }
                            });
                        }
                        else {
                            self.onLoadError("资源下载失败，请检测网络后重试");
                        }
                    },
                    fail: function () {
                        self.onLoadError("资源下载失败，请检测网络后重试");
                    }
                });
                task.onProgressUpdate(function (res) {
                    self.setLoadMessage(res.progress + "%");
                });
            }
        }
    }
    this.showLoading = function () {//显示加载界面
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff, 1);
        bg.graphics.drawRect(0, 0, app.stage.stageWidth, app.stage.stageHeight);
        bg.graphics.endFill();
        app.addChild(bg);
        var group = new egret.DisplayObjectContainer();
        app.addChild(group);
        var icon = new egret.Bitmap();
        group.addChild(icon);
        app.icon = icon;
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function () {
            var texture = new egret.Texture();
            texture._setBitmapData(imageLoader.data);
            icon.texture = texture;
            icon.width = icon.height = 100;
            this.layoutLoad();
        }, this);
        imageLoader.load(assetsServer + "icon.png");
        var nameText = new egret.TextField();
        nameText.textColor = 0x000000;
        nameText.text = gameName;
        nameText.width = app.stage.stageWidth;
        nameText.height = nameText.size = 28;
        nameText.textAlign = egret.HorizontalAlign.CENTER;
        group.addChild(nameText);
        app.nameText = nameText;
        var progress = new egret.TextField();
        progress.textColor = 0x666666;
        progress.text = "请求资源中...";
        progress.width = app.stage.stageWidth;
        progress.height = progress.size = 24;
        progress.textAlign = egret.HorizontalAlign.CENTER;
        app.progress = progress;
        group.addChild(progress);
        app.group = group;
        this.layoutLoad();
    }
    this.layoutLoad = function () {
        var group = app.group;
        var icon = app.icon;
        var nameText = app.nameText;
        var progress = app.progress;
        icon.x = group.width / 2 - icon.width / 2;
        nameText.x = group.width / 2 - nameText.width / 2;
        progress.x = group.width / 2 - progress.width / 2;
        nameText.y = icon.height + 20;
        progress.y = nameText.y + nameText.height + 40;
        group.x = app.stage.stageWidth / 2 - group.width / 2;
        group.y = app.stage.stageHeight / 2 - group.height - 2;
    }
    this.setLoadMessage = function (msg) {
        app.progress.text = msg;
    }
    this.onLoadError = function (msg) {
        Utils.callWX("showModal", {
            title: "提示", content: msg, showCancel: false, success: function () {
                Utils.callWX("exitMiniProgram");
            }
        });
    }
    this.loadRES = function (root, cb) {
        //初始化声音系统
        how.SoundManager.init(app.stage, root);
        //初始化主题
        egret.registerImplementation("eui.IAssetAdapter", new qy.AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new qy.ThemeAdapter(root));
        RES.loadConfig("default.res.json", root).then(function () {
            RES.loadGroup("preload").then(function () {
                var theme = new eui.Theme(root + "default.thm.json");
                theme.addEventListener(egret.Event.COMPLETE, function () {
                    if (!theme.isComplete) {
                        cb();
                    }
                    theme.isComplete = true;
                }, this);
            });
        });
    }
    if (egret.isQYScriptRun) {
        return;
    }
    egret.isQYScriptRun = true;
    if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
        this.loadRES("resource/", this.start);//非微信平台直接加载资源
    }
    else {
        this.loadZIP();
    }
}();