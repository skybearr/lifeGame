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
        platform.bannerhide();
        GameLogic.getInstance().achieveui = this;
        this.checkFit();
        this.initView();
        this.initEvent();
        this.updateCoin();
    };
    AchieveUI.prototype.updateCoin = function () {
        this.lbl_1.text = DataBase.money + "";
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
        var arrives = GameLogic.getInstance().getArrives();
        for (var id in obj) {
            var o = obj[id];
            var vo = new AchieveVO();
            vo.id = id;
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
            vo.state = vo.type == ACHIVE.BUY ? 2 : 0;
            vo.have = 0;
            //已达成数据
            var a4 = arrives[vo.type];
            if (a4 == null) {
                this.arr_data.addItem(vo);
                continue;
            }
            p2: for (var i = 0; i < a4.length; i++) {
                var ooo = a4[i];
                if (ooo.id == id) {
                    vo.have = ooo.num;
                    vo.state = vo.type == ACHIVE.BUY ? 2 : 1;
                    break p2;
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
        GameLogic.getInstance().achieveui = null;
    };
    return AchieveUI;
}(eui.Component));
__reflect(AchieveUI.prototype, "AchieveUI");
