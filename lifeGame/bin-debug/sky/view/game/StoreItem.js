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
var StoreItem = (function (_super) {
    __extends(StoreItem, _super);
    function StoreItem(o) {
        var _this = _super.call(this) || this;
        _this.good = o;
        _this.skinName = "StoreItemSkin";
        return _this;
    }
    StoreItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.update();
    };
    /**贵的显示箭头 */
    StoreItem.prototype.upState = function (b) {
        this.img_up.visible = b;
    };
    StoreItem.prototype.updateGood = function (o) {
        this.good = o;
        this.update();
    };
    StoreItem.prototype.update = function () {
        this.lbl_name.text = this.good.strName;
        this.lbl_price.text = this.good.dwPrice + "";
        this.lbl_num.text = this.good.dwNum + "";
    };
    Object.defineProperty(StoreItem.prototype, "select", {
        get: function () {
            return this._select;
        },
        set: function (b) {
            this._select = b;
            this.rect_bg.visible = b;
        },
        enumerable: true,
        configurable: true
    });
    StoreItem.prototype.clear = function () {
        this.good = null;
    };
    return StoreItem;
}(eui.Component));
__reflect(StoreItem.prototype, "StoreItem");
//# sourceMappingURL=StoreItem.js.map