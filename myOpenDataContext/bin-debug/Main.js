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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.scrollView = new egret.ScrollView();
        _this.bgcolor = 0xB7ACAC;
        _this.rankcolors = [0xED1515, 0x259e32, 0xbbeffc, 0xffffff];
        wx.onMessage(function (data) {
            console.log("data:", data);
            var head = data['head'];
            var open = data['open'];
            var userinfo = data['userinfo'];
            switch (head) {
                case "friend":
                    open ? _this.openFriendCloud(userinfo) : _this.closeFriendCloud();
                    break;
                case "group":
                    open ? _this.openGroupCloud(userinfo, data['shareTicket']) : _this.closeGroupCloud();
                    break;
            }
        });
        return _this;
    }
    /**好友排行榜 */
    Main.prototype.openFriendCloud = function (userinfo) {
        var _this = this;
        console.log("openFriendCloud");
        wx.getFriendCloudStorage({
            //keylist 需要获取排行榜中的数据的key
            keyList: ["money", "fame", "achives"],
            success: function (res) {
                _this.initItems(userinfo, res.data, true);
            },
            fail: function (err) {
                console.log("getFriendCloudStorage:error:", err);
            },
            complete: function () {
                console.log("getFriendCloudStorage:complete:");
            }
        });
    };
    Main.prototype.closeFriendCloud = function () {
        console.log("closeFriendCloud", this.numChildren);
        for (var i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
    };
    /**群排行榜 */
    Main.prototype.openGroupCloud = function (userinfo, shareTicket) {
        var _this = this;
        console.log("openGroupCloud");
        wx.getGroupCloudStorage({
            shareTicket: shareTicket,
            //keylist 需要获取排行榜中的数据的key
            keyList: ["money", "fame", "achives"],
            success: function (res) {
                _this.initItems(userinfo, res.data, true);
            },
            fail: function (err) {
                console.log("getFriendCloudStorage:error:", err);
            },
            complete: function () {
                console.log("getFriendCloudStorage:complete:");
            }
        });
    };
    Main.prototype.closeGroupCloud = function () {
    };
    Main.prototype.initBg = function (friend) {
        console.log("initBg");
        var trr = new egret.TextField();
        trr.textAlign = "center";
        trr.text = friend ? "好友排行" : "群排行";
        trr.x = (640 - trr.width) / 2;
        trr.y = 100;
        trr.textColor = 0xffff00;
        this.addChild(trr);
        this.bgbmp = new egret.Shape();
        this.bgbmp.graphics.beginFill(this.bgcolor, 1);
        this.bgbmp.graphics.drawRect(0, 0, 600, 660);
        this.bgbmp.graphics.endFill();
        this.bgbmp.touchEnabled = false;
        this.bgbmp.x = (640 - this.bgbmp.width) >> 1;
        this.bgbmp.y = 160;
        this.addChild(this.bgbmp);
        var tr = new egret.TextField();
        tr.textAlign = "left";
        tr.x = this.bgbmp.x + 20;
        tr.y = this.bgbmp.y + 10;
        tr.text = "每周一凌晨刷新";
        tr.size = 16;
        tr.textColor = 0xff0000;
        this.addChild(tr);
        this.mybmp = new egret.Shape();
        this.mybmp.graphics.beginFill(this.bgcolor, 1);
        this.mybmp.graphics.drawRect(0, 0, 600, 140);
        this.mybmp.graphics.endFill();
        this.mybmp.touchEnabled = false;
        this.mybmp.x = (640 - this.mybmp.width) >> 1;
        this.mybmp.y = this.bgbmp.y + this.bgbmp.height + 30;
        this.addChild(this.mybmp);
    };
    Main.prototype.getUserInfo = function (i, userinfo) {
        var _this = this;
        wx.getUserCloudStorage({
            //keylist 需要获取排行榜中的数据的key
            keyList: ["money", "fame", "achives"],
            success: function (res) {
                _this.initMyItem(i, userinfo, res);
            },
            fail: function (err) {
                console.log("getUserCloudStorage:error:", err);
            },
            complete: function () {
                console.log("getUserCloudStorage:complete:");
            }
        });
    };
    Main.prototype.initItems = function (userinfo, datarray, friend) {
        this.initBg(friend);
        var listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = this.bgbmp.x;
        this.scrollView.y = this.bgbmp.y + 40;
        this.scrollView.width = this.bgbmp.width;
        this.scrollView.height = this.bgbmp.height;
        this.addChild(this.scrollView);
        var url = userinfo != null ? userinfo.avatarUrl : "-1";
        var myrank = -1;
        for (var i = 0; i < datarray.length; i++) {
            var data = datarray[i];
            if (url == data.avatarUrl) {
                myrank = i;
            }
            var item = this.addItem(i, data);
            item.y = i * 54;
            listContainer.addChild(item);
        }
        this.getUserInfo(myrank, userinfo);
    };
    Main.prototype.initMyItem = function (i, userinfo, datarray) {
        var data = {};
        data['avatarUrl'] = userinfo.avatarUrl;
        data['nickname'] = userinfo.nickName;
        data['KVDataList'] = datarray.KVDataList;
        var item = this.addItem(i, data);
        item.x = this.mybmp.x;
        item.y = this.mybmp.y + (this.mybmp.height - item.height) / 2;
        this.addChild(item);
    };
    Main.prototype.addItem = function (i, data) {
        var kvs = data.KVDataList;
        var kvo = {};
        if (kvs == null || kvs.length == 0) {
            kvo = { money: "未上榜" };
        }
        else {
            for (var j = 0; j < kvs.length; j++) {
                var o = kvs[j];
                kvo[o.key] = o.value;
            }
        }
        var item = new egret.DisplayObjectContainer();
        item.width = this.bgbmp.width;
        item.height = 54;
        //底
        var bg = new egret.Shape();
        bg.graphics.beginFill((i == -1 || i % 2 == 0) ? this.bgcolor : 0x878080, 1);
        bg.graphics.drawRect(0, 0, item.width, item.height);
        bg.graphics.endFill();
        bg.touchEnabled = false;
        item.addChild(bg);
        //排名
        var tf_rank = new egret.TextField();
        tf_rank.textAlign = "left";
        tf_rank.width = 40;
        tf_rank.height = 30;
        tf_rank.x = 30;
        tf_rank.y = (item.height - tf_rank.height) >> 1;
        tf_rank.text = i == -1 ? "" : (i + 1) + "";
        tf_rank.textColor = this.rankcolors[i < 3 ? i : 3];
        item.addChild(tf_rank);
        //头像
        var imageLoader = new egret.ImageLoader();
        imageLoader.once(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            var tr = new egret.Texture();
            tr._setBitmapData(imageLoader.data);
            var bmp_head = new egret.Bitmap(tr);
            bmp_head.width = bmp_head.height = 48;
            bmp_head.x = tf_rank.x + tf_rank.width + 10;
            bmp_head.y = (item.height - bmp_head.height) >> 1;
            item.addChild(bmp_head);
        }, this);
        imageLoader.load(data.avatarUrl);
        //昵称
        var tf_name = new egret.TextField();
        tf_rank.textAlign = "left";
        tf_name.width = 170;
        tf_name.height = 30;
        tf_name.x = tf_rank.x + tf_rank.width + 78;
        tf_name.y = (item.height - tf_name.height) >> 1;
        tf_name.text = data.nickname;
        item.addChild(tf_name);
        //财富
        var tf_score = new egret.TextField();
        tf_score.textAlign = "right";
        tf_score.width = 240;
        tf_score.height = 30;
        tf_score.x = item.width - tf_score.width - 20;
        tf_score.y = (item.height - tf_score.height) >> 1;
        tf_score.text = kvo['money'];
        item.addChild(tf_score);
        return item;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
