class GameCommand extends egret.EventDispatcher{
	public constructor() {
		super();
	}

	private static _instance:GameCommand;
	public static getInstance():GameCommand{
		if(this._instance == null){
			this._instance = new GameCommand();
		}
		return this._instance;
	}


	/**-------------------------------------------------- 服务器发送 -------------------------------------------------------- */
	
	public sendData(){
		GameLogic.getInstance().gameui.initData(this.getData());
	}

	public sendMarket(){
		GameLogic.getInstance().gameui.initMarket(this.getMarket());
	}

	public sendStore(){

	}

	public sendBuy(){

	}

	public sendSell(){

	}

	/**还债 */
	public sendDebt(){

	}

	/**存款/取款 */
	public sendDeposit(){

	}

	public sendEvent(){

	}

	public sendOver(){

	}



	/**----------------------------------------------- 数据获得 --------------------------------------------------------------------- */

	public getData():msgLifeDataRsp{
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

	public getMarket():msgGoodsBuyRsp{
		let msg = new msgGoodsBuyRsp();
		msg.goods = [];
		let len = 4 + Math.floor(Math.random() * 6);
		

		return msg;
	}


	/**-------------------------------------------- 客户端发送  ------------------------------------------------------------------------ */

	public selectPackage(i:number){
		DataBase.gamePackage = i;
	}
	
	/**根据type 刷数据 */
	public startGame(){
		let o = GameLogic.getInstance().data["config"+DataBase.gamePackage];
		DataBase.times = 1;
		DataBase.money = new Int64(o['money'],0);
		DataBase.debt = o['debt'];
		DataBase.deposit = new Int64(0,0);
		DataBase.pow = o['pow'];
		DataBase.maxStoreNum = 100;
		DataBase.fame = o['fame'];

		DataBase.gameState = true;


		this.sendData();
		this.sendMarket();
	}

	/**过一天 */
	public passOneDay(){

	}
}