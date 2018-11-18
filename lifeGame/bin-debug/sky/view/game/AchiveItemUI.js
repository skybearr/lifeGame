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
var AchiveItemUI = (function (_super) {
    __extends(AchiveItemUI, _super);
    function AchiveItemUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "AchieveItemSkin";
        return _this;
    }
    AchiveItemUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initView();
        this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuy, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    AchiveItemUI.prototype.initView = function () {
        var vo = this.data;
        if (vo == null) {
            return;
        }
        this.lbl_name.text = vo.content;
        this.lbl_have.text = (vo.type == 1 || vo.type == 3 ? "已达成" : "已拥有：") + vo.have;
        var needstr = "需要：";
        for (var i = 0; i < vo.need.length; i++) {
            var o = vo.need[i];
            needstr += GameConst.coinstr[o.id] + o.value + "  ";
        }
        this.lbl_need.text = needstr;
        this.btn_buy.label = vo.state == 0 ? "未达成" : (vo.state == 1 ? "已达成" : "购买");
        this.btn_buy.touchEnabled = vo.state == 2;
    };
    AchiveItemUI.prototype.dataChanged = function () {
        this.initView();
    };
    AchiveItemUI.prototype.clickBuy = function () {
        var vo = this.data;
        var arrives = 0;
        var coins = [DataBase.money, DataBase.deposit, DataBase.debt, DataBase.pow, DataBase.fame];
        for (var i = 0; i < vo.need.length; i++) {
            var o = vo.need[i];
            var index = parseInt(vo.id) - 1;
            if (coins[index] >= o.value) {
                arrives++;
            }
        }
        if (arrives == vo.need.length) {
            var type = vo.type;
            GameLogic.getInstance().saveAchieve(type, vo.id, 1);
            for (var i = 0; i < vo.need.length; i++) {
                var o = vo.need[i];
                if (o.id == COINTYPE.MONEY) {
                    DataBase.money -= o.value;
                }
            }
            this.data['have'] = vo.have + 1;
            this.lbl_have.text = "已拥有：" + vo.have;
        }
    };
    AchiveItemUI.prototype.clear = function () {
        this.btn_buy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuy, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    return AchiveItemUI;
}(eui.ItemRenderer));
__reflect(AchiveItemUI.prototype, "AchiveItemUI");
//# sourceMappingURL=AchiveItemUI.js.map