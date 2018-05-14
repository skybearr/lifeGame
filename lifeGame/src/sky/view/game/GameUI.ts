class GameUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "GameSkin";
	}

	private gp_market: eui.Group;
	private gp_store: eui.Group;
	private gp_over: eui.Group;

	private lbl_day: eui.Label;
	private lbl_store: eui.Label;
	/**现金 */
	private lbl_1: eui.Label;
	/**存款 */
	private lbl_2: eui.Label;
	/**欠债 */
	private lbl_3: eui.Label;
	/**体力 */
	private lbl_4: eui.Label;
	/**声望 */
	private lbl_5: eui.Label;
	/**未知 */
	private lbl_6: eui.Label;
	private rect_evt: eui.Rect;
	private cb_0:eui.CheckBox;

	private crtPop: number;

	private market_arr: MarketItem[];
	private store_arr: StoreItem[];

	private gamestate: number;
	private max_num: number;
	private data: msgLifeDataRsp;
	private leftStore: number;

	protected childrenCreated() {
		super.childrenCreated();

		GameLogic.getInstance().gameui = this;
		this.market_arr = [];
		this.store_arr = [];
		this.eventlist = [];

		this.initView();
		this.initEvent();

		GameCommand.getInstance().startGame();
	}

	private eventlist: string[];
	private eventpoping: boolean;
	/**出现事件 */
	public eventAppear(str: string) {
		if(GameLogic.getInstance().cbSelected){
			return;
		}
		if (this.eventpoping) {
			this.eventlist.push(str);
			return;
		}
		this.popEvent(str);
	}
	private eventNext() {
		this.eventpoping = false;
		if (this.eventlist.length > 0) {
			let str = this.eventlist.shift();
			this.popEvent(str);
		}
		else {
			this.pop(0);
		}
	}
	private popEvent(str: string) {
		this.eventpoping = true;
		this.pop(11);
		this['lbl_event_1'].text = str;
	}

	/**刷新基本数据*/
	public initData(msg: msgLifeDataRsp) {
		this.data = msg;
		this.setLeft();
		this.lbl_1.text = this.data.dwMoney.toString();
		this.lbl_2.text = this.data.dwDeposit.toString();
		this.lbl_3.text = this.data.dwDebt.toString();
		this.lbl_4.text = this.data.dwPow.toString();
		this.lbl_5.text = this.data.dwFame.toString();
		let maxday = GameLogic.getInstance().data['maxday'];
		this.lbl_day.text = (maxday - this.data.dwTimes) + "/" + maxday + "天";
	}

	private setLeft() {
		let n = this.getStoreNum();
		this.leftStore = this.data.dwMaxStoreNum - n;
		this.lbl_store.text = n + "/" + this.data.dwMaxStoreNum;
	}

	private getStoreNum(): number {
		let n: number = 0;
		for (let i: number = 0; i < this.store_arr.length; i++) {
			let item = this.store_arr[i];
			n += item.good.dwNum;
		}
		return n;
	}

	/**刷新商店*/
	public initMarket(msg: msgGoodsBuyRsp) {
		this.clearMarket();

		for (let i: number = 0; i < msg.goods.length; i++) {
			let item = new MarketItem(msg.goods[i]);
			item.y = (item.height + 2) * i;
			item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickMarketItem, this);
			this.market_arr.push(item);
			this.gp_market.addChild(item);
		}
	}
	private crtMarketItem: MarketItem;
	private clickMarketItem(e: egret.TouchEvent) {
		let item = e.currentTarget as MarketItem;
		if (this.crtMarketItem != null) {
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
	public initStore(msg: msgGoodsStoreRsp): void {
		this.clearStore();
		for (let i: number = 0; i < msg.goods.length; i++) {
			let item = new StoreItem(msg.goods[i]);
			item.y = (item.height + 2) * i;
			item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStoreItem, this);
			this.store_arr.push(item);
			this.gp_store.addChild(item);
		}
		this.setLeft();
	}

	private crtStoreItem: StoreItem;
	private clickStoreItem(e: egret.TouchEvent) {
		let item = e.currentTarget as StoreItem;
		if (this.crtStoreItem != null) {
			this.crtStoreItem.select = false;
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
		this['gp_over'].visible = true;
		let str:string = "";

		if (this.data.dwPow <= 0) {
			str += StringUtil.getSwfLangStr("s20") + "\n";
			this['btn_27'].visible = false;
		}
		else {
			str += StringUtil.getSwfLangStr("s11") + "\n";
			str += StringUtil.getSwfLangStrVarByID("s21", [DataBase.money + ""]) + "\n";
			str += StringUtil.getSwfLangStr("s12") + "\n";
			for (let i: number = 0; i < 5; i++) {
				str += StringUtil.getSwfLangStrVarByID("s1" + (3 + i), [DataBase.achives[i] + ""]) + "\n";
			}
			str += StringUtil.getSwfLangStr("s19") + "\n";
			str += StringUtil.getSwfLangStr("s50") + "\n";
			this['btn_27'].visible = true;
		}
		
		this['lbl_over_1'].text = str;
	}

	public errorRsp(i: number) {
		this.eventAppear(StringUtil.getSwfLangStr("e" + i));
	}

	private initView() {
		this.cb_0.selected = GameLogic.getInstance().cbSelected;
	}

	private initEvent() {
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
		for (let i: number = 0; i <= 27; i++) {
			let btn: eui.Button = this['btn_' + i];
			btn.name = i + "";
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}

		for (let i: number = 0; i <= 7; i++) {
			let lbl: eui.Label = this['lbl_num' + i];
			lbl.name = 'lbl' + i;
			lbl.addEventListener(egret.Event.CHANGE, this.txtChange, this);
			lbl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.txtClick, this);
		}
		this.cb_0.addEventListener(egret.Event.CHANGE,this.cbChange,this);
		this.rect_evt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRect, this);
	}

	private cbChange(){
		GameLogic.getInstance().cbSelected = this.cb_0.selected;
	}

	private clickRect(e: egret.TouchEvent) {
		this.eventNext();
	}

	private txtClick(e: egret.TouchEvent) {
		let lbl: eui.Label = e.currentTarget as eui.Label;
		let i = parseInt(lbl.name.slice(3));
		switch (i) {
			case 1://存款
				this.max_num = this.data.dwMoney;
				break;
			case 2://取款
				this.max_num = this.data.dwDeposit;
				break;
		}
	}

	private txtChange(e: egret.Event) {
		let lbl: eui.Label = e.currentTarget as eui.Label;
		let n = parseInt(lbl.text);
		if (n > this.max_num) {
			lbl.text = this.max_num + "";
		}
	}

	private clickBtn(e: egret.TouchEvent) {
		let i = parseInt(e.currentTarget.name);
		if (this.gamestate == 0) {
			if (i < 9 && i > 12 && i < 26) {
				return;
			}
		}
		switch (i) {
			case 0://捐款
				this.pop(0);
				GameCommand.getInstance().charity(parseInt(this['lbl_num0'].text));
				break;
			case 1:
			case 2:
			case 3:
				this.pop(0);
				GameCommand.getInstance().passOneDay();
				break;
			case 4://慈善
				this.pop(i);
				this.max_num = this.data.dwMoney;
				this['lbl_charity'].text = StringUtil.getSwfLangStr("s10");
				this['lbl_num0'].text = "0";
				break;
			case 5://银行
				this.pop(i);
				this['lbl_num1'].text = this.data.dwMoney + "";
				this['lbl_num2'].text = this.data.dwDeposit + "";
				break;
			case 6://医院
				this.pop(i);
				let n = 100 - this.data.dwPow;
				if (n <= 0) {
					this['lbl_hos_1'].text = StringUtil.getSwfLangStr("s6");
					this.max_num = 0;
				}
				else {
					this['lbl_hos_1'].text = StringUtil.getSwfLangStrVarByID("s7", [GameLogic.getInstance().data['hospital'] + ""]);
					this.max_num = n;
				}
				this['lbl_num3'].text = this.max_num + "";
				break;
			case 7://中介
				this.pop(i);
				let n7 = GameLogic.getInstance().data['maxstore'] - this.data.dwMaxStoreNum;
				if (n7 <= 0) {
					this['lbl_medi_1'].text = StringUtil.getSwfLangStr("s8");
				}
				else {
					let n70 = GameLogic.getInstance().data['storeprice'];
					let n71 = Math.floor(Math.random() * n70 / 5) + n70;
					this['lbl_medi_1'].text = StringUtil.getSwfLangStrVarByID("s9", [n71 + ""]);
				}
				break;
			case 8://邮局
				this.pop(i);
				let n8 = this.data.dwDebt;
				let n80 = this.data.dwMoney > n8 ? n8 : this.data.dwMoney;
				if (n8 <= 0) {//没有债务
					this['lbl_post_1'].text = StringUtil.getSwfLangStr("s10");
					this.max_num = 0;
				}
				else {
					this['lbl_post_1'].text = StringUtil.getSwfLangStr("s11");
					this.max_num = n80;
				}
				this['lbl_num5'].text = this.max_num + "";
				break;
			case 9://转发

				break;
			case 10://广告

				break;
			case 11://排行榜

				break;
			case 12://重新开始
			case 26:
				this.restart();
				break;
			case 13://存钱
				GameCommand.getInstance().cun(parseInt(this['lbl_num1'].text));
				this.pop(0);
				break;
			case 14://取钱
				GameCommand.getInstance().qu(parseInt(this['lbl_num2'].text));
				this.pop(0);
				break;
			case 15://治疗
				if (this.data.dwPow < 100) {
					GameCommand.getInstance().treat(100 - this.data.dwPow);
				}
				this.pop(0);
				break;
			case 17://买柜子
				let n17 = GameLogic.getInstance().data['storeprice'];
				n17 = Math.floor(Math.random() * n17 / 5) + n17;
				GameCommand.getInstance().buyStore(n17);
				this.pop(0);
				break;
			case 19://还债
				let n19 = parseInt(this['lbl_num5'].text);
				n19 = this.data.dwMoney < n19 ? this.data.dwMoney : n19;
				GameCommand.getInstance().huan(n19);
				this.pop(0);
				break;
			case 21://购买
				let n21 = parseInt(this['lbl_num6'].text);
				if (n21 > 0) {
					GameCommand.getInstance().buyGoods(this.crtMarketItem.good.dwID, n21);
				}
				this.pop(0);
				break;
			case 23://出售
				let n23 = parseInt(this['lbl_num7'].text);
				if (n23 > 0) {
					GameCommand.getInstance().sellGoods(this.crtStoreItem.good.dwID, n23);
				}
				this.pop(0);
				break;
			case 16://关闭
			case 18:
			case 20:
			case 22:
			case 24:
				this.pop(0);
				break;
			case 25:
				this.eventNext();
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
		if (i == 0) {
			this.eventpoping = false;
		}
		let gp = this['gp_' + i];
		if (gp != null) {
			gp.visible = true;
			this.crtPop = i;
		}
		else {
			this.crtPop = null;
		}
	}

	private clearMarket() {
		for (let i: number = 0; i < this.market_arr.length; i++) {
			let item = this.market_arr[i];
		}
		this.gp_market.removeChildren();
		this.market_arr = [];
		this.crtMarketItem = null;
	}

	private clearStore() {
		for (let i: number = 0; i < this.store_arr.length; i++) {
			let item = this.store_arr[i];
			item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStoreItem, this);
		}
		this.gp_store.removeChildren();
		this.store_arr = [];
		this.crtStoreItem = null;
	}

	private restart() {
		GameLogic.getInstance().openStart();
	}

	private clear() {
		this.clearEvent();
		this.clearMarket();
		this.clearStore();


		GameLogic.getInstance().gameui = null;
	}

	private clearEvent() {
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
		for (let i: number = 0; i <= 27; i++) {
			let btn: eui.Button = this['btn_' + i];
			btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
		}

		for (let i: number = 0; i <= 7; i++) {
			let lbl: eui.Label = this['lbl_num' + i];
			lbl.removeEventListener(egret.Event.CHANGE, this.txtChange, this);
			lbl.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.txtClick, this);
		}
		this.cb_0.removeEventListener(egret.Event.CHANGE,this.cbChange,this);
		this.rect_evt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRect, this);
	}
}