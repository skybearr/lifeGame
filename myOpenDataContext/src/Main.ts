class Main extends egret.DisplayObjectContainer {

    constructor() {
        super();

        wx.onMessage(data => {
            console.log("data:", data);
            let head = data['head'];
            let open = data['open'];
            let userinfo = data['userinfo'];
            switch (head) {
                case "friend":
                    open ? this.openFriendCloud(userinfo) : this.closeFriendCloud();
                    break;
                case "group":
                    open ? this.openGroupCloud(userinfo,data['shareTicket']) : this.closeGroupCloud();
                    break;
            }
        });
    }

    /**好友排行榜 */
    private openFriendCloud(userinfo) {
        console.log("openFriendCloud");
        
        wx.getFriendCloudStorage({
            //keylist 需要获取排行榜中的数据的key
            keyList: ["money"],
            success: res => {
                this.initItems(userinfo,res.data,true)
            },
            fail: err => {
                console.log("getFriendCloudStorage:error:", err);
            },
            complete: () => {
                console.log("getFriendCloudStorage:complete:");
            }
        });
    }
    private closeFriendCloud(): void {
        console.log("closeFriendCloud",this.numChildren);
        
        for (let i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
    }


    /**群排行榜 */
    private openGroupCloud(userinfo,shareTicket:string) {
        console.log("openGroupCloud");
        
        wx.getGroupCloudStorage({
            shareTicket:shareTicket,
            //keylist 需要获取排行榜中的数据的key
            keyList: ["money", "fame", "achives"],
            success: res => {
                this.initItems(userinfo,res.data,false)
            },
            fail: err => {
                console.log("getFriendCloudStorage:error:", err);
            },
            complete: () => {
                console.log("getFriendCloudStorage:complete:");
            }
        });
    }
    private closeGroupCloud() {

    }


    private readonly scrollView = new egret.ScrollView();
    private bgbmp: egret.Shape;
    private mybmp: egret.Shape;
    private bgcolor: number = 0xB7ACAC;

    private initBg(friend) {
        console.log("initBg");
        
        let trr = new egret.TextField();
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

        let tr = new egret.TextField();
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
    }

    private getUserInfo(i,userinfo: any) {
        wx.getUserCloudStorage({
            //keylist 需要获取排行榜中的数据的key
            keyList: ["money", "fame", "achives"],
            success: res => {
                this.initMyItem(i,userinfo, res);
            },
            fail: err => {
                console.log("getUserCloudStorage:error:", err);
            },
            complete: () => {
                console.log("getUserCloudStorage:complete:");
            }
        });
    }

    private initItems(userinfo,datarray,friend) {
        this.initBg(friend);

        const listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = this.bgbmp.x;
        this.scrollView.y = this.bgbmp.y + 40;
        this.scrollView.width = this.bgbmp.width;
        this.scrollView.height = this.bgbmp.height;
        this.addChild(this.scrollView);
        
        let url = userinfo != null ? userinfo.avatarUrl : "-1"
        let myrank = -1;
        datarray = datarray.sort(this.sortfun);
        for (let i: number = 0; i < datarray.length; i++) {
            let data = datarray[i];
            if(url == data.avatarUrl){
                myrank = i;
            }
            let item = this.addItem(i, data);
            item.y = i * 54;
            listContainer.addChild(item);
        }
        
        this.getUserInfo(myrank,userinfo);
    }

    private sortfun(a:any,b:any){
        if(a.KVDataList[0].key < b.KVDataList[0].key){
            return -1;
        }
        else{
            return 1;
        }
    }

    private initMyItem(i,userinfo, datarray) {
        if(userinfo == null || userinfo.avatarUrl == null){
            return;
        }
        let data = {};
        data['avatarUrl'] = userinfo.avatarUrl;
        data['nickname'] = userinfo.nickName;
        data['KVDataList'] = datarray.KVDataList;
        let item = this.addItem(i, data);
        item.x = this.mybmp.x;
        item.y = this.mybmp.y + (this.mybmp.height - item.height) /2;
        
        this.addChild(item);
    }

    private rankcolors: number[] = [0xED1515, 0x259e32, 0xbbeffc, 0xffffff];
    private addItem(i: number, data: any): egret.DisplayObjectContainer {
        let kvs = data.KVDataList;
        let kvo = {};
        if (kvs == null || kvs.length == 0) {
            kvo = {money:"未上榜"};
        }
        else {
            for (let j: number = 0; j < kvs.length; j++) {
                let o = kvs[j];
                kvo[o.key] = o.value;
            }
        }

        let item = new egret.DisplayObjectContainer();
        item.width = this.bgbmp.width;
        item.height = 54;

        //底
        let bg = new egret.Shape();
        bg.graphics.beginFill((i == -1 || i % 2 == 0) ? this.bgcolor : 0x878080, 1);
        bg.graphics.drawRect(0, 0, item.width, item.height);
        bg.graphics.endFill();
        bg.touchEnabled = false;
        item.addChild(bg);

        //排名
        let tf_rank = new egret.TextField();
        tf_rank.textAlign = "left";
        tf_rank.width = 40;
        tf_rank.height = 30;
        tf_rank.x = 30;
        tf_rank.y = (item.height - tf_rank.height) >> 1;
        tf_rank.text = i == -1 ? "" : (i + 1) + "";
        tf_rank.textColor = this.rankcolors[i < 3 ? i : 3];
        item.addChild(tf_rank);

        //头像
        let imageLoader = new egret.ImageLoader();
        imageLoader.once(egret.Event.COMPLETE, (event: egret.Event) => {
            let imageLoader = <egret.ImageLoader>event.currentTarget;
            let tr = new egret.Texture();
            tr._setBitmapData(imageLoader.data);
            let bmp_head = new egret.Bitmap(tr);
            bmp_head.width = bmp_head.height = 48;
            bmp_head.x = tf_rank.x + tf_rank.width + 10;
            bmp_head.y = (item.height - bmp_head.height) >> 1;
            item.addChild(bmp_head);
        }, this);
        imageLoader.load(data.avatarUrl);

        //昵称
        let tf_name = new egret.TextField();
        tf_rank.textAlign = "left";
        tf_name.width = 170;
        tf_name.height = 30;
        tf_name.x = tf_rank.x + tf_rank.width + 78;
        tf_name.y = (item.height - tf_name.height) >> 1;
        tf_name.text = data.nickname;
        item.addChild(tf_name);

        //财富
        let tf_score = new egret.TextField();
        tf_score.textAlign = "right";
        tf_score.width = 240;
        tf_score.height = 30;
        tf_score.x = item.width - tf_score.width - 20;
        tf_score.y = (item.height - tf_score.height) >> 1;
        tf_score.text = kvo['money'];
        item.addChild(tf_score);

        return item;
    }


}

// 微信关系数据的获取
// 上传方法类似、开发者自行填写
declare namespace wx {
    /**
     * 监听消息
     */
    const onMessage: (callback: (data: { [key: string]: any }) => void) => void;
    /**
     * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
     * @param keyList 要拉取的 key 列表
     * @param success 接口调用成功的回调函数
     * @param fail 	接口调用失败的回调函数
     * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    const getFriendCloudStorage: (Object: {
        keyList?: string[],
        success?: (res: {
            data: UserGameData[]
        }) => void,
        fail?: (err: any) => void,
        complete?: () => void,
    }) => void;

    const getUserCloudStorage: (Object: {
        keyList?: string[],
        success?: (res: UserGameData) => void,
        fail?: (err: any) => void,
        complete?: () => void,
    }) => void;

    /**
     * 在小游戏是通过群分享卡片打开的情况下，可以通过调用该接口获取群同玩成员的游戏数据。该接口只可在开放数据域下使用。
     * @param shareTicket 群分享对应的 shareTicket
     * @param keyList 要拉取的 key 列表
     * @param success 接口调用成功的回调函数
     * @param fail 接口调用失败的回调函数
     * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    const getGroupCloudStorage: (Object: {
        shareTicket: string,
        keyList: string[],
        success?: (res: {
            data: UserGameData[]
        }) => void,
        fail?: (err?: any) => void,
        complete?: () => void,
    }) => void;

    /**
     * 用户数据
     */
    type UserGameData = {
        /** 用户的微信头像 url */
        avatarUrl: string,
        /** 用户的微信昵称 */
        nickName: string,
        /** 用户的 openId */
        openId: string,
        /**用户自定义数据 */
        KVList: KVData[]
    }
    type KVData = {
        key: string,
        value: string
    }
}