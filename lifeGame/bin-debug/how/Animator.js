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
     * 龙骨动画组件
     * @author 王锡铜
     *
     */
    var Animator = (function (_super) {
        __extends(Animator, _super);
        function Animator() {
            var _this = _super.call(this) || this;
            /**
             * 资源根目录
             */
            _this.source = "";
            /**
             * 资源组
             */
            _this.sourceGroup = "";
            _this.playOnce = false; //播放一次
            _this.autoPlay = true; //自动播放
            _this.stopAndVisible = false; //在停止状态下是否隐藏
            _this._isLoaded = false;
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemovedFromStage, _this);
            return _this;
        }
        Object.defineProperty(Animator.prototype, "isLoaded", {
            /**
             * 是否加载完成
             */
            get: function () {
                return this._isLoaded;
            },
            enumerable: true,
            configurable: true
        });
        Animator.prototype.childrenCreated = function () {
            this.init();
        };
        Animator.prototype.init = function (index) {
            var _this = this;
            if (index === void 0) { index = 0; }
            var dragonbonesData = RES.getRes(this.source + "_ske_json");
            var textureData = RES.getRes(this.source + "_tex_json");
            var texture = RES.getRes(this.source + "_tex_png");
            if (!dragonbonesData || !textureData || !texture) {
                if (!this._isLoaded) {
                    var loader = new how.ResourceLoader();
                    loader.loadGroups([this.sourceGroup], function () {
                        _this.init(index);
                    }, this);
                }
                return;
            }
            if (this.armature) {
                this.armature.display.parent.removeChild(this.armature.display);
            }
            this._isLoaded = true;
            var dragonbonesFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
            var armatureName = dragonbonesData.armature[index].name;
            this.armature = dragonbonesFactory.buildArmature(armatureName, this.source);
            var armatureDisplay = this.armature.display;
            this.addChild(armatureDisplay);
            this.armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onAnimationComplete, this);
            dragonBones.WorldClock.clock.add(this.armature);
            this.visible = !this.stopAndVisible;
            if (this.autoPlay) {
                this.play();
            }
            if (!Animator.isAdvanceTime) {
                egret.Ticker.getInstance().register(Animator.onTicker, this);
                Animator.isAdvanceTime = true;
            }
            this.dispatchEventWith(Animator.EVENT_LOADCOMPLETE);
        };
        Animator.onTicker = function (frameTime) {
            dragonBones.WorldClock.clock.advanceTime(frameTime / 1000);
        };
        Animator.prototype.onRemovedFromStage = function () {
            this.stop();
            if (this.armature) {
                this.armature.dispose();
                dragonBones.WorldClock.clock.remove(this.armature);
                this.armature.removeEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onAnimationComplete, this);
                if (this.armature.display && this.armature.display.parent) {
                    this.armature.display.parent.removeChild(this.armature.display);
                }
            }
            this.armature = null;
            this.okHander = null;
            this.thisObject = null;
            this.params = null;
        };
        Animator.prototype.onAnimationComplete = function (event) {
            this.visible = !this.stopAndVisible;
            this.dispatchEvent(event);
            if (this.okHander) {
                this.okHander.apply(this.thisObject, this.params);
            }
        };
        Animator.prototype.play = function (loopNum) {
            if (loopNum === void 0) { loopNum = 1; }
            if (!this.armature) {
                return;
            }
            this.visible = true;
            if (this.playOnce) {
                this.armature.animation.play(null, 1);
            }
            else {
                this.armature.animation.play(null, 0);
            }
        };
        Animator.prototype.getAnimationName = function () {
            return this.armature.animation.lastAnimationName;
        };
        Animator.prototype.playByName = function (animationName, playTimes) {
            this.armature.animation.play(animationName, playTimes);
        };
        Animator.prototype.playWithSource = function (source, index) {
            if (index === void 0) { index = 0; }
            this.source = source;
            this.init(index);
            this.play();
        };
        Animator.prototype.stop = function () {
            if (this.armature && this.armature.animation) {
                this.armature.animation.stop();
                this.visible = !this.stopAndVisible;
            }
        };
        /**
         * 添加完成回调函数
         */
        Animator.prototype.addHander = function (okHander, thisObject, params) {
            this.okHander = okHander;
            this.thisObject = thisObject;
            this.params = params;
        };
        /**
         * 数据越小，播放速度越慢
         */
        Animator.isAdvanceTime = false;
        Animator.EVENT_LOADCOMPLETE = "loadComplete";
        return Animator;
    }(eui.Group));
    how.Animator = Animator;
    __reflect(Animator.prototype, "how.Animator");
})(how || (how = {}));
window["how"] = window["how"] || {};
window["how"]["Animator"] = how.Animator;
