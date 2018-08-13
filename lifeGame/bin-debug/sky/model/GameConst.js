var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConst = (function () {
    function GameConst() {
    }
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
var ERROR;
(function (ERROR) {
    ERROR[ERROR["MONEY_NOT_ENOUGH"] = 0] = "MONEY_NOT_ENOUGH";
    ERROR[ERROR["STORE_NOT_ENOUGH"] = 1] = "STORE_NOT_ENOUGH";
    ERROR[ERROR["BUY_ZERO"] = 2] = "BUY_ZERO";
    ERROR[ERROR["SELL_ZERO"] = 3] = "SELL_ZERO";
    ERROR[ERROR["MARKET_NO_GOOD"] = 4] = "MARKET_NO_GOOD";
    ERROR[ERROR["MAX_STORE_NUM"] = 5] = "MAX_STORE_NUM";
    ERROR[ERROR["NEED_LICIENCE"] = 6] = "NEED_LICIENCE";
})(ERROR || (ERROR = {}));
var ACHIVE;
(function (ACHIVE) {
    ACHIVE[ACHIVE["RELIVE"] = 1] = "RELIVE";
})(ACHIVE || (ACHIVE = {}));
//# sourceMappingURL=GameConst.js.map