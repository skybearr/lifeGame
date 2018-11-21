var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConst = (function () {
    function GameConst() {
    }
    /**web测试 0微信  1web本地 */
    GameConst.web = 1;
    GameConst.version = "201808181130";
    GameConst.coinstr = ["", "现金", "存款", "债务", "体力", "声望"];
    GameConst.rewardAdId = "adunit-24c9a10622c29f9e";
    GameConst.bannerAdId = "adunit-648e17f5764c7979";
    /** 缓存在本地的key */
    GameConst.localdata_key_reward_cd = "rewardadcd";
    GameConst.rewardCD = 180;
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
/** 分享类型 */
var SHARETYPE;
(function (SHARETYPE) {
    SHARETYPE[SHARETYPE["ACTIVE"] = 1] = "ACTIVE";
    SHARETYPE[SHARETYPE["SHOWOFF"] = 2] = "SHOWOFF";
    SHARETYPE[SHARETYPE["CRTSCORE"] = 3] = "CRTSCORE";
    SHARETYPE[SHARETYPE["PASSIVE"] = 4] = "PASSIVE";
    SHARETYPE[SHARETYPE["GROUPRANK"] = 5] = "GROUPRANK";
    SHARETYPE[SHARETYPE["SCREENSHOT"] = 6] = "SCREENSHOT";
    SHARETYPE[SHARETYPE["INVITE"] = 7] = "INVITE";
    SHARETYPE[SHARETYPE["INVITE_DAILY"] = 8] = "INVITE_DAILY";
})(SHARETYPE || (SHARETYPE = {}));
var ERROR;
(function (ERROR) {
    ERROR[ERROR["MONEY_NOT_ENOUGH"] = 1] = "MONEY_NOT_ENOUGH";
    ERROR[ERROR["STORE_NOT_ENOUGH"] = 2] = "STORE_NOT_ENOUGH";
    ERROR[ERROR["BUY_ZERO"] = 3] = "BUY_ZERO";
    ERROR[ERROR["SELL_ZERO"] = 4] = "SELL_ZERO";
    ERROR[ERROR["MARKET_NO_GOOD"] = 5] = "MARKET_NO_GOOD";
    ERROR[ERROR["MAX_STORE_NUM"] = 6] = "MAX_STORE_NUM";
    ERROR[ERROR["NEED_LICIENCE"] = 7] = "NEED_LICIENCE";
})(ERROR || (ERROR = {}));
var ACHIVE;
(function (ACHIVE) {
    ACHIVE[ACHIVE["ARIVED"] = 1] = "ARIVED";
    ACHIVE[ACHIVE["BUY"] = 2] = "BUY";
    ACHIVE[ACHIVE["TITLE"] = 3] = "TITLE";
})(ACHIVE || (ACHIVE = {}));
var COINTYPE;
(function (COINTYPE) {
    COINTYPE[COINTYPE["MONEY"] = 1] = "MONEY";
    COINTYPE[COINTYPE["DEPOSIT"] = 2] = "DEPOSIT";
    COINTYPE[COINTYPE["DEPT"] = 3] = "DEPT";
    COINTYPE[COINTYPE["POW"] = 4] = "POW";
    COINTYPE[COINTYPE["FAME"] = 5] = "FAME";
})(COINTYPE || (COINTYPE = {}));
var WATCHTYPE;
(function (WATCHTYPE) {
    WATCHTYPE[WATCHTYPE["NONE"] = 0] = "NONE";
    WATCHTYPE[WATCHTYPE["ADDMONEY"] = 1] = "ADDMONEY";
})(WATCHTYPE || (WATCHTYPE = {}));
//# sourceMappingURL=GameConst.js.map