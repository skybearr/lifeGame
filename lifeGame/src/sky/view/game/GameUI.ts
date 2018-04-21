class GameUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "GameSkin";
	}

	private gp_market: eui.Group;
	private gp_store: eui.Group;
	private gp_over: eui.Group;

	/**现金 */
	private lbl_1:eui.Label;
	/**存款 */
	private lbl_2:eui.Label;
	/**欠债 */
	private lbl_3:eui.Label;
	/**体力 */
	private lbl_4:eui.Label;
	/**声望 */
	private lbl_5:eui.Label;
	/**未知 */
	private lbl_6:eui.Label;


	private crtPop: number;



	protected childrenCreated() {
		super.childrenCreated();

		GameLogic.getInstance().gameui = this;

		this.initView();
		this.initEvent();

		GameCommand.getInstance().startGame();
	}


	/**出现事件 */
	public eventAppear(str: string) {

	}

	/**刷新基本数据*/
	public initData(msg:msgLifeDataRsp) {
		this.lbl_1.text = msg.dwMoney.toString();
		this.lbl_2.text = msg.dwDeposit.toString();
		this.lbl_3.text = msg.dwDebt.toString();
		this.lbl_4.text = msg.dwPow.toString();
		this.lbl_5.text = msg.dwFame.toString();
	}

	/**刷新商店*/
	public initMarket(msg) {

	}

	/**我的商品里有价格上涨的时候显示箭头
	 * @param arr 一组id
	 */
	public storeUp(arr): void {

	}

	/**刷新我的商品*/
	public initStore(msg): void {

	}

	/**结算 */
	public over() {

	}

	private initView() {
		
	}

	private initEvent() {
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
		for (let i: number = 1; i <= 27; i++) {
			let btn: eui.Button = this['btn_' + i];
			btn.name = i + "";
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}
	}

	private clickBtn(e: egret.TouchEvent) {
		let i = parseInt(e.currentTarget.name);
		switch (i) {
			case 1:
			case 2:
			case 3:
				GameCommand.getInstance().passOneDay();
				break;
			case 4://慈善
				
				break;
			case 5:
			case 6:
			case 7:
			case 8:
				this.pop(i);
				break;
			case 9://转发
				
				break;
			case 10://广告
				
				break;
			case 11://排行榜
				
				break;
			case 12://重新开始
				this.restart();
				break;

		}
	}

	private pop(i: number) {
		if (this.crtPop != null) {
			let gp = this['gp_' + this.crtPop];
			if (gp != null) {
				gp.visible = false;
			}
		}
		this['gp_' + i].visible = true;
		this.crtPop = i;
	}

	private restart(){
		GameLogic.getInstance().openStart();
	}

	private clear() {
		this.clearEvent();


		GameLogic.getInstance().gameui = null;
	}

	private clearEvent() {
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
		for (let i: number = 1; i <= 27; i++) {
			let btn: eui.Button = this['btn_' + i];
			btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}
	}
}