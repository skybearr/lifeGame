class GameConst {
	public constructor() {
	}

	/**web测试 0微信  1web本地 */
	public static web:number = 1;

	public static version:string = "201808181130";

	public static coinstr:string[] = ["","现金","存款","债务","体力","声望"];

	public static rewardAdId:string = "adunit-24c9a10622c29f9e";
	public static bannerAdId:string = "adunit-648e17f5764c7979";

}

/** 分享类型 */
	enum SHARETYPE{
		ACTIVE = 1,//主动分享
		SHOWOFF = 2,//炫耀
		CRTSCORE = 3,//当前分数
		PASSIVE = 4,//被动分享
		GROUPRANK = 5,//群排行
		SCREENSHOT = 6,//当前页截图
		INVITE = 7,//邀请好友，永久
		INVITE_DAILY = 8,//每日邀请
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

enum WATCHTYPE{
	NONE = 0,
	ADDMONEY = 1,//加钱
}
