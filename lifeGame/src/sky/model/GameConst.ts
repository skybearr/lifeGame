class GameConst {
	public constructor() {
	}

	/**web测试 0微信  1web本地 */
	public static web:number = 1;

	public static version:string = "201808181130";

	public static coinstr:string[] = ["","现金","存款","债务","体力","声望"];

}
enum ERROR {
	MONEY_NOT_ENOUGH = 1,
	STORE_NOT_ENOUGH = 2,
	BUY_ZERO = 3,
	SELL_ZERO = 4,
	MARKET_NO_GOOD = 5,
	MAX_STORE_NUM = 6,
	NEED_LICIENCE = 7,
}

enum ACHIVE{
	 ARIVED = 1,//达成类
	 BUY = 2,//购买类，用钱购买
	 TITLE = 3,//称号
}

enum COINTYPE{
	 MONEY = 1,//现金
	 DEPOSIT = 2,//存款
	 DEPT = 3,//债务
	 POW = 4,//体力
	 FAME = 5,//声望

}
