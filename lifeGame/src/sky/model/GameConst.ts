class GameConst {
	public constructor() {
	}

	/**web测试 0微信  1web本地 */
	public static web:number = 1;

	public static version:string = "201808181130";

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
	RELIVE = 1,

}