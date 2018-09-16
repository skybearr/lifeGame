class GameLogic extends egret.EventDispatcher {
	public constructor() {
		super();
	}

	private static _instance: GameLogic;
	public static getInstance(): GameLogic {
		if (this._instance == null) {
			this._instance = new GameLogic();
		}
		return this._instance;
	}


	public GameStage: egret.Stage;
	public main: eui.UILayer;


	public data: Object;
	public goods: Object;
	public strings: Object;

	public cbSelected: boolean;

	public init() {
		SoundManager.getInstance().playBgSound(true);

		this.initData();
		this.getHiscore();
		this.openStart();//要放在initShareInfo之前，share可能有群排行点进来的
		WxApi.getInstance().initShareInfo();
	}

	public openStart() {
		this.main.removeChildren();
		this.main.addChild(new StartUI());
	}

	private getHiscore() {
		let s = WxApi.getInstance().getLocalData(PlayerConst.hiscore);
		PlayerConst.highestScore = s == null ? 0 : s;
	}

	private loadingGoods: boolean;
	private initData() {
		if (this.data == null) {
			this.data = RES.getRes("config_json");
		}
		if (this.strings == null) {
			this.strings = RES.getRes("strings_json");
		}
		if (this.goods == null) {
			this.goods = RES.getRes("goods_json");

			//初始化商品
			let n = 1;
			while (true) {
				if (this.goods[n] == null) {
					break;
				}
				else {
					GameCommand.getInstance().bases.push(n);
				}
				n++;
			}

			//初始化称号
			this.titles = {};
			this.titles = this.goods['titles'];

			//初始化成就
			this.achieves = {};
			this.achieves = this.goods['dreams'];

			//初始化已达成成就
			this.arrives = WxApi.getInstance().getLocalData("achieve");
			if(this.arrives == null || this.arrives == ""){
				this.arrives = {};
			}
		}
	}

	public titles: Object;
	public achieves: Object;
	/**成就数据 1:[10,20,30]	2:[{10:1},{20:3}] */
	public arrives:Object = {};

	/**获取称号 */
	public getTitle(): string {
		let data = GameLogic.getInstance().titles;
		let titleId:string = "10";
		let titleobj;
		for (let id in data) {
			let o = data[id];
			let needs = o.need.split(":");
			let arivenum: number = 0;
			for (let i = 0; i < needs.length; i++) {
				let a = needs[i].split("_");//0type 1value
				let type = parseInt(a[0]);
				let value = parseInt(a[1]);
				switch (type) {
					case COINTYPE.MONEY:
						if (DataBase.money >= value) {
							arivenum++;
						}
						break;
					case COINTYPE.FAME:
						if (DataBase.fame >= value) {
							arivenum++;
						}
						break;
				}
			}
			//全部达成
			if (arivenum == needs.length) {
				titleId = id;
			}
		}
		titleobj = data[titleId];
		//加入成就
		this.saveAchieve(ACHIVE.TITLE,titleId);
		return titleobj.name;
	}

	/**保存成就 1:[10,20,30]	2:[{10:1},{20:3}	3:[10,20]]*/
	public saveAchieve(type:number,id:string,num:number=0){
		let arr = this.arrives[type];
		if(arr == null){
			arr = [];
		}
		if(type == ACHIVE.ARIVED || type == ACHIVE.TITLE){
			if(arr.indexOf(id) == null){
				arr.push(id);
			}
			else{
				return;
			}
		}
		else if(type == ACHIVE.BUY){
			let has:boolean = false;
			for(let key in arr){
				if(id == key){//已经有了，更新数量
					has = true;
					arr[key].num += num;
				}
			}
			if(!has){//没有的，加入
				arr.push({id:id,num:num});
			}
		}
		this.arrives[type] = arr;

		WxApi.getInstance().setLocalDataByObject("achieve",this.arrives);
	}

	public getArrives():Object{
		return this.arrives;
	}

	public gameui: GameUI;

	public startGame() {
		this.main.removeChildren();

		this.main.addChild(new GameUI());
	}






	/**用户信息 */
	public userInfo: any;

	/** 登录授权*/
	public login() {
		let wx = window["wx"];
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
				})
			}
		})
	}

	/**右上角转发 */
	private showShareMenu() {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		wx.showShareMenu();
		this.onShare("rightup=1");
	}

	/**主动转发 
	 * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
	*/
	public share(query: string = null) {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		this.updateShareMenu(true);
		wx.shareAppMessage({
			title: '来苏州一起浮生吧啊啊啊啊啊啊啊啊啊啊啊啊',
			imageUrl: "resource/assets/img/qua_1.png",
			query: query
		})
	}

	/**监听用户点击右上角菜单的“转发”按钮时触发的事件
	 * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
	 */
	private onShare(query: string = "rightup=1") {
		let wx = window["wx"];
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
			}
		})
	}

	/**转发参数 */
	public updateShareMenu(withShareTicket: boolean) {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		console.log("updateShareMenu:", withShareTicket);

		wx.updateShareMenu({
			withShareTicket: withShareTicket,
			success: res => {
				console.log("updateShareMenu:success:", res);

			},
			fail: res => {
				console.log("updateShareMenu:fail:", res);
			},
			complete: () => {
				console.log("updateShareMenu:complete:");
			}
		})
	}

	public openRank(shareticket: string = null) {
		this.main.addChild(new RankUI(shareticket));
	}

	/**
     * 排行榜遮罩，为了避免点击开放数据域影响到主域，在主域中建立一个遮罩层级来屏蔽点击事件.</br>
     * 根据自己的需求来设置遮罩的 alpha 值 0~1.</br>
     * 
     */
	private rankingListMask: egret.Shape;
	private btn_rankclose: eui.Image;
	private btn_grouprank: eui.Image;
	private bitmap: egret.Bitmap;
	private isFriend: boolean;

	/**获取好友排行榜数据 */
	public openFriendRank(friend: boolean, shareTicket: string = "") {
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
		const bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
		bitmapdata.$deleteSource = false;
		const texture = new egret.Texture();
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
		egret.startTick((timeStarmp: number) => {
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
	}
	private closeFriendRank() {
		this.bitmap && this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
		this.btn_rankclose && this.btn_rankclose.parent && this.btn_rankclose.parent.removeChild(this.btn_rankclose);
		this.btn_grouprank && this.btn_grouprank.parent && this.btn_grouprank.parent.removeChild(this.btn_grouprank);
		this.rankingListMask && this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
		//发送消息
		wx.getOpenDataContext().postMessage({
			head: "friend",
			open: false
		});
	}

	/**获取群内数据,实际上只是一个转发 */
	public openGroupRank() {
		if (this.isFriend) {
			this.share("grouprank=1");
		}
		else {
			this.closeGroupRank();
		}

	}
	private closeGroupRank() {
		this.closeFriendRank();
	}




	/** 对用户托管数据进行写数据操作，允许同时写多组 KV 数据
	 * @param	KVDataList	要修改的 KV 数据列表	
	*/
	public setUserCloudStorage() {
		let wx = window['wx'];
		if (wx == null) {
			return;
		}
		let KVDataList = [];
		let str: string = "";
		for (let i: number = 0; i < DataBase.achives.length; i++) {
			str += DataBase.achives[i];
			if (i < DataBase.achives.length) {
				str += ",";
			}
		}
		wx.setUserCloudStorage({
			KVDataList: [
				{ key: "score", value: DataBase.money + "" },
				{ key: "fame", value: DataBase.fame + "" },
				{ key: "achives", value: str }
			],
			success: res => {
				console.log("setUserCloudStorage:res:", res);
			},
			fail: err => {
				console.log("setUserCloudStorage:error:", err);
			},
			complete: () => {
				console.log("setUserCloudStorage:complete:");
			}
		});
	}

	/**删除游戏托管数据
	 * @param keyList 要删除掉 key 列表
	 */
	public removeUserCloudStorage(keyList: string[]) {
		wx.removeUserCloudStorage()({
			keyList: keyList,
			success: res => {
				console.log("removeUserCloudStorage:res:", res);
			},
			fail: err => {
				console.log("removeUserCloudStorage:error:", err);
			},
			complete: () => {
				console.log("removeUserCloudStorage:complete:");
			}
		});
	}

	/**上报用户数据后台接口。小游戏可以通过本接口上报key-value数据到用户的CloudStorage。
	 * @param	access_token	接口调用凭证
	 * @param	openid	用户唯一标识符
	 * @param	appid	小程序 appId
	 * @param	signature	用户登录态签名，签名算法请参考用户登录态签名算法
	 * @param	sig_method	用户登录态签名的哈希方法，如hmac_sha256等，请参考用户登录态签名算法
	 * @param	kv_list	要上报的数据
	*/
	public setUserStorage(kv_list: Object) {
		let access_token: string = "";
		let openid: string = "";
		let appid: string = "";
		let signature: string = "";
		let sig_method: string = "";

		//POST https://api.weixin.qq.com/wxa/set_user_storage?access_token=ACCESS_TOKEN&signature=SIGNATURE&openid=OPENID&sig_method=SIG_METHOD
	}
}