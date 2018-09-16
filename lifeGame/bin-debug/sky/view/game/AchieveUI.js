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
var AchieveUI = (function (_super) {
    __extends(AchieveUI, _super);
    function AchieveUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "AchieveSkin";
        return _this;
    }
    AchieveUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.checkFit();
        this.initView();
        this.initEvent();
    };
    AchieveUI.prototype.checkFit = function () {
        this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
        this.btn_back.y = this.rect_bg.height - this.btn_back.height;
    };
    AchieveUI.prototype.initView = function () {
        this.list.itemRenderer = AchiveItemUI;
        this.arr_data = new eui.ArrayCollection();
        var obj = GameLogic.getInstance().achieves;
        /**1:[10,20,30]	2:[{10:1},{20:3}	3:[10,20]] */
        var arrives = GameLogic.getInstance().arrives;
        for (var id in obj) {
            var o = obj[id];
            var vo = new AchieveVO();
            vo.content = o.content;
            vo.type = o.type;
            var a1 = o.need.split(":");
            var a3 = [];
            for (var i = 0; i < a1.length; i++) {
                var a2 = a1[i].split("_");
                var oo = { id: parseInt(a2[0]), value: parseInt(a2[1]) };
                a3.push(oo);
            }
            vo.need = a3;
            //已达成数据
            var a4 = arrives[vo.type];
            if (a4 == null) {
                vo.state = 0;
                vo.have = 0;
                this.arr_data.addItem(vo);
                continue;
            }
            if (vo.type != ACHIVE.BUY) {
                vo.state = a4.indexOf(vo.id) == -1 ? 0 : 1;
            }
            else {
                for (var i = 0; i < a4.length; i++) {
                    var ooo = a4[i];
                    if (ooo.id == id) {
                        vo.have = ooo.value;
                        break;
                    }
                }
            }
            this.arr_data.addItem(vo);
        }
        this.list.dataProvider = this.arr_data;
    };
    AchieveUI.prototype.initEvent = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    AchieveUI.prototype.clickBack = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    AchieveUI.prototype.clear = function () {
        this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    return AchieveUI;
}(eui.Component));
__reflect(AchieveUI.prototype, "AchieveUI");
//# sourceMappingURL=AchieveUI.js.map