//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var egret;
(function (egret) {
    var sys;
    (function (sys) {
        var displayListPool = [];
        var blendModes = ["source-over", "lighter", "destination-out"];
        var defaultCompositeOp = "source-over";
        /**
         * @private
         * 显示列表
         */
        var DisplayList = (function (_super) {
            __extends(DisplayList, _super);
            /**
             * @private
             * 创建一个DisplayList对象
             */
            function DisplayList(root) {
                var _this = _super.call(this) || this;
                _this.isStage = false;
                /**
                 * 位图渲染节点
                 */
                _this.$renderNode = new sys.BitmapNode();
                /**
                 * @private
                 */
                _this.renderBuffer = null;
                /**
                 * @private
                 */
                _this.offsetX = 0;
                /**
                 * @private
                 */
                _this.offsetY = 0;
                /**
                 * @private
                 */
                _this.offsetMatrix = new egret.Matrix();
                /**
                 * @private
                 */
                _this.isDirty = false;
                _this.needUpdateRegions = false;
                /**
                 * @private
                 */
                _this.dirtyNodeList = [];
                /**
                 * @private
                 */
                _this.dirtyList = null;
                /**
                 * @private
                 */
                _this.sizeChanged = false;
                _this.$dirtyRegionPolicy = egret.DirtyRegionPolicy.ON;
                _this.root = root;
                _this.dirtyRegion = new sys.DirtyRegion(root);
                _this.isStage = (root instanceof egret.Stage);
                _this.dirtyNodes = egret.createMap();
                _this.offsetMatrix.a = _this.offsetMatrix.d = DisplayList.$pixelRatio;
                return _this;
            }
            /**
             * 创建一个DisplayList对象，若内存不足或无法创建RenderBuffer，将会返回null。
             */
            DisplayList.create = function (target) {
                var displayList = new egret.sys.DisplayList(target);
                try {
                    var buffer = new sys.RenderBuffer();
                    displayList.renderBuffer = buffer;
                }
                catch (e) {
                    return null;
                }
                displayList.root = target;
                if (egret.Capabilities.$renderMode == "webgl") {
                    var policy = egret.DirtyRegionPolicy.OFF;
                    displayList.$dirtyRegionPolicy = policy;
                    displayList.dirtyRegion.setDirtyRegionPolicy(policy);
                    displayList.renderBuffer.setDirtyRegionPolicy(policy);
                }
                return displayList;
            };
            /**
             * @private
             * 获取渲染节点
             */
            DisplayList.prototype.$getRenderNode = function () {
                return this.$renderNode;
            };
            /**
             * @private
             * 更新对象在舞台上的显示区域和透明度,返回显示区域是否发生改变。
             */
            DisplayList.prototype.$update = function (dirtyRegionPolicy) {
                var target = this.root;
                //当cache对象的显示列表已经加入dirtyList，对象又取消cache的时候，root为空
                if (target == null) {
                    return false;
                }
                target.$removeFlagsUp(768 /* Dirty */);
                var node = this.$renderNode;
                //必须在访问moved属性前调用以下两个方法，因为moved属性在以下两个方法内重置。
                var concatenatedMatrix = target.$getConcatenatedMatrix();
                var displayList = target.$parentDisplayList;
                if (dirtyRegionPolicy == egret.DirtyRegionPolicy.OFF) {
                    if (this.needUpdateRegions) {
                        this.updateDirtyRegions();
                    }
                    if (!displayList) {
                        return false;
                    }
                    var matrix = node.renderMatrix;
                    matrix.copyFrom(concatenatedMatrix);
                    var root_1 = displayList.root;
                    if (root_1 !== target.$stage) {
                        target.$getConcatenatedMatrixAt(root_1, matrix);
                    }
                    node.renderAlpha = target.$getConcatenatedAlpha();
                }
                else {
                    var bounds = target.$getOriginalBounds();
                    var region = node.renderRegion;
                    if (this.needUpdateRegions) {
                        this.updateDirtyRegions();
                    }
                    if (!displayList) {
                        region.setTo(0, 0, 0, 0);
                        node.moved = false;
                        return false;
                    }
                    if (!node.moved) {
                        return false;
                    }
                    node.moved = false;
                    var matrix = node.renderMatrix;
                    matrix.copyFrom(concatenatedMatrix);
                    var root_2 = displayList.root;
                    if (root_2 !== target.$stage) {
                        target.$getConcatenatedMatrixAt(root_2, matrix);
                    }
                    region.updateRegion(bounds, matrix);
                    node.renderAlpha = target.$getConcatenatedAlpha();
                }
                return true;
            };
            /**
             * @private
             * 设置剪裁边界，不再绘制完整目标对象，画布尺寸由外部决定，超过边界的节点将跳过绘制。
             */
            DisplayList.prototype.setClipRect = function (width, height) {
                this.dirtyRegion.setClipRect(width, height);
                width *= DisplayList.$pixelRatio;
                height *= DisplayList.$pixelRatio;
                this.renderBuffer.resize(width, height);
            };
            /**
             * @private
             * 标记一个节点需要重新渲染
             */
            DisplayList.prototype.markDirty = function (node) {
                var key = node.$hashCode;
                if (this.dirtyNodes[key]) {
                    return;
                }
                this.dirtyNodes[key] = true;
                this.dirtyNodeList.push(node);
                if (!this.needUpdateRegions) {
                    this.needUpdateRegions = true;
                    this.isDirty = true;
                    var parentCache = this.root.$parentDisplayList;
                    if (parentCache) {
                        parentCache.markDirty(this);
                    }
                }
            };
            /**
             * @private
             * 更新节点属性并返回脏矩形列表。
             */
            DisplayList.prototype.updateDirtyRegions = function () {
                var dirtyNodeList = this.dirtyNodeList;
                this.dirtyNodeList = [];
                this.dirtyNodes = egret.createMap();
                this.needUpdateRegions = false;
                var dirtyRegion = this.dirtyRegion;
                var length = dirtyNodeList.length;
                for (var i = 0; i < length; i++) {
                    var display = dirtyNodeList[i];
                    var node = display.$getRenderNode();
                    //有可能 markDirty 之后，显示对象自身改变，变的没有renderNode
                    if (node) {
                        node.needRedraw = false; //先清空上次缓存的标记,防止上次没遍历到的节点 needRedraw 始终为 true.
                        if (this.isStage) {
                            if (node.renderAlpha > 0 && node.renderVisible) {
                                if (dirtyRegion.addRegion(node.renderRegion)) {
                                    node.needRedraw = true;
                                }
                            }
                            var moved = display.$update(this.$dirtyRegionPolicy);
                            if (node.renderAlpha > 0 && node.renderVisible && (moved || !node.needRedraw)) {
                                if (dirtyRegion.addRegion(node.renderRegion)) {
                                    node.needRedraw = true;
                                }
                            }
                        }
                        else {
                            if (dirtyRegion.addRegion(node.renderRegion)) {
                                node.needRedraw = true;
                            }
                            var moved = display.$update(this.$dirtyRegionPolicy);
                            if (moved || !node.needRedraw) {
                                if (dirtyRegion.addRegion(node.renderRegion)) {
                                    node.needRedraw = true;
                                }
                            }
                        }
                    }
                }
                this.dirtyList = dirtyRegion.getDirtyRegions();
                return this.dirtyList;
            };
            /**
             * @private
             * 绘制根节点显示对象到目标画布，返回draw的次数。
             */
            DisplayList.prototype.drawToSurface = function () {
                var drawCalls = 0;
                var dirtyList = this.dirtyList;
                if (dirtyList && dirtyList.length > 0) {
                    if (!this.isStage) {
                        this.changeSurfaceSize();
                    }
                    var buffer = this.renderBuffer;
                    buffer.beginClip(this.dirtyList, this.offsetX, this.offsetY);
                    dirtyList = this.$dirtyRegionPolicy == egret.DirtyRegionPolicy.OFF ? null : this.dirtyList;
                    drawCalls = sys.systemRenderer.render(this.root, buffer, this.offsetMatrix, dirtyList, !this.isStage);
                    buffer.endClip();
                    if (!this.isStage) {
                        var surface = buffer.surface;
                        var renderNode = this.$renderNode;
                        renderNode.drawData.length = 0;
                        var width = surface.width;
                        var height = surface.height;
                        if (!this.bitmapData) {
                            this.bitmapData = new egret.BitmapData(surface);
                        }
                        else {
                            this.bitmapData.source = surface;
                            this.bitmapData.width = width;
                            this.bitmapData.height = height;
                        }
                        renderNode.image = this.bitmapData;
                        renderNode.imageWidth = width;
                        renderNode.imageHeight = height;
                        renderNode.drawImage(0, 0, width, height, -this.offsetX / DisplayList.$pixelRatio, -this.offsetY / DisplayList.$pixelRatio, width / DisplayList.$pixelRatio, height / DisplayList.$pixelRatio);
                    }
                }
                this.dirtyList = null;
                this.dirtyRegion.clear();
                this.isDirty = false;
                return drawCalls;
            };
            /**
             * @private
             * 改变画布的尺寸，由于画布尺寸修改会清空原始画布。所以这里将原始画布绘制到一个新画布上，再与原始画布交换。
             */
            DisplayList.prototype.changeSurfaceSize = function () {
                var root = this.root;
                var oldOffsetX = this.offsetX;
                var oldOffsetY = this.offsetY;
                var bounds = this.root.$getOriginalBounds();
                var scaleX = DisplayList.$pixelRatio;
                var scaleY = DisplayList.$pixelRatio;
                this.offsetX = -bounds.x * DisplayList.$pixelRatio;
                this.offsetY = -bounds.y * DisplayList.$pixelRatio;
                this.offsetMatrix.setTo(this.offsetMatrix.a, 0, 0, this.offsetMatrix.d, this.offsetX, this.offsetY);
                var buffer = this.renderBuffer;
                //在chrome里，小等于256*256的canvas会不启用GPU加速。
                var width = Math.max(257, bounds.width * scaleX);
                var height = Math.max(257, bounds.height * scaleY);
                if (this.offsetX == oldOffsetX &&
                    this.offsetY == oldOffsetY &&
                    buffer.surface.width == width &&
                    buffer.surface.height == height) {
                    return;
                }
                if (!this.sizeChanged) {
                    this.sizeChanged = true;
                    buffer.resize(width, height);
                }
                else {
                    buffer.resizeTo(width, height, this.offsetX - oldOffsetX, this.offsetY - oldOffsetY);
                }
            };
            DisplayList.prototype.setDirtyRegionPolicy = function (policy) {
                //todo 这里还可以做更多优化
                this.$dirtyRegionPolicy = policy;
                this.dirtyRegion.setDirtyRegionPolicy(policy);
                this.renderBuffer.setDirtyRegionPolicy(policy);
            };
            /**
             * @private
             */
            DisplayList.$setDevicePixelRatio = function (ratio) {
                if (DisplayList.$pixelRatio == ratio) {
                    return;
                }
                DisplayList.$pixelRatio = ratio;
            };
            DisplayList.$preMultiplyInto = function (other) {
                var pixelRatio = DisplayList.$pixelRatio;
                var a = other.a * pixelRatio;
                var b = 0.0;
                var c = 0.0;
                var d = other.d * pixelRatio;
                var tx = other.tx * pixelRatio;
                var ty = other.ty * pixelRatio;
                if (other.b !== 0.0 || other.c !== 0.0) {
                    b += other.b * pixelRatio;
                    c += other.c * pixelRatio;
                }
                other.a = a;
                other.b = b;
                other.c = c;
                other.d = d;
                other.tx = tx;
                other.ty = ty;
            };
            /**
             * @private
             */
            DisplayList.$pixelRatio = 1;
            return DisplayList;
        }(egret.HashObject));
        sys.DisplayList = DisplayList;
        __reflect(DisplayList.prototype, "egret.sys.DisplayList", ["egret.sys.Renderable"]);
    })(sys = egret.sys || (egret.sys = {}));
})(egret || (egret = {}));
//# sourceMappingURL=DisplayList.js.map