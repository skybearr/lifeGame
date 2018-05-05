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

	private market_arr:MarketItem[];
	private store_arr:StoreItem[];

	private gamestate:number;
	private max_num:number;
	private data:msgLifeDataRsp;
	private leftStore:number;

	protected childrenCreated() {
		super.childrenCreated();

		GameLogic.getInstance().gameui = this;
		this.market_arr = [];
		this.store_arr = [];

		this.initView();
		this.initEvent();

		GameCommand.getInstance().startGame();
	}


	/**出现事件 */
	public eventAppear(str: string) {

	}

	/**刷新基本数据*/
	public initData(msg:msgLifeDataRsp) {
		this.data = msg;
		this.setLeft();
		this.lbl_1.text = this.data.dwMoney.toString();
		this.lbl_2.text = this.data.dwDeposit.toString();
		this.lbl_3.text = this.data.dwDebt.toString();
		this.lbl_4.text = this.data.dwPow.toString();
		this.lbl_5.text = this.data.dwFame.toString();
	}

	private setLeft(){
		this.leftStore = this.data.dwMaxStoreNum - this.getStoreNum();
	}

	private getStoreNum():number{
		let n:number = 0;
		for(let i:number=0;i<this.store_arr.length;i++){
			let item = this.store_arr[i];
			n += item.good.dwNum;
		}
		return n;
	}

	/**刷新商店*/
	public initMarket(msg:msgGoodsBuyRsp) {
		this.clearMarket();

		for(let i:number=0;i<msg.goods.length;i++){
			let item = new MarketItem(msg.goods[i]);
			item.y = (item.height + 2) * i;
			item.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickMarketItem,this);
			this.market_arr.push(item);
			this.gp_market.addChild(item);
		}
	}
	private crtMarketItem:MarketItem;
	private clickMarketItem(e:egret.TouchEvent){
		let item = e.currentTarget as MarketItem;
		if(this.crtMarketItem != null){
			this.crtMarketItem.select = false;
		}
		this.crtMarketItem = item;
		this.crtMarketItem.select = true;
		this.pop(9);
			
		let max = Math.floor(this.data.dwMoney / item.good.dwPrice);
		this.max_num = max > this.leftStore ? this.leftStore : max;

		this['lbl_buy_1'].text = item.good.strName;
		this['lbl_num6'].text = this.max_num + "";
	}

	/**刷新我的商品*/
	public initStore(msg:msgGoodsStoreRsp): void {
		this.clearStore();
		for(let i:number=0;i<msg.goods.length;i++){
			let item = new StoreItem(msg.goods[i]);
			item.y = (item.height + 2) * i;
			item.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickStoreItem,this);
			this.store_arr.push(item);
			this.gp_store.addChild(item);
		}
	}
	private crtStoreItem:StoreItem;
	private clickStoreItem(e:egret.TouchEvent){
		let item = e.currentTarget as StoreItem;
		if(this.crtMarketItem != null){
			this.crtMarketItem.select = false;
		}
		this.crtStoreItem = item;
		this.crtStoreItem.select = true;
		this.pop(10);
			
		this.max_num = this.crtStoreItem.good.dwNum;

		this['lbl_sell_1'].text = item.good.strName;
		this['lbl_num7'].text = this.max_num + "";
	}

	/**我的商品里有价格上涨的时候显示箭头
	 * @param arr 一组id
	 */
	public storeUp(arr): void {
		
	}

	/**结算 */
	public over() {

	}

	public errorRsp(i:number){
		console.log("error:",i);
		
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

		for (let i: number = 1; i <= 7; i++) {
			let lbl: eui.Label = this['lbl_num' + i];
			lbl.name = 'lbl' + i;
			lbl.addEventListener(egret.Event.CHANGE, this.txtChange, this);
		}
	}

	private txtChange(e:egret.Event){
		let lbl:eui.Label = e.currentTarget as eui.Label;
		let n = parseInt(lbl.text);
		if(n > this.max_num){
			lbl.text = this.max_num + "";
		}
	}

	private clickBtn(e: egret.TouchEvent) {
		let i = parseInt(e.currentTarget.name);
		if(this.gamestate == 0){
			if(i < 9 && i > 12 && i < 26){
				return;
			}
		}
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
			case 13://存钱

			break;
			case 14://取钱

			break;
			case 15://治疗

			break;
			case 16://关闭
			case 18:
			case 20:
			case 22:
			case 24:
			case 25:
			this.pop(0);
			break;
			case 17://买柜子

			break;
			case 19://还债

			break;
			case 21://购买
				let n21 = parseInt(this['lbl_num6'].text);
				if(n21 > 0){
					GameCommand.getInstance().buyGoods(this.crtMarketItem.good.dwID,n21);
				}
				this.pop(0);
			break;
			case 23://出售
				let n23 = parseInt(this['lbl_num7'].text);
				if(n23 > 0){
					GameCommand.getInstance().sellGoods(this.crtStoreItem.good.dwID,n23);
				}
				this.pop(0);
			break;
			case 26://再来一次

			break;
			case 27://炫耀

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

		let gp = this['gp_' + i];
		if(gp != null){
			gp.visible = true;
			this.crtPop = i;
		}
		else{
			this.crtPop = null;
		}
	}

	private clearMarket(){
		for(let i:number=0;i<this.market_arr.length;i++){
			let item = this.market_arr[i];
		}
		this.gp_market.removeChildren();
		this.market_arr = [];
		this.crtMarketItem = null;
	}

	private clearStore(){
		for(let i:number=0;i<this.store_arr.length;i++){
			let item = this.store_arr[i];
			item.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickStoreItem,this);
		}
		this.gp_store.removeChildren();
		this.store_arr = [];
		this.crtStoreItem = null;
	}

	private restart(){
		GameLogic.getInstance().openStart();
	}

	private clear() {
		this.clearEvent();
		this.clearMarket();
		this.clearStore();


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