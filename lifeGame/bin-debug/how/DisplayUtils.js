var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var how;
(function (how) {
    /**
     * 显示对象工具类
     * @author 袁浩
     *
     */
    var DisplayUtils = (function () {
        function DisplayUtils() {
        }
        /**
         * 获取扇形
         */
        DisplayUtils.getSector = function (r, startFrom, angle, color) {
            if (r === void 0) { r = 100; }
            if (startFrom === void 0) { startFrom = 0; }
            if (angle === void 0) { angle = 360; }
            if (color === void 0) { color = 0xff0000; }
            var shape = new egret.Shape();
            var x = 0;
            var y = 0;
            shape.graphics.beginFill(color);
            //shape.graphics.lineStyle(0, 0xff0000);
            startFrom = startFrom * Math.PI / 180;
            var isClockwise = true; //是否顺时针
            if (angle < 0) {
                isClockwise = false;
            }
            shape.graphics.drawArc(x, y, r, startFrom, startFrom + angle * Math.PI / 180, !isClockwise);
            shape.graphics.lineTo(x, y);
            shape.graphics.lineTo(x + r * Math.cos(startFrom), y + r * Math.sin(startFrom));
            //            shape.graphics.moveTo(x,y);
            //            angle = (Math.abs(angle) > 360) ? 360 : angle;
            //            var n: number = Math.ceil(Math.abs(angle) / 45);
            //            var angleA: number = angle / n;
            //            angleA = angleA * Math.PI / 180;
            //            startFrom = startFrom * Math.PI / 180;
            //            shape.graphics.lineTo(x + r * Math.cos(startFrom),y + r * Math.sin(startFrom));
            //            for(var i = 1;i <= n;i++) {
            //                startFrom += angleA;
            //                var angleMid = startFrom - angleA / 2;
            //                var bx = x + r / Math.cos(angleA / 2) * Math.cos(angleMid);
            //                var by = y + r / Math.cos(angleA / 2) * Math.sin(angleMid);
            //                var cx = x + r * Math.cos(startFrom);
            //                var cy = y + r * Math.sin(startFrom);
            //                shape.graphics.curveTo(bx,by,cx,cy);
            //            }
            //            if(angle != 360) {
            //                shape.graphics.lineTo(x,y);
            //            }
            shape.graphics.endFill();
            return shape;
        };
        /**
         * 获取矩形
         */
        DisplayUtils.getRect = function (width, height, alpha, color) {
            if (alpha === void 0) { alpha = 1; }
            if (color === void 0) { color = 0xff0000; }
            var shape = new egret.Shape();
            shape.graphics.beginFill(color, alpha);
            shape.graphics.drawRect(0, 0, width, height);
            shape.graphics.endFill();
            return shape;
        };
        /*
         * 获取池对象
         * */
        DisplayUtils.getPoolDisplayObject = function (displayClass) {
            var displayObj = null;
            var arr = [];
            var className = egret.getQualifiedClassName(displayClass);
            if (this._poolDisplay[className]) {
                arr = this._poolDisplay[className];
            }
            if (arr.length > 0) {
                displayObj = arr.pop();
            }
            else {
                displayObj = new displayClass();
            }
            return displayObj;
        };
        /*
         * 回收池对象
         * */
        DisplayUtils.recyclePoolDisplayObject = function (displayObj) {
            //重置显示对象基本参数
            if (displayObj.parent) {
                displayObj.parent.removeChild(displayObj);
            }
            displayObj.alpha = 1;
            displayObj.visible = true;
            displayObj.scaleX = displayObj.scaleY = 1;
            displayObj.mask = null;
            displayObj.x = displayObj.y = 0;
            var arr = [];
            var className = egret.getQualifiedClassName(displayObj);
            if (this._poolDisplay[className]) {
                arr = this._poolDisplay[className];
            }
            else {
                this._poolDisplay[className] = arr;
            }
            arr.push(displayObj);
        };
        //清除回收池对象
        DisplayUtils.clearAllPoolDisplayObject = function () {
            for (var key in this._poolDisplay) {
                var arr = this._poolDisplay[key];
                while (arr.length > 0) {
                    var tmp = arr.pop();
                    tmp = null;
                }
            }
            this._poolDisplay = {};
        };
        //恢复灰化图片
        DisplayUtils.restoreEuiImage = function (argImage) {
            if (this._darkGroup && this._darkGroup[argImage.hashCode]) {
                this.clearDarkImage(this._darkGroup[argImage.hashCode]);
            }
        };
        //图片灰化
        DisplayUtils.darkEuiImage = function (argImage) {
            if (!this._darkGroup) {
                this._darkGroup = {};
            }
            var group;
            var img;
            if (!this._darkGroup[argImage.hashCode]) {
                group = new eui.Group();
                this._darkGroup[argImage.hashCode] = group;
                img = new eui.Image();
                img.source = argImage.source;
                var rect = new eui.Rect();
                rect.top = 0;
                rect.bottom = 0;
                rect.right = 0;
                rect.left = 0;
                rect.fillColor = 0x0;
                rect.fillAlpha = 0.3;
                group.addChild(img);
                group.addChild(rect);
                group.mask = img;
                if (!argImage.parent.contains(group)) {
                    argImage.parent.addChild(group);
                    group.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveGroup, this);
                }
            }
            else {
                group = this._darkGroup[argImage.hashCode];
                img = group.getChildAt(0);
                img.source = argImage.source;
            }
        };
        DisplayUtils.onRemoveGroup = function (event) {
            var group = event.currentTarget;
            this.clearDarkImage(group);
        };
        DisplayUtils.clearDarkImage = function (group) {
            for (var key in this._darkGroup) {
                if (this._darkGroup[key] == group) {
                    this._darkGroup[key] = null;
                    delete this._darkGroup[key];
                    break;
                }
            }
            group.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveGroup, this);
            if (group.parent) {
                group.parent.removeChild(group);
                group.mask = null;
            }
        };
        DisplayUtils.gray = function (img) {
            var colorMatrix = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            img.filters = [colorFlilter];
        };
        DisplayUtils.dark = function (img, light) {
            if (light === void 0) { light = 0.3; }
            var colorMatrix = [
                light, 0, 0, 0, 0,
                0, light, 0, 0, 0,
                0, 0, light, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            img.filters = [colorFlilter];
        };
        /**
        * 振动对象
        */
        DisplayUtils.vibration = function (display) {
            display.removeEventListener(egret.Event.ENTER_FRAME, this.onSceneEnterFrame, this);
            display["i"] = 0;
            display.addEventListener(egret.Event.ENTER_FRAME, this.onSceneEnterFrame, this);
            display.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDisplayRemoved, this);
        };
        DisplayUtils.onDisplayRemoved = function (event) {
            var display = event.currentTarget;
            display.removeEventListener(egret.Event.ENTER_FRAME, this.onSceneEnterFrame, this);
            display.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDisplayRemoved, this);
        };
        DisplayUtils.onSceneEnterFrame = function (event) {
            var display = event.currentTarget;
            if (display["i"] < this.vibrationArrayY.length) {
                display.y += this.vibrationArrayY[display["i"]];
                display.x += this.vibrationArrayX[display["i"]];
            }
            else {
                display.removeEventListener(egret.Event.ENTER_FRAME, this.onSceneEnterFrame, this);
                display.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDisplayRemoved, this);
                display["i"] = 0;
            }
            display["i"]++;
        };
        /**
         * 从canvas中创建一张位图
         */
        DisplayUtils.createDisplayObject = function (width, height, canvas) {
            var bitmapdata = new egret.BitmapData(canvas);
            bitmapdata.$deleteSource = false;
            var texture = new egret.Texture();
            texture._setBitmapData(bitmapdata);
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = width;
            bitmap.height = height;
            return bitmap;
        };
        DisplayUtils._poolDisplay = {};
        DisplayUtils.vibrationArrayY = [-1, 1, 2, -2, -3, 3, 2, -2, 0];
        DisplayUtils.vibrationArrayX = [-1, 1, 2, -2, -3, 3, 2, -2, 0];
        return DisplayUtils;
    }());
    how.DisplayUtils = DisplayUtils;
    __reflect(DisplayUtils.prototype, "how.DisplayUtils");
})(how || (how = {}));
