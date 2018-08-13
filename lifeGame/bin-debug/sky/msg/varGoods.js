var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var varGoods = (function () {
    function varGoods() {
        this.dwID = 0;
        // required unumber32 dwPrice = 3;
        this.dwPrice = 0;
        // optional unumber32 dwNum = 4;
        this.dwNum = 0;
    }
    return varGoods;
}());
__reflect(varGoods.prototype, "varGoods");
//# sourceMappingURL=varGoods.js.map