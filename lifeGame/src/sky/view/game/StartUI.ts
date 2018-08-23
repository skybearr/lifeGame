class StartUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "StartSkin";
	}

	private img_bg:eui.Image;
	private lbl_content: eui.Label;
	private lbl_log:eui.Label;


	protected childrenCreated() {
		super.childrenCreated();

		this.checkFit();
		
		let data = GameLogic.getInstance().data;
		this.lbl_content.text = StringUtil.getSwfLangStr("s2");

		for (let i: number = 1; i <= 3; i++) {
			let o = data['config' + i];
			let str = "开始游戏";
			str = i == 1 ? str : "看视频" + str;

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
	}

	private checkFit(){
		this.img_bg.height = GameLogic.getInstance().GameStage.stageHeight;
	}

	private clickBtn(e: egret.TouchEvent) {
		if(GameLogic.getInstance().strings == null){
			this.lbl_log.text = "正在形成市场，请稍后...";
			return;
		}
		let i = parseInt(e.currentTarget.name);
		GameCommand.getInstance().selectPackage(i);
		GameLogic.getInstance().startGame();
	}

	private clear() {
		for (let i: number = 1; i <= 3; i++) {
			this['btn_' + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
	}
}