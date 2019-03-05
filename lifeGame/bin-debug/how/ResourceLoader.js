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
     * 资源加载类，加载一批资源组
     * @author 袁浩
     *
     */
    var ResourceLoader = (function (_super) {
        __extends(ResourceLoader, _super);
        function ResourceLoader() {
            return _super.call(this) || this;
        }
        /**
         * 开始加载资源组
         * @param groups 资源组名称列表
         * @param onComplete 所有资源加载完成的回调
         * @param thisObject 回调方法的执行上下文
         * @param args 回调方法参数
         */
        ResourceLoader.prototype.loadGroups = function (groups, onComplete, thisObject) {
            if (onComplete === void 0) { onComplete = null; }
            if (thisObject === void 0) { thisObject = null; }
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            this.groups = groups;
            this.onComplete = onComplete;
            this.thisObject = thisObject;
            this.args = args;
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.loadGroup();
        };
        ResourceLoader.prototype.loadGroup = function () {
            if (this.groups && this.groups.length > 0) {
                var loadGroup = this.groups.shift();
                // if (!RES.isGroupLoaded(loadGroup)) {
                RES.loadGroup(loadGroup);
                // }
                // else {
                //     trace("资源[" + loadGroup + "]:已经存在，无需加载");
                //     this.loadGroup();
                // }
            }
            else {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                this.onAllGroupComplete();
            }
        };
        /**
        * 资源组加载出错
        */
        ResourceLoader.prototype.onResourceLoadError = function (event) {
            //忽略加载失败的项目
            this.onResourceLoadComplete(event);
            this.dispatchEvent(event);
        };
        /**
        * 资源组加载进度
        */
        ResourceLoader.prototype.onResourceProgress = function (event) {
            this.dispatchEvent(event);
        };
        /**
        * 资源组加载完成
        */
        ResourceLoader.prototype.onResourceLoadComplete = function (event) {
            this.dispatchEvent(event);
            this.loadGroup();
        };
        /**
         * 所有组资源加载完成
         */
        ResourceLoader.prototype.onAllGroupComplete = function () {
            if (this.onComplete) {
                this.onComplete.apply(this.thisObject, this.args);
            }
            this.dispatchEventWith(egret.Event.COMPLETE);
            this.onComplete = null;
            this.thisObject = null;
            this.args = null;
            this.groups = null;
        };
        /**
         * 清除引用
         */
        ResourceLoader.prototype.destroy = function () {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        };
        return ResourceLoader;
    }(egret.EventDispatcher));
    how.ResourceLoader = ResourceLoader;
    __reflect(ResourceLoader.prototype, "how.ResourceLoader");
})(how || (how = {}));
