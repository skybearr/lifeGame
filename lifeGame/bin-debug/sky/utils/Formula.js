/**
 * 数值公式
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Formula = (function () {
    function Formula() {
    }
    /**每天结算----债务 */
    Formula.getDebt = function (old) {
        return Math.floor(old * 1.15);
    };
    /**每天结算----银行利息 */
    Formula.getDeposit = function (old) {
        return Math.floor(DataBase.deposit * 1.04);
    };
    /**每日其他事件几率 */
    Formula.getOtherEvent = function () {
        var o;
        var b = Math.random() < 0.1;
        if (b) {
            o = {};
            var a = Math.floor(Math.random() * 4) + 1;
            var b_1 = Math.random() < 0.5 ? 1 : 2;
            var c = Math.floor(Math.random() * 3) + 1;
            o['a'] = a;
            o['b'] = b_1;
            o['c'] = c;
        }
        return o;
    };
    /**market商品的价格第一次随机概率 ：上下限浮动概率 */
    Formula.getRandom1 = function () {
        var r = Math.random();
        if (r < 0.1) {
            var i = Math.floor(Math.random() * 3);
            return Formula.diss1[i];
        }
        else {
            return 1;
        }
    };
    /**market商品的价格第二次随机概率正负 ：后续价格比正常价格是否增加 */
    Formula.isAdd = function () {
        return Math.random() < 0.5;
    };
    /**market商品的价格第二次随机概率 ：上下浮动offset */
    Formula.getRandom2 = function () {
        return Math.random() * 0.2;
    };
    /**market商品的价格第三次次随机是否出现特殊事件 */
    Formula.apperEvent = function () {
        return Math.random() < 0.05;
    };
    /**market商品的价格第三次次随机出现特殊事件的翻倍数 */
    Formula.getRandom3 = function () {
        var i = Math.floor(Math.random() * 4);
        return Formula.diss2[i];
    };
    Formula.diss1 = [0.3, 3, 8];
    Formula.diss2 = [0.1, 0.2, 5, 10];
    return Formula;
}());
__reflect(Formula.prototype, "Formula");
