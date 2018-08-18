class GameConst {
	public constructor() {
	}

	/**web测试 0微信  1web本地 */
	public static web:number = 1;

	public static version:string = "201808181130";

}
enum ERROR {
	MONEY_NOT_ENOUGH,
	STORE_NOT_ENOUGH,
	BUY_ZERO,
	SELL_ZERO,
	MARKET_NO_GOOD,
	MAX_STORE_NUM,
	NEED_LICIENCE,
}

enum ACHIVE{
	RELIVE = 1,

}