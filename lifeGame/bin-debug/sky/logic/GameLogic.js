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
    GameLogic.prototype.init = function () {
        this.initData();
        this.showShareMenu();
        this.openStart();
        this.checkShareInfo();
    };
    GameLogic.prototype.openStart = function () {
        this.main.removeChildren();
        this.main.addChild(new StartUI());
    };
    GameLogic.prototype.initData = function () {
        if (this.data == null) {
            this.data = RES.getRes("config_json");
        }
        if (this.strings == null) {
            this.strings = RES.getRes("strings_json");
        }
        if (this.goods == null) {
            this.goods = RES.getRes("goods_json");
        }
    };
    GameLogic.prototype.startGame = function () {
        this.main.removeChildren();
        this.main.addChild(new GameUI());
    };
    /** 登录授权*/
    GameLogic.prototype.login = function () {
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        wx.login({
            success: function () {
                wx.getUserInfo({
                    fail: function (res) {
                        // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                        if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
                            // 处理用户拒绝授权的情况
                        }
                    }
                });
            }
        });
    };
    /**右上角转发 */
    GameLogic.prototype.showShareMenu = function () {
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        wx.showShareMenu();
        this.onShare("rightup=1");
    };
    /**主动转发
     * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
    */
    GameLogic.prototype.share = function (query) {
        if (query === void 0) { query = null; }
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        this.updateShareMenu(true);
        wx.shareAppMessage({
            title: '来苏州一起浮生吧啊啊啊啊啊啊啊啊啊啊啊啊',
            imageUrl: "resource/assets/img/qua_1.png",
            query: query
        });
    };
    /**监听用户点击右上角菜单的“转发”按钮时触发的事件
     * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
     */
    GameLogic.prototype.onShare = function (query) {
        if (query === void 0) { query = "rightup=1"; }
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        this.updateShareMenu(true);
        console.log("onShare:query:", query);
        wx.onShareAppMessage(function () {
            return {
                title: '右上角转发一起来苏州浮生吧',
                imageUrl: "resource/assets/img/qua_4.png",
                query: query
            };
        });
    };
    /**转发参数 */
    GameLogic.prototype.updateShareMenu = function (withShareTicket) {
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        console.log("updateShareMenu:", withShareTicket);
        wx.updateShareMenu({
            withShareTicket: withShareTicket,
            success: function (res) {
                console.log("updateShareMenu:success:", res);
            },
            fail: function (res) {
                console.log("updateShareMenu:fail:", res);
            },
            complete: function () {
                console.log("updateShareMenu:complete:");
            }
        });
    };
    /**点击别人转发进来的 ，获取shareTicket*/
    GameLogic.prototype.checkShareInfo = function () {
        var _this = this;
        console.log("checkShareInfo");
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        var info = wx.getLaunchOptionsSync();
        console.log("info:", info);
        //如果是从群里点开的
        if (info != null && info.shareTicket != null && info.shareTicket != "") {
            //查看群排行
            if (info.query != null && info.query.grouprank == "1") {
                wx.getShareInfo({
                    shareTicket: info.shareTicket,
                    success: function (res) {
                        console.log("getShareInfo:success:", res);
                        _this.openFriendRank(false, info.shareTicket);
                    },
                    fail: function (res) {
                        console.log("getShareInfo:fail:", res);
                    },
                    complete: function () {
                        console.log("getShareInfo:complete:");
                    }
                });
            }
        }
    };
    GameLogic.prototype.openRank = function () {
    };
    /**获取好友排行榜数据 */
    GameLogic.prototype.openFriendRank = function (friend, shareTicket) {
        if (shareTicket === void 0) { shareTicket = ""; }
        this.isFriend = friend;
        //处理遮罩，避免开放数据域事件影响主域。
        if (this.rankingListMask == null) {
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.GameStage.width, this.GameStage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.8;
            this.rankingListMask.touchEnabled = true;
        }
        this.main.addChild(this.rankingListMask);
        //开放域主体
        var bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
        bitmapdata.$deleteSource = false;
        var texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        this.bitmap = new egret.Bitmap(texture);
        this.bitmap.width = this.GameStage.stageWidth;
        this.bitmap.height = this.GameStage.stageHeight;
        this.main.addChild(this.bitmap);
        //关闭按钮
        if (this.btn_rankclose == null) {
            this.btn_rankclose = new eui.Image();
            this.btn_rankclose.source = RES.getRes("qua_0_png");
            this.btn_rankclose.left = 20;
            this.btn_rankclose.bottom = 40;
            this.btn_rankclose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFriendRank, this);
        }
        this.main.addChild(this.btn_rankclose);
        //查看群排行
        if (this.btn_grouprank == null) {
            this.btn_grouprank = new eui.Image();
            this.btn_grouprank.source = RES.getRes(friend ? "qua_0_png" : "qua_1_png");
            this.btn_grouprank.right = 20;
            this.btn_grouprank.bottom = 40;
            this.btn_grouprank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGroupRank, this);
        }
        this.main.addChild(this.btn_grouprank);
        //
        egret.startTick(function (timeStarmp) {
            egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
            bitmapdata.webGLTexture = null;
            return false;
        }, this);
        console.log("postMessage:", this.userInfo);
        // //发送消息
        wx.getOpenDataContext().postMessage({
            head: friend ? "friend" : "group",
            userinfo: this.userInfo,
            shareTicket: shareTicket,
            open: true
        });
    };
    GameLogic.prototype.closeFriendRank = function () {
        this.bitmap && this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
        this.btn_rankclose && this.btn_rankclose.parent && this.btn_rankclose.parent.removeChild(this.btn_rankclose);
        this.btn_grouprank && this.btn_grouprank.parent && this.btn_grouprank.parent.removeChild(this.btn_grouprank);
        this.rankingListMask && this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
        //发送消息
        wx.getOpenDataContext().postMessage({
            head: "friend",
            open: false
        });
    };
    /**获取群内数据,实际上只是一个转发 */
    GameLogic.prototype.openGroupRank = function () {
        if (this.isFriend) {
            this.share("grouprank=1");
        }
        else {
            this.closeGroupRank();
        }
    };
    GameLogic.prototype.closeGroupRank = function () {
        this.closeFriendRank();
    };
    /** 对用户托管数据进行写数据操作，允许同时写多组 KV 数据
     * @param	KVDataList	要修改的 KV 数据列表
    */
    GameLogic.prototype.setUserCloudStorage = function () {
        var KVDataList = [];
        var str = "";
        for (var i = 0; i < DataBase.achives.length; i++) {
            str += DataBase.achives[i];
            if (i < DataBase.achives.length) {
                str += ",";
            }
        }
        wx.setUserCloudStorage({
            KVDataList: [
                { key: "money", value: DataBase.money + "" },
                { key: "fame", value: DataBase.fame + "" },
                { key: "achives", value: str }
            ],
            success: function (res) {
                console.log("setUserCloudStorage:res:", res);
            },
            fail: function (err) {
                console.log("setUserCloudStorage:error:", err);
            },
            complete: function () {
                console.log("setUserCloudStorage:complete:");
            }
        });
    };
    /**删除游戏托管数据
     * @param keyList 要删除掉 key 列表
     */
    GameLogic.prototype.removeUserCloudStorage = function (keyList) {
        wx.removeUserCloudStorage()({
            keyList: keyList,
            success: function (res) {
                console.log("removeUserCloudStorage:res:", res);
            },
            fail: function (err) {
                console.log("removeUserCloudStorage:error:", err);
            },
            complete: function () {
                console.log("removeUserCloudStorage:complete:");
            }
        });
    };
    /**上报用户数据后台接口。小游戏可以通过本接口上报key-value数据到用户的CloudStorage。
     * @param	access_token	接口调用凭证
     * @param	openid	用户唯一标识符
     * @param	appid	小程序 appId
     * @param	signature	用户登录态签名，签名算法请参考用户登录态签名算法
     * @param	sig_method	用户登录态签名的哈希方法，如hmac_sha256等，请参考用户登录态签名算法
     * @param	kv_list	要上报的数据
    */
    GameLogic.prototype.setUserStorage = function (kv_list) {
        var access_token = "";
        var openid = "";
        var appid = "";
        var signature = "";
        var sig_method = "";
        //POST https://api.weixin.qq.com/wxa/set_user_storage?access_token=ACCESS_TOKEN&signature=SIGNATURE&openid=OPENID&sig_method=SIG_METHOD
    };
    return GameLogic;
}(egret.EventDispatcher));
__reflect(GameLogic.prototype, "GameLogic");
//# sourceMappingURL=GameLogic.js.map