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

	public sendData(b: boolean = false) {
		//利息计算
		if (b) {
			DataBase.debt = Math.floor(DataBase.debt * 1.15);
			DataBase.deposit = Math.floor(DataBase.deposit * 1.04);
		}
		let msg = this.getData();
		GameLogic.getInstance().gameui.initData(msg);
	}

	public sendMarket(evt: boolean) {
		DataBase.events = [];
		DataBase.marketGoods = [];

		let msg: msgGoodsBuyRsp = this.getMarket(evt);
		DataBase.marketGoods = msg.goods;
		GameLogic.getInstance().gameui.initMarket(msg);
	}

	//购买柜子
	public sendStore() {
		let msg = new msgGoodsStoreRsp();
		msg.goods = DataBase.storeGoods;
		GameLogic.getInstance().gameui.initStore(msg);
	}

	public sendEvent() {
		this.dealOtherEvent();
		let arr = DataBase.events;
		for (let i: number = 0; i < arr.length; i++) {
			GameLogic.getInstance().gameui.eventAppear(arr[i]);
		}
		DataBase.events = [];
	}

	public sendError(i: number) {
		GameLogic.getInstance().gameui.errorRsp(i);
	}

	public sendOver(t:number) {
		DataBase.gameState = 0;
		
		if(t == 0){//时间到
			//结算
			DataBase.debt = Math.floor(DataBase.debt * 1.15);
			DataBase.deposit = Math.floor(DataBase.deposit * 1.04);
			DataBase.money = DataBase.money + DataBase.deposit - DataBase.debt + this.getStorePrice();

			DataBase.debt = 0;
			DataBase.deposit = 0;
		}
		else if(t == 1){//体力为0

		}
		this.sendData();
		GameLogic.getInstance().gameui.over();
	}



	/**----------------------------------------------- 数据获得 --------------------------------------------------------------------- */

	private getStorePrice():number{
		let p:number = 0;
		for(let i:number=0;i<DataBase.storeGoods.length;i++){
			let good = DataBase.storeGoods[i];
			p += good.dwPrice * good.dwNum;
		}
		return p;
	}

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
	public getMarket(evt: boolean): msgGoodsBuyRsp {
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
			good.dwPrice = this.getPrice(o, evt);
			good.dwNum = 0;
			msg.goods.push(good);
		}

		return msg;
	}

	/**其他事件 */
	private dealOtherEvent() {
		let b = Math.random() < 0.2;
		if (b) {
			let a = Math.floor(Math.random() * 4) + 1;
			let b = Math.random() < 0.5 ? 1 : 2;
			let c = Math.floor(Math.random() * 3) + 1;
			this.addEvent(a, b, c);
		}
	}

	private addEvent(a, b, c) {
		let id = a * 100 + b * 10 + c;
		let o = GameLogic.getInstance().goods["evt" + id];
		if (o == null) {
			return;
		}
		let isadd = b == 2;
		let value = o['value'];

		if (a < 5) {
			switch (a) {
				case 1://money
					if (value <= 1) {
						value = Math.floor(DataBase.money * value);
					}
					else {
						value = Math.floor(Math.random() * value / 5);
					}
					DataBase.money = DataBase.money + (isadd ? value : -value);
					DataBase.money = DataBase.money <= 0 ? 0 : DataBase.money;
					break;
				case 2://deposit
					if (value <= 1) {
						value = Math.floor(DataBase.money * value);
					}
					else {
						value = Math.floor(Math.random() * value / 5);
					}
					DataBase.deposit = DataBase.deposit + (isadd ? value : -value);
					DataBase.deposit = DataBase.deposit <= 0 ? 0 : DataBase.deposit;
					break;
				case 3://pow
					DataBase.pow = DataBase.pow + (isadd ? value : -value);
					DataBase.pow = DataBase.pow <= 0 ? 0 : DataBase.pow;
					break;
				case 4://fame
					DataBase.fame = DataBase.fame + (isadd ? value : -value);
					DataBase.fame = DataBase.fame <= 0 ? 0 : DataBase.fame;
					break;
			}
		}
		if(typeof(o) == "string"){//其他事件
			DataBase.events.push(StringUtil.getSwfLangStr(o));
		}
		else{//商品事件
			DataBase.events.push(StringUtil.getSwfLangStrVar(o['str'], [value]));
		}
	}

	private diss1: number[] = [0.2, 5, 10];
	private getRandom1(): number {
		let r = Math.random();
		if (r < 0.1) {
			let i = Math.floor(Math.random() * 3);
			return this.diss1[i];
		}
		else {
			return 1;
		}
	}

	//事件概率
	private diss2: number[] = [0.1, 0.2, 5, 10];
	private getRandom2(): number {
		let i = Math.floor(Math.random() * 4);
		return this.diss2[i];
	}



	/**浮动区间	0.2,3,5,10
	 * 			
	 */
	private getPrice(o: Object, evt: boolean): number {
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

	private saveAchieve(){
		if(DataBase.money > DataBase.achives[0]){
			DataBase.achives[0] = DataBase.money;
		}
		if(DataBase.deposit > DataBase.achives[1]){
			DataBase.achives[1] = DataBase.deposit;
		}
		if(DataBase.debt > DataBase.achives[2]){
			DataBase.achives[2] = DataBase.debt;
		}
		if(DataBase.pow < DataBase.achives[3]){
			DataBase.achives[3] = DataBase.pow;
		}
		if(DataBase.fame < DataBase.achives[4]){
			DataBase.achives[4] = DataBase.fame;
		}
		if(DataBase.fame > DataBase.achives[5]){
			DataBase.achives[5] = DataBase.fame;
		}
	}

	private getPriceInMarket(id: number): number {
		let arr = DataBase.marketGoods;
		for (let i: number = 0; i < arr.length; i++) {
			let good = arr[i];
			if (id == good.dwID) {
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
		
		DataBase.marketGoods = [];
		DataBase.storeGoods = [];
		DataBase.events = [];
		DataBase.achives = [0,0,0,0,0];

		DataBase.gameState = 1;

		this.sendData();
		this.sendMarket(false);
	}

	/**过一天 */
	public passOneDay() {
		if (DataBase.gameState == 0) {
			return;
		}
		DataBase.times++;
		if (DataBase.times >= 40) {
			this.sendOver(0);
			return;
		}
		this.sendMarket(true);
		this.sendEvent();
		this.sendData(true);
		if (DataBase.pow <= 0) {
			this.sendOver(1);
			return;
		}
		this.saveAchieve();
	}

	public buyGoods(id: number, num: number) {
		if (num == 0) {
			this.sendError(ERROR.BUY_ZERO);
			return;
		}
		if(id == 9 && DataBase.gamePackage != 3){
			this.sendError(ERROR.NEED_LICIENCE);
			return;
		}
		let arr = DataBase.marketGoods;
		for (let i: number = 0; i < arr.length; i++) {
			let good = arr[i];
			if (good.dwID == id) {
				let n = good.dwPrice * num;
				if (n > DataBase.money) {
					this.sendError(ERROR.MONEY_NOT_ENOUGH);
					return;
				}
				else {
					let arr1 = DataBase.storeGoods;
					let total = 0;
					let index;
					for (let j: number = 0; j < arr1.length; j++) {
						let good1 = arr1[j];
						if (good1.dwID == id) {
							index = j;
						}
						total += good1.dwNum;
					}
					if (total + num > DataBase.maxStoreNum) {//柜子不够
						this.sendError(ERROR.STORE_NOT_ENOUGH);
						return;
					}
					else {
						DataBase.money -= n;
						let g = arr1[index];
						if (g == null) {
							g = new varGoods();
							g.dwID = id;
							g.dwPrice = good.dwPrice;
							g.dwNum = num;
							g.strName = good.strName;
							arr1.push(g);
						}
						else {
							let nn = g.dwNum + num;
							let p = Math.floor((g.dwPrice * g.dwNum + good.dwPrice * num) / nn);
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

	public sellGoods(id: number, num: number) {
		if (num == 0) {
			this.sendError(ERROR.SELL_ZERO);
			return;
		}
		let marketprice = this.getPriceInMarket(id);
		if (marketprice == null) {
			this.sendError(ERROR.MARKET_NO_GOOD);
			return;
		}
		let arr = DataBase.storeGoods;
		for (let i: number = 0; i < arr.length; i++) {
			let good = arr[i];
			if (good.dwID == id) {
				DataBase.money += marketprice * num;
				good.dwNum -= num;
				if (good.dwNum <= 0) {
					DataBase.storeGoods.splice(i, 1);
				}
				this.sendData();
				this.sendStore();
				break;
			}
		}
	}

	public cun(num: number) {
		if (num > 0 && num <= DataBase.money) {
			DataBase.deposit += num;
			DataBase.money -= num;
			this.sendData();
		}
	}

	public qu(num: number) {
		if (num > 0 && num <= DataBase.deposit) {
			DataBase.deposit -= num;
			DataBase.money += num;
			this.sendData();
		}
	}

	public huan(num: number) {
		if (num > 0 && num <= DataBase.money && num <= DataBase.debt) {
			DataBase.debt -= num;
			DataBase.money -= num;
			this.sendData();
		}
	}

	public treat(n: number) {
		if (n > 0 && n < 100) {
			if (n + DataBase.pow > 100) {
				n = 100 - DataBase.pow;
			}
			let needmoney = n * GameLogic.getInstance().data['hospital'];
			if (needmoney >= DataBase.money) {
				this.sendError(ERROR.MONEY_NOT_ENOUGH);
				return;
			}
			DataBase.money -= needmoney;
			DataBase.pow += n;
			this.sendData();
		}
	}

	public charity(n:number){
		if(n > DataBase.money){
			this.sendError(ERROR.MONEY_NOT_ENOUGH);
			return;
		}
		let charity = GameLogic.getInstance().data['charity'];
		let c:number;
		if(n < charity){
			
			let r = Math.random() * 100;
			if(r < 2){
				DataBase.fame += 3;
				c = 0;
			}
			else{
				c = 1;
			}
		}
		else{
			let i = Math.floor(n / charity);
			DataBase.fame += i;
			c = i < 10 ? 2 : (i < 100 ? 3 : 4);
		}
		this.addEvent(5,1,c);
		DataBase.money -= n;
		this.sendData();
		this.sendEvent();
	}

	public buyStore(price: number) {
		let max = GameLogic.getInstance().data['maxstore'];
		if (DataBase.maxStoreNum >= max) {
			this.sendError(ERROR.MAX_STORE_NUM);
			return;
		}
		let n = GameLogic.getInstance().data['storeprice'];
		if (price < n) {
			console.log("价格低于标准值，请勿作弊");

			return;
		}
		if (DataBase.money < price) {
			this.sendError(ERROR.MONEY_NOT_ENOUGH);
			return;
		}
		else {
			DataBase.maxStoreNum += 10;
			if (DataBase.maxStoreNum >= max) {
				DataBase.maxStoreNum = max;
			}
			let r = Math.floor(Math.random() * n / 5);
			DataBase.money -= (price + r);
			this.sendData();
			this.addEvent(5, 0, 0);
			this.sendEvent();
		}
	}
}