class StartUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "StartSkin";
	}

	private img_bg:eui.Image;
	private lbl_content: eui.Label;
	private lbl_log:eui.Label;
	private lbl_prop:eui.Label;
	
	private btn_10:eui.Button;
	private btn_11:eui.Button;
	private btn_12:eui.Button;

	private img_sound:eui.Image;
	protected childrenCreated() {
		super.childrenCreated();

		this.checkFit();
		
		platform.bannershow(GameConst.bannerAdId);

		let data = GameLogic.getInstance().data;
		this.lbl_content.text = StringUtil.getSwfLangStr("s2");
		this.updateProp();

		for (let i: number = 1; i <= 3; i++) {
			let o = data['config' + i];
			let str = "开始游戏";
			str = i == 1 ? str : "使用券" + str;

			str += "\n" + o['pow'] + "体力 " + o['debt'] + "欠债 " + o['money'] + "启动资金\n";
			if (i == 2) {
				str += "(可获炒房证)";
			}
			let btn:eui.Button = this['btn_' + i];
			btn.label = str;
			btn.name = i + "";
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}

		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
		this.img_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSound, this);
		GameLogic.getInstance().addEventListener(GameEvent.PROP_NUM_CHANGE,this.updateProp,this);

		this.btn_10.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickbtn1,this);
		this.btn_11.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickbtn1,this);
		this.btn_12.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickbtn1,this);

		// if(WxApi.getInstance().checkWx()){
		// 	this.button = wx.createGameClubButton({
		// 	icon: 'white',
		// 	style: {
		// 		left: 10,
		// 		top: 40,
		// 		width: 32,
		// 		height: 32,
		// 		text: "游戏圈"
		// 	}
		// })
		// }
		
	}
	private button: any;

	private initSound(){
		let b = SoundManager.getInstance().sound_switch;
		this.img_sound.source = RES.getRes(b ? "game_json.noice1_zb" : "game_json.noice2_zb")
	}

	private checkFit(){
		this.img_bg.height = GameLogic.getInstance().GameStage.stageHeight;
	}
	
	private updateProp(){
		this.lbl_prop.text = "分享可获得炒房券（炒房券 X" + PlayerConst.prop_num + "）";
	}

	private clickBtn(e: egret.TouchEvent) {
		if(GameLogic.getInstance().strings == null){
			this.lbl_log.text = "正在形成市场，请稍后...";
			return;
		}
		let i = parseInt(e.currentTarget.name);
		if(i == 2 && PlayerConst.prop_num <= 0){
			WxApi.getInstance().showToast("邀请好友进入游戏可获得炒房券");
			return;
		}
		GameCommand.getInstance().selectPackage(i);
		GameLogic.getInstance().startGame();
	}

	private clickbtn1(e:egret.TouchEvent){
		switch(e.currentTarget){
			case this.btn_10:
			WxApi.getInstance().showRewardAd(WATCHTYPE.NONE);
			break;
			case this.btn_11:
			this.addChild(new RankUI());
			break;
			case this.btn_12:
			WxApi.getInstance().share();
			break;

		}
	}
	private clickSound() {
		let b = !SoundManager.getInstance().sound_switch;
		SoundManager.getInstance().playBgSound(b);
		this.img_sound.source = RES.getRes(b ? "game_json.noice1_zb" : "game_json.noice2_zb")
	}

	private clear() {
		for (let i: number = 1; i <= 3; i++) {
			this['btn_' + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
		this.img_sound.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSound, this);
		GameLogic.getInstance().removeEventListener(GameEvent.PROP_NUM_CHANGE,this.updateProp,this);
		this.btn_10.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickbtn1,this);
		this.btn_11.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickbtn1,this);
		this.btn_12.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickbtn1,this);

		platform.bannerdestroy();

		if(this.button != null){
			this.button.destroy();
		}
	}
}