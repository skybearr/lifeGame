class AchieveUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "AchieveSkin";
	}

	private rect_bg: eui.Rect;
	private btn_back: eui.Button;
	private scorller: eui.Scroller;
	private list: eui.List;
	private arr_data: eui.ArrayCollection;
	private lbl_1:eui.Label;

	protected childrenCreated() {
		super.childrenCreated();
		GameLogic.getInstance().achieveui = this;
		this.checkFit();
		this.initView();
		this.initEvent();
		this.updateCoin();
	}

	public updateCoin(){
		this.lbl_1.text = DataBase.money + "";
	}

	private checkFit() {
		this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
		this.btn_back.y = this.rect_bg.height - this.btn_back.height;
	}

	private initView() {
		this.list.itemRenderer = AchiveItemUI;
		this.arr_data = new eui.ArrayCollection();
		let obj = GameLogic.getInstance().achieves;
		/**1:[10,20,30]	2:[{10:1},{20:3}	3:[10,20]] */
		let arrives = GameLogic.getInstance().getArrives();


		for (let id in obj) {
			let o = obj[id];
			let vo = new AchieveVO();
			vo.id = id;
			vo.content = o.content;
			vo.type = o.type;
			let a1 = o.need.split(":");
			let a3: { id: number, value: number }[] = [];
			for (let i = 0; i < a1.length; i++) {
				let a2 = a1[i].split("_");
				let oo = { id: parseInt(a2[0]), value: parseInt(a2[1]) };
				a3.push(oo);
			}
			vo.need = a3;
			vo.state = vo.type == ACHIVE.BUY ? 2 : 0;
			vo.have = 0;
			//已达成数据
			let a4 = arrives[vo.type];
			if (a4 == null) {
				this.arr_data.addItem(vo);
				continue;
			}
			p2:for (let i = 0; i < a4.length; i++) {
				let ooo = a4[i];
				if (ooo.id == id) {
					vo.have = ooo.num;
					vo.state = vo.type == ACHIVE.BUY ? 2 : 1;
					break p2;
				}
			}
			this.arr_data.addItem(vo);
		}

		this.list.dataProvider = this.arr_data;
	}

	private initEvent() {

		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
	}

	private clickBack() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	private clear() {
		this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
		GameLogic.getInstance().achieveui = null;
	}
}