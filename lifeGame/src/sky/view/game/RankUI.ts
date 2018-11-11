class RankUI extends eui.Component {
	public constructor(ticket: string = null) {
		super();
		this.shareticket = ticket;
		this.skinName = "RankSkin";
	}

	private rect_bg: eui.Rect;
	private img_close: eui.Image;
	private lbl_title: eui.Label;
	private lbl_2:eui.Label;
	private btn_group:eui.Button;

	private shareticket: string;

	protected childrenCreated() {
		super.childrenCreated();

		this.checkFit();
		this.initView();
		this.initEvent();
	}

	private checkFit() {
		let h = GameLogic.getInstance().GameStage.stageHeight;
		this.height = this.rect_bg.height = h;
	}

	private initView() {
		this.lbl_title.text = this.shareticket != null ? "群排行榜" : "好友排行榜";
		
		this.initDataContext();
	}

	private bmp_context: egret.Bitmap;
	private bitmapdata:egret.BitmapData;
	private initDataContext() {
		//开放域主体

		this.bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
		this.bitmapdata.$deleteSource = false;
		const texture = new egret.Texture();
		texture._setBitmapData(this.bitmapdata);
		this.bmp_context = new egret.Bitmap(texture);
		this.bmp_context.width = GameLogic.getInstance().GameStage.stageWidth;
		this.bmp_context.height = GameLogic.getInstance().GameStage.stageHeight;
		this.bmp_context.x = this.bmp_context.y = 0;

		this.addChildAt(this.bmp_context, 4);//盖在底图上面，各种按钮下面

		egret.stopTick(this.tickerHandler, this);
		egret.startTick(this.tickerHandler, this);

		platform.postMessage({
			shareTicket: this.shareticket,
			// userinfo:WxApi.getInstance().userInfo,
			stageW: GameLogic.getInstance().GameStage.stageWidth,
			stageH: GameLogic.getInstance().GameStage.stageHeight,
			command: "open"
		})
	}

	private initEvent() {
		this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
		this.btn_group.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickGroupRank,this);

		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
	}
	private clickGroupRank(){
		WxApi.getInstance().share("grouprank=1");
	}

	private clickClose() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	private tickerHandler(timeStarmp: number): boolean {
		egret.WebGLUtils.deleteWebGLTexture(this.bitmapdata.webGLTexture);
		this.bitmapdata.webGLTexture = null;
		return false;
	}

	private clear() {
		this.img_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
		this.btn_group.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickGroupRank,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);

		platform.postMessage({
			command: "close"
		});
		if (this.bmp_context != null && this.bmp_context.parent != null) {
			this.bmp_context.parent.removeChild(this.bmp_context);
			this.bmp_context = null;
		}

		egret.stopTick(this.tickerHandler, this);
		this.bmp_context = null;
		this.bitmapdata = null;
	}
}
window["RankUI"]=RankUI;