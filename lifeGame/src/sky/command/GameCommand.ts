class GameCommand extends egret.EventDispatcher {
	public constructor() {
		super();
	}

	private static _instance: GameCommand;
	public static getInstance(): GameCommand {
		if (this._instance == null) {
			this._instance = new GameCommand();
		}
		return this._instance;
	}


	/**-------------------------------------------------- 服务器发送 -------------------------------------------------------- */

	public sendData(b:boolean=true) {
		//利息计算
		if(b){
			DataBase.debt = Math.floor(DataBase.debt * 1.1);
			DataBase.deposit = Math.floor(DataBase.deposit * 1.04);
		}
		let msg = this.getData();
		GameLogic.getInstance().gameui.initData(msg);
	}

	public sendMarket(evt:boolean) {
		DataBase.events = [];
		DataBase.marketGoods = [];

		let msg:msgGoodsBuyRsp = this.getMarket(evt);
		DataBase.marketGoods = msg.goods;
		GameLogic.getInstance().gameui.initMarket(msg);
	}

	//购买柜子
	public sendStore() {
		let msg = new msgGoodsStoreRsp();
		msg.goods = DataBase.storeGoods;
		GameLogic.getInstance().gameui.initStore(msg);
	}

	public sendBuy() {

	}

	public sendSell() {

	}

	/**还债 */
	public sendDebt() {

	}

	/**存款/取款 */
	public sendDeposit() {

	}

	public sendEvent() {
		this.dealOtherEvent();
		let arr = DataBase.events;
		for(let i:number=0;i<arr.length;i++){
			GameLogic.getInstance().gameui.eventAppear(arr[i]);
		}
	}

	public sendError(i:number){
		GameLogic.getInstance().gameui.errorRsp(i);
	}

	public sendOver() {
		DataBase.gameState = 0;
		
		//结算
		DataBase.debt = Math.floor(DataBase.debt * 1.1);
		DataBase.deposit = Math.floor(DataBase.deposit * 1.04);

		

		GameLogic.getInstance().gameui.over();
	}



	/**----------------------------------------------- 数据获得 --------------------------------------------------------------------- */

	public getData(): msgLifeDataRsp {
		let msg = new msgLifeDataRsp();
		msg.dwMoney = DataBase.money;
		msg.dwDebt = DataBase.debt;
		msg.dwDeposit = DataBase.deposit;
		msg.dwPow = DataBase.pow;
		msg.dwTimes = DataBase.times;
		msg.dwMaxStoreNum = DataBase.maxStoreNum;
		msg.dwFame = DataBase.fame;

		return msg;
	}

	private bases: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	public getMarket(evt:boolean): msgGoodsBuyRsp {
		let msg = new msgGoodsBuyRsp();
		msg.goods = [];
		let len = 4 + Math.floor(Math.random() * 6);
		let arr = this.bases.slice();
		let lll = DataBase.gamePackage < 2 ? arr.length : arr.length - 1;
		let goodIds = [];
		for (let i: number = 0; i < len; i++) {
			let i = Math.floor(Math.random() * lll);
			goodIds.push(arr[i]);
			arr.splice(i, 1);
		}
		goodIds.sort(this.sortfun);
		// console.log("开始随机价格");
		
		for (let i: number = 0; i < goodIds.length; i++) {
			let good = new varGoods();
			let id = goodIds[i];
			let o = GameLogic.getInstance().goods[id];
			if (o == null) {
				continue;
			}
			good.dwID = id;
			good.strName = o['name'];
			good.dwPrice = this.getPrice(o,evt);
			good.dwNum = 0;
			msg.goods.push(good);
		}

		return msg;
	}

	/**其他事件 */
	private dealOtherEvent(){
		let b = Math.random() < 0.2;
		if(b){
			let a = Math.floor(Math.random() * 4) + 1;
			let b = Math.random() < 0.5 ? 1 : 2;
			let c = Math.floor(Math.random() * 3) + 1;
			let key = "evt" + a + b + c;
			let str = GameLogic.getInstance().goods[key];
			if(str != null){
				DataBase.events.push(str);
			}
		}
	}

	private diss1:number[] = [0.2,5,10];
	private getRandom1():number{
		let r = Math.random();
		if(r < 0.1){
			let i = Math.floor(Math.random() * 3);
			return this.diss1[i];
		}
		else{
			return 1;
		}
	}

	//事件概率
	private diss2:number[] = [0.1,0.2,5,10];
	private getRandom2():number{
		let i = Math.floor(Math.random() * 4);
		return this.diss2[i];
	}
	
	/**浮动区间	0.2,3,5,10
	 * 			
	 */
	private getPrice(o:Object,evt:boolean): number {
		//上下浮动 0.2~10
		let n = o['price'];
		let r1 = this.getRandom1();
		let v = Math.floor(n * r1);
		// console.log(o['name'],"正常价格：",n,"范围浮动随机：",r1,"实际价格：",v);
		
		let b2 = Math.random() < 0.5;
		let v2 = Math.floor(v * Math.random() * 0.2);
		v = b2 ? v + v2 : v - v2;
		// console.log(o['name'],"正常价格：",n,"上下浮动随机0.2：",v);
		if (evt) {
			//出现事件概率 0.1
			let b3 = Math.random() < 0.1;
			if (b3) {
				//事件翻倍数随机
				let r3 = this.getRandom2();
				v = Math.floor(v * r3);
				// console.log(o['name'],"正常价格：",n,"事件浮动随机：",r3,"实际价格：",v);
				//记录事件
				let r4 = Math.floor(Math.random() * 3) + 1;
				let evt = 'evt' + (r3 < 1 ? 0 : 1) + r4;
				DataBase.events.push(o[evt]);
			}
		}

		return v;
	}
	private sortfun(a: number, b: number): number {
		return a < b ? -1 : 1;
	}

	private getPriceInMarket(id:number):number{
		let arr = DataBase.marketGoods;
		for(let i:number=0;i<arr.length;i++){
			let good = arr[i];
			if(id == good.dwID){
				return good.dwPrice;
			}
		}
		return null;
	}


	/**-------------------------------------------- 客户端发送  ------------------------------------------------------------------------ */

	public selectPackage(i: number) {
		DataBase.gamePackage = i;
	}

	/**根据type 刷数据 */
	public startGame() {
		let o = GameLogic.getInstance().data["config" + DataBase.gamePackage];
		DataBase.times = 1;
		DataBase.money = o['money'];//new Int64(o['money'], 0);
		DataBase.debt = o['debt'];
		DataBase.deposit = 0;//new Int64(0, 0);
		DataBase.pow = o['pow'];
		DataBase.maxStoreNum = 100;
		DataBase.fame = o['fame'];

		DataBase.gameState = 1;
		DataBase.storeGoods = [];

		this.sendData(false);
		this.sendMarket(false);
	}

	/**过一天 */
	public passOneDay() {
		DataBase.times ++;
		if(DataBase.times >= 40){
			this.sendOver();
			return;
		}
		this.sendData(true);
		this.sendMarket(true);
		this.sendEvent();
	}

	public buyGoods(id:number,num:number){
		if(num == 0){
			this.sendError(ERROR.BUY_ZERO);
			return;
		}
		let arr = DataBase.marketGoods;
		for(let i:number=0;i<arr.length;i++){
			let good = arr[i];
			if(good.dwID == id){
				let n = good.dwPrice * num;
				if(n > DataBase.money){
					this.sendError(ERROR.MONEY_NOT_ENOUGH);
				}
				else{
					let arr1 = DataBase.storeGoods;
					let total = 0;
					let index;
					for(let j:number=0;j<arr1.length;j++){
						let good1 = arr1[j];
						if(good1.dwID == id){
							index = j;
						}
						total += good1.dwNum;
					}
					if(total + num > DataBase.maxStoreNum){//柜子不够
						this.sendError(ERROR.STORE_NOT_ENOUGH);
					}
					else{
						DataBase.money -= n;
						let g = arr1[index];
						if(g == null){
							g = new varGoods();
							g.dwID = id;
							g.dwPrice = good.dwPrice;
							g.dwNum = num;
							g.strName = good.strName;
							arr1.push(g);
						}
						else{
							let nn = g.dwNum + n;
							let p = Math.floor((g.dwPrice * g.dwNum + good.dwPrice * n) / nn);
							g.dwNum = nn;
							g.dwPrice = p;
							arr1[index] = g;
						}
						
						this.sendData();
						this.sendStore();
					}
				}
				
				break;
			}
		}
	}

	public sellGoods(id:number,num:number){
		if(num == 0){
			this.sendError(ERROR.SELL_ZERO);
			return;
		}
		let marketprice = this.getPriceInMarket(id);
		if(marketprice == null){
			this.sendError(ERROR.MARKET_NO_GOOD);
			return;
		}
		let arr = DataBase.storeGoods;
		for(let i:number=0;i<arr.length;i++){
			let good = arr[i];
			if(good.dwID == id){
				DataBase.money += marketprice * num;
				good.dwNum -= num;
				if(good.dwNum <= 0){
					DataBase.storeGoods.splice(i,1);
				}
				this.sendData();
				this.sendStore();
				break;
			}
		}
	}
}