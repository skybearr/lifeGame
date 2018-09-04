var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
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
        _this.stageW = 750;
        _this.stageH = 1334;
        _this.listY = 242;
        _this.listWidth = 640;
        _this.itemHeight = 100;
        _this.itemDis = 0;
        _this.itemNumPerPage = 7;
        _this.myItemDisList = 20;
        _this.scrollView = new egret.ScrollView();
        _this.item_bg_color1 = 0x1f1e23;
        _this.item_bg_color2 = 0x2b2a30;
        _this.item_rankx = 40;
        _this.item_rankwidth = 50;
        _this.item_rankheight = 36;
        _this.item_ranksize = 36;
        _this.item_rankcolor = 0xffffff;
        _this.item_rankfont = "SimHei";
        _this.item_headx = 98;
        _this.item_headwidth = 48;
        _this.item_headheight = 48;
        _this.item_namex = 170;
        _this.item_namewidth = 264;
        _this.item_nameheight = 36;
        _this.item_namesize = 30;
        _this.item_namecolor = 0xffffff;
        _this.item_namefont = "SimHei";
        _this.item_scorex = 470;
        _this.item_scorewidth = 118;
        _this.item_scoreheight = 36;
        _this.item_scoresize = 36;
        _this.item_scorecolor = 0xffffff;
        _this.item_scorefont = "SimHei";
        wx.onMessage(function (data) {
            console.log("openData:onMessage:data:", data);
            var command = data['command'];
            _this.userinfo = data['userinfo'];
            _this.stageW = data['stageW'];
            _this.stageH = data['stageH'];
            _this.shareTicket = data['shareTicket'];
            _this.initBg();
            if (command == "open") {
                _this.shareTicket ? _this.openGroupCloud() : _this.openFriendCloud();
            }
            else {
                _this.closeCloud();
            }
        });
        return _this;
    }
    Main.prototype.initBg = function () {
        var oldw = this.stage.stageWidth;
        var oldh = this.stage.stageHeight;
        if (this.stageW != oldw) {
            this.scaleX = oldw / this.stageW;
        }
        if (this.stageH != oldh) {
            this.scaleY = oldh / this.stageH;
        }
        this.listHeight = this.itemHeight * this.itemNumPerPage;
        this.itemWidth = this.listWidth;
        this.myItemY = this.listY + this.listHeight + this.myItemDisList;
    };
    /**好友排行榜 */
    Main.prototype.openFriendCloud = function () {
        var _this = this;
        console.log("openFriendCloud");
        wx.getFriendCloudStorage({
            //keylist 需要获取排行榜中的数据的key
            keyList: ["score"],
            success: function (res) {
                _this.initItems(res.data, true);
            },
            fail: function (err) {
                console.log("getFriendCloudStorage:error:", err);
            },
            complete: function () {
                console.log("getFriendCloudStorage:complete:");
            }
        });
    };
    /**群排行榜 */
    Main.prototype.openGroupCloud = function () {
        var _this = this;
        console.log("openGroupCloud");
        wx.getGroupCloudStorage({
            shareTicket: this.shareTicket,
            //keylist 需要获取排行榜中的数据的key
            keyList: ["score"],
            success: function (res) {
                _this.initItems(res.data, false);
            },
            fail: function (err) {
                console.log("getFriendCloudStorage:error:", err);
            },
            complete: function () {
                console.log("getFriendCloudStorage:complete:");
            }
        });
    };
    Main.prototype.closeCloud = function () {
        console.log("closeCloud", this.numChildren);
        for (var i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
    };
    Main.prototype.initItems = function (datarray, friend) {
        console.log("initItems:", datarray);
        var listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.width = this.listWidth;
        this.scrollView.height = this.listHeight;
        this.scrollView.x = (this.stageW - this.scrollView.width) / 2;
        this.addChild(this.scrollView);
        var url = this.userinfo.avatarUrl != null ? this.userinfo.avatarUrl : "-1";
        var myrank = -1;
        var mydata;
        var arr = [];
        for (var i = 0; i < datarray.length; i++) {
            var data = datarray[i];
            if (url == data.avatarUrl) {
                console.log("myrank:", myrank);
                mydata = data;
                myrank = i;
            }
            if (data != null && data.KVDataList != null && data.KVDataList[0] != null) {
                arr.push(data);
            }
        }
        arr = arr.sort(this.sortfun);
        for (var i = 0; i < arr.length; i++) {
            var data = arr[i];
            var item = this.addItem(i, data);
            item.y = i * (this.itemHeight + this.itemDis);
            listContainer.addChild(item);
        }
        this.scrollView.y = this.listY;
        this.initMyItem(myrank, mydata);
    };
    //分数按从高到低排序
    Main.prototype.sortfun = function (a, b) {
        if (a.KVDataList[0] == null || b.KVDataList[0] == null) {
            return -1;
        }
        var va = parseInt(a.KVDataList[0].value);
        var vb = parseInt(b.KVDataList[0].value);
        if (va > vb) {
            return -1;
        }
        else {
            return 1;
        }
    };
    Main.prototype.initMyItem = function (i, datarray) {
        if (datarray == null || this.userinfo == null || this.userinfo.avatarUrl == null) {
            return;
        }
        var data = {};
        data['avatarUrl'] = this.userinfo.avatarUrl;
        data['nickname'] = this.userinfo.nickName;
        data['KVDataList'] = datarray.KVDataList;
        var item = this.addItem(i, data);
        item.x = (this.stageW - item.width) / 2;
        item.y = this.myItemY;
        this.addChild(item);
    };
    Main.prototype.addItem = function (i, data) {
        var _this = this;
        var kvs = data.KVDataList;
        var kvo = {};
        if (kvs == null || kvs.length == 0) {
            kvo = { score: "未上榜" };
            i = -1;
        }
        else {
            for (var j = 0; j < kvs.length; j++) {
                var o = kvs[j];
                kvo[o.key] = o.value;
            }
        }
        var item = new egret.DisplayObjectContainer();
        item.touchEnabled = true;
        item.touchChildren = false;
        item.width = this.itemWidth;
        item.height = this.itemHeight;
        //底
        var shape = new egret.Shape();
        shape.graphics.beginFill(i % 2 == 0 ? this.item_bg_color1 : this.item_bg_color2);
        shape.graphics.drawRect(0, 0, this.itemWidth, this.itemHeight);
        shape.graphics.endFill();
        item.addChild(shape);
        //排名，123名颜色区分
        var color = this.item_rankcolor;
        if (i == 0) {
            color = 0xff094c;
        }
        else if (i == 1) {
            color = 0xff5317;
        }
        else if (i == 2) {
            color = 0xffe117;
        }
        var tf_rank = this.createTextField(this.item_rankx, item.height, this.item_rankwidth, this.item_rankheight, color, this.item_rankfont, this.item_ranksize);
        tf_rank.text = i == -1 ? "" : (i + 1) + "";
        item.addChild(tf_rank);
        //头像
        var imageLoader = new egret.ImageLoader();
        imageLoader.once(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            var tr = new egret.Texture();
            tr._setBitmapData(imageLoader.data);
            var bmp_head = _this.createBitmap(tr, _this.item_headx, item.height, _this.item_headwidth, _this.item_headheight);
            item.addChild(bmp_head);
        }, this);
        imageLoader.load(data.avatarUrl);
        //昵称
        var tf_name = this.createTextField(this.item_namex, item.height, this.item_namewidth, this.item_nameheight, this.item_namecolor, this.item_namefont, this.item_namesize, "left");
        tf_name.text = this.checkSpeName(data.nickname);
        item.addChild(tf_name);
        //分数
        var tf_score = this.createTextField(this.item_scorex, item.height, this.item_scorewidth, this.item_scoreheight, this.item_scorecolor, this.item_scorefont, this.item_scoresize, "left");
        tf_score.text = kvo['score'];
        item.addChild(tf_score);
        return item;
    };
    Main.prototype.createTextField = function (x, y, w, h, color, font, size, textalign, veralign) {
        if (textalign === void 0) { textalign = "center"; }
        if (veralign === void 0) { veralign = "middle"; }
        var tf = new egret.TextField();
        tf.touchEnabled = false;
        tf.x = x;
        tf.width = w;
        tf.height = h;
        tf.textColor = color;
        tf.fontFamily = font;
        tf.size = size;
        tf.textAlign = textalign;
        tf.verticalAlign = veralign;
        tf.y = (y - h) / 2; //这个y是指父类的高度，y轴居中
        return tf;
    };
    Main.prototype.createBitmap = function (tr, x, y, w, h) {
        var bmp = new egret.Bitmap(tr);
        bmp.touchEnabled = false;
        bmp.x = x;
        bmp.width = w;
        bmp.height = h;
        bmp.y = (y - h) / 2; //这个y是指父类的高度，y轴居中
        return bmp;
    };
    /**处理一些特殊字符导致的无法显示的名字 */
    Main.prototype.checkSpeName = function (str) {
        var newstr = "";
        var i = 0;
        while (i < str.length) {
            var n = str.charCodeAt(i);
            var s = str.charAt(i);
            i++;
            if (n >= 65024 && n <= 65039) {
                continue;
            }
            newstr += s;
        }
        return newstr;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
;window.Main = Main;