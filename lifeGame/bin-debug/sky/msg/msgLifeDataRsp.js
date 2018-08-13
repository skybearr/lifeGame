var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var msgLifeDataRsp = (function () {
    function msgLifeDataRsp() {
        /**体力 */
        this.dwPow = 0;
        /**欠债 */
        this.dwDebt = 0;
        /**当前天数 */
        this.dwTimes = 0;
        /**房屋大小 */
        this.dwMaxStoreNum = 0;
        /**名声 */
        this.dwFame = 0;
    }
    return msgLifeDataRsp;
}());
__reflect(msgLifeDataRsp.prototype, "msgLifeDataRsp");
//# sourceMappingURL=msgLifeDataRsp.js.map