class StartUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "StartSkin";
	}

	private lbl_name: eui.Label;
	private lbl_content: eui.Label;
	private lbl_log:eui.Label;


	protected childrenCreated() {
		super.childrenCreated();
		
		let data = GameLogic.getInstance().data;
		this.lbl_name.text = StringUtil.getSwfLangStr("s1");
		this.lbl_content.text = StringUtil.getSwfLangStr("s2");

		for (let i: number = 1; i <= 3; i++) {
			let o = data['config' + i];
			let str = i == 1 ? "开始游戏" : o['rmb'] + "元  开始";

			// str += "\n" + o['pow'] + "体力 " + o['debt'] + "欠债 " + o['money'] + "启动资金\n";
			if (i == 3) {
				str += "(可获炒房证)";
			}
			let btn:eui.Button = this['btn_' + i];
			btn.label = str;
			btn.name = i + "";
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}

		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
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