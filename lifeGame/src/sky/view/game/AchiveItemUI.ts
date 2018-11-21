class AchiveItemUI extends eui.ItemRenderer {
	public constructor() {
		super();
		this.skinName = "AchieveItemSkin";
	}

	private rect_bg: eui.Rect;
	private lbl_name: eui.Label;
	private lbl_have: eui.Label;
	private lbl_need: eui.Label;
	private btn_buy: eui.Button;
	

	protected childrenCreated() {
		super.childrenCreated();

		this.initView();

		this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuy, this);
		
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);

	}

	private initView() {
		let vo = this.data as AchieveVO;
		if (vo == null) {
			return;
		}
		this.lbl_name.text = vo.content;
		this.lbl_have.text = (vo.type == 1 || vo.type == 3 ? "已达成：" : "已拥有：") + vo.have + "次";
		let needstr = "需要：";
		for (let i = 0; i < vo.need.length; i++) {
			let o: { id: number, value: number } = vo.need[i];
			needstr += GameConst.coinstr[o.id] + o.value + "  ";
		}
		this.lbl_need.text = needstr;
		if(vo.type == 1 || vo.type == 3){
			this.btn_buy.label = vo.state == 0 ? "未达成" : (vo.state == 1 ? "已达成" : "购买");
		}
		else{
			this.btn_buy.label = vo.state == 0 ? "未达成" : (vo.state == 1 ? "已达成" : "购买");
		}
		this.btn_buy.touchEnabled = vo.state == 2;
	}

	protected dataChanged(): void {
		this.initView();
	}

	private clickBuy() {
		let vo = this.data as AchieveVO;
		let arrives: number = 0;
		let coins = [DataBase.money, DataBase.deposit, DataBase.debt, DataBase.pow, DataBase.fame];
		for (let i = 0; i < vo.need.length; i++) {
			let o: { id: number, value: number } = vo.need[i];
			let index = o.id - 1;
			if (coins[index] >= o.value) {
				arrives++;
			}
		}
		if (arrives == vo.need.length) {
			let type = vo.type;
			GameLogic.getInstance().saveAchieve(type, vo.id, 1)
			for (let i = 0; i < vo.need.length; i++) {
				let o: { id: number, value: number } = vo.need[i];
				if (o.id == COINTYPE.MONEY) {
					DataBase.money -= o.value;
					if(GameLogic.getInstance().achieveui != null){
						GameLogic.getInstance().achieveui.updateCoin();
					}
				}
			}

			this.data['have'] = vo.have + 1;
			this.lbl_have.text = "已拥有：" + vo.have;
		}
	}

	private clear() {
		this.btn_buy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuy, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
	}
}