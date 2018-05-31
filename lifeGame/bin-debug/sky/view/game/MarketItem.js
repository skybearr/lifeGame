var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MarketItem = (function (_super) {
    __extends(MarketItem, _super);
    function MarketItem(o) {
        var _this = _super.call(this) || this;
        _this.good = o;
        _this.skinName = "MarketItemSkin";
        return _this;
    }
    MarketItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lbl_name.text = this.good.strName;
        this.lbl_price.text = this.good.dwPrice + "";
    };
    Object.defineProperty(MarketItem.prototype, "select", {
        get: function () {
            return this._select;
        },
        set: function (b) {
            this._select = b;
            this.rect_bg.fillAlpha = b ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    MarketItem.prototype.clear = function () {
        this.good = null;
    };
    return MarketItem;
}(eui.Component));
__reflect(MarketItem.prototype, "MarketItem");
