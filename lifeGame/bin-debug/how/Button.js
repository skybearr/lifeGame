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
var how;
(function (how) {
    /**
     * 所有按钮的基类
     * 带按下缩放功能，按下声音功能，按下改变颜色功能（后面2个功能暂未加入）
     * @author 袁浩
     *
     */
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            var _this = _super.call(this) || this;
            _this.isNeedMask = true;
            _this.scaleDuration = 100;
            _this.darkDuration = 0;
            _this.scaleWhenDown = 1;
            _this.darkWhenDown = 0.7;
            _this.soundPath = "assets/button.mp3";
            _this._visible = false;
            _this._dark = 1;
            return _this;
        }
        Object.defineProperty(Button.prototype, "dark", {
            get: function () {
                return this._dark;
            },
            set: function (value) {
                this._dark = value;
                how.DisplayUtils.dark(this, value);
            },
            enumerable: true,
            configurable: true
        });
        Button.prototype.childrenCreated = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchOutSide, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
        };
        Button.prototype.onTouchBegin = function (e) {
            this.scaleX = this.scaleWhenDown;
            this.scaleY = this.scaleWhenDown;
            if (this.darkDuration) {
                egret.Tween.get(this).to({ dark: this.darkWhenDown }, this.darkDuration);
            }
            else {
                this.dark = this.darkWhenDown;
            }
        };
        Button.prototype.onTouchEnd = function (e) {
            this.scaleX = 1;
            this.scaleY = 1;
            if (this.darkDuration) {
                egret.Tween.get(this).to({ dark: 1 }, this.darkDuration);
            }
            else {
                this.dark = 1;
            }
        };
        Button.prototype.onTouchOutSide = function (e) {
            this.onTouchEnd(null);
        };
        Button.prototype.onTouchTab = function (e) {
            if (RES.hasRes(this.soundPath) || egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
                how.SoundManager.playEffect(this.soundPath);
            }
            this.currentTouchEnabled = this.touchEnabled;
            this.touchEnabled = false;
            var timer = egret.setTimeout(function () {
                this.touchEnabled = this.currentTouchEnabled;
                egret.clearTimeout(timer);
            }, this, 200);
        };
        return Button;
    }(eui.Button));
    how.Button = Button;
    __reflect(Button.prototype, "how.Button");
})(how || (how = {}));
window["how"] = window["how"] || {};
window["how"]["Button"] = how.Button;
