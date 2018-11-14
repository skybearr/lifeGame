var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StartUI = (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "StartSkin";
        return _this;
    }
    StartUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_arr = [];
        this.btns = [];
        this.sp = new egret.Shape();
        this.initMers();
        this.initEvent();
    };
    StartUI.prototype.initMers = function () {
        for (var i = 1; i <= 20; i++) {
            var btn = new eui.Button();
            btn.skinName = "BaseButtonSkin";
            // btn.anchorOffsetX = btn.width/2;
            // btn.anchorOffsetY = btn.height/2;
            var o = i < 20 ? GameCache.mers[i] : GameCache.mers[0];
            btn.label = o['nam'];
            btn.name = i + "";
            this.group.addChild(btn);
            this.btns.push(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        // this.initCrood1();
        this.group.visible = true;
        // this.tweenBtn();
    };
    StartUI.prototype.tweenBtn = function () {
        this.sp.rotation = 0;
        egret.Tween.get(this.sp, { loop: true, onChange: this.initCrood, onChangeObj: this }).to({ rotation: -360 }, 60000).call(function () {
        }, this);
    };
    StartUI.prototype.initEvent = function () {
        this.btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSearch, this);
    };
    StartUI.prototype.initCrood = function () {
        var rotation = this.sp.rotation;
        var d = 200;
        for (var i = 1; i <= 12; i++) {
            var r = rotation + (i - 1) * 30;
            var h = r * Math.PI / 180;
            var xx = Math.sin(h) * d;
            var yy = Math.cos(h) * d;
            var x = 300 + xx;
            var y = 300 + yy;
            this.btns[i].x = x;
            this.btns[i].y = y;
        }
    };
    StartUI.prototype.initCrood1 = function () {
        for (var i = 0; i < 20; i++) {
            var btn = this.btns[i];
            var n = i - 1;
            if (i == 0) {
                n = 20;
            }
            btn.x = 120 * (n % 4);
            btn.y = (btn.height + 10) * Math.floor(n / 4);
        }
    };
    StartUI.prototype.clickSearch = function () {
        if (this.searchui == null) {
            this.searchui = new SearchUI();
            this.searchui.x = this.width / 2;
            this.searchui.y = this.height / 2;
        }
        egret.Tween.removeTweens(this.searchui);
        this.searchui.scaleX = this.searchui.scaleY = 0;
        this.addChild(this.searchui);
        egret.Tween.get(this.searchui).to({ scaleX: 1, scaleY: 1 }, 200).call(function () {
        }, this);
    };
    StartUI.prototype.clickBtn = function (e) {
        var i = parseInt(e.currentTarget.name);
        this.openMer(i);
    };
    StartUI.prototype.openMer = function (i) {
        if (this.merui == null) {
            this.merui = new MeridianUI();
            this.merui.x = this.width / 2;
            this.merui.y = this.height / 2;
        }
        egret.Tween.removeTweens(this.merui);
        this.merui.id = i;
        this.merui.scaleX = this.merui.scaleY = 0;
        this.addChild(this.merui);
        egret.Tween.get(this.merui).to({ scaleX: 1, scaleY: 1 }, 200).call(function () {
        }, this);
    };
    StartUI.prototype.inGame = function (i) {
        GameLogic.getInstance().startGame(i);
    };
    StartUI.prototype.clear = function () {
    };
    return StartUI;
}(eui.Component));
__reflect(StartUI.prototype, "StartUI");
//# sourceMappingURL=StartUI.js.map