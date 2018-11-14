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
    egret.$TextureScaleFactor = 1;
    /**
     * The Texture class encapsulates different image resources on different platforms.
     * In HTML5, resource is an HTMLElement object
     * In OpenGL / WebGL, resource is a texture ID obtained after the GPU is submitted
     * The Texture class encapsulates the details implemented on the underlayer. Developers just need to focus on interfaces
     * @see http://edn.egret.com/cn/docs/page/135 The use of texture packs
     * @see http://edn.egret.com/cn/docs/page/123 Several ways of access to resources
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Texture.ts
     * @language en_US
     */
    /**
     * 纹理类是对不同平台不同的图片资源的封装
     * 在HTML5中，资源是一个HTMLElement对象
     * 在OpenGL / WebGL中，资源是一个提交GPU后获取的纹理id
     * Texture类封装了这些底层实现的细节，开发者只需要关心接口即可
     * @see http://edn.egret.com/cn/docs/page/135 纹理集的使用
     * @see http://edn.egret.com/cn/docs/page/123 获取资源的几种方式
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Texture.ts
     * @language zh_CN
     */
    var Texture = (function (_super) {
        __extends(Texture, _super);
        /**
         * Create an egret.Texture object
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 创建一个 egret.Texture 对象
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        function Texture() {
            var _this = _super.call(this) || this;
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的 x 起始位置
             */
            _this._bitmapX = 0;
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的 y 起始位置
             */
            _this._bitmapY = 0;
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的宽度
             */
            _this._bitmapWidth = 0;
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的高度
             */
            _this._bitmapHeight = 0;
            /**
             * @private
             * 表示这个纹理显示了之后在 x 方向的渲染偏移量
             */
            _this._offsetX = 0;
            /**
             * @private
             * 表示这个纹理显示了之后在 y 方向的渲染偏移量
             */
            _this._offsetY = 0;
            /**
             * @private
             * 纹理宽度
             */
            _this._textureWidth = 0;
            /**
             * @private
             * 纹理高度
             */
            _this._textureHeight = 0;
            /**
             * @private
             * 表示bitmapData.width
             */
            _this._sourceWidth = 0;
            /**
             * @private
             * 表示bitmapData.height
             */
            _this._sourceHeight = 0;
            /**
             * @private
             */
            _this._bitmapData = null;
            /**
             * @private
             */
            _this.$rotated = false;
            return _this;
        }
        Object.defineProperty(Texture.prototype, "textureWidth", {
            /**
             * Texture width, read only
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * 纹理宽度，只读属性，不可以设置
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this.$getTextureWidth();
            },
            enumerable: true,
            configurable: true
        });
        Texture.prototype.$getTextureWidth = function () {
            return this._textureWidth;
        };
        Object.defineProperty(Texture.prototype, "textureHeight", {
            /**
             * Texture height, read only
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * 纹理高度，只读属性，不可以设置
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this.$getTextureHeight();
            },
            enumerable: true,
            configurable: true
        });
        Texture.prototype.$getTextureHeight = function () {
            return this._textureHeight;
        };
        Texture.prototype.$getScaleBitmapWidth = function () {
            return this._bitmapWidth * egret.$TextureScaleFactor;
        };
        Texture.prototype.$getScaleBitmapHeight = function () {
            return this._bitmapHeight * egret.$TextureScaleFactor;
        };
        Object.defineProperty(Texture.prototype, "bitmapData", {
            /**
             * The BitmapData object being referenced.
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * 被引用的 BitmapData 对象。
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this._bitmapData;
            },
            set: function (value) {
                this._setBitmapData(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * Set the BitmapData object.
        * @version Egret 3.2.1
        * @platform Web,Native
        * @language en_US
        */
        /**
         * 设置 BitmapData 对象。
         * @version Egret 3.2.1
         * @platform Web,Native
         * @language zh_CN
         */
        Texture.prototype._setBitmapData = function (value) {
            this._bitmapData = value;
            var scale = egret.$TextureScaleFactor;
            var w = value.width * scale;
            var h = value.height * scale;
            this.$initData(0, 0, w, h, 0, 0, w, h, value.width, value.height);
        };
        /**
         * @private
         * 设置Texture数据
         * @param bitmapX
         * @param bitmapY
         * @param bitmapWidth
         * @param bitmapHeight
         * @param offsetX
         * @param offsetY
         * @param textureWidth
         * @param textureHeight
         * @param sourceWidth
         * @param sourceHeight
         */
        Texture.prototype.$initData = function (bitmapX, bitmapY, bitmapWidth, bitmapHeight, offsetX, offsetY, textureWidth, textureHeight, sourceWidth, sourceHeight, rotated) {
            if (rotated === void 0) { rotated = false; }
            var scale = egret.$TextureScaleFactor;
            this._bitmapX = bitmapX / scale;
            this._bitmapY = bitmapY / scale;
            this._bitmapWidth = bitmapWidth / scale;
            this._bitmapHeight = bitmapHeight / scale;
            this._offsetX = offsetX;
            this._offsetY = offsetY;
            this._textureWidth = textureWidth;
            this._textureHeight = textureHeight;
            this._sourceWidth = sourceWidth;
            this._sourceHeight = sourceHeight;
            this.$rotated = rotated;
            //todo
            egret.BitmapData.$invalidate(this);
        };
        /**
         * @deprecated
         */
        Texture.prototype.getPixel32 = function (x, y) {
            throw new Error();
        };
        /**
         * Obtain the color value for the specified pixel region
         * @param x  The x coordinate of the pixel region
         * @param y  The y coordinate of the pixel region
         * @param width  The width of the pixel region
         * @param height  The height of the pixel region
         * @returns  Specifies the color value for the pixel region
         * @version Egret 3.2.1
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 获取指定像素区域的颜色值
         * @param x  像素区域的X轴坐标
         * @param y  像素区域的Y轴坐标
         * @param width  像素点的Y轴坐标
         * @param height  像素点的Y轴坐标
         * @returns  指定像素区域的颜色值
         * @version Egret 3.2.1
         * @platform Web
         * @language zh_CN
         */
        Texture.prototype.getPixels = function (x, y, width, height) {
            if (width === void 0) { width = 1; }
            if (height === void 0) { height = 1; }
            throw new Error();
        };
        /**
         * Convert base64 string, if the picture (or pictures included) cross-border or null
         * @param type Type conversions, such as "image / png"
         * @param rect The need to convert the area
         * @param smoothing Whether to convert data to the smoothing process
         * @returns {any} base64 string
         * @version Egret 2.4
         * @language en_US
         */
        /**
         * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
         * @param type 转换的类型，如  "image/png"
         * @param rect 需要转换的区域
         * @param {any} encoderOptions 编码用的参数
         * @returns {any} base64字符串
         * @version Egret 2.4
         * @language zh_CN
         */
        Texture.prototype.toDataURL = function (type, rect, encoderOptions) {
            throw new Error();
        };
        /**
         * Crop designated area and save it as image.
         * native support only "image / png" and "image / jpeg"; Web browser because of the various implementations are not the same, it is recommended to use only these two kinds.
         * @param type Type conversions, such as "image / png"
         * @param filePath The path name of the image (the home directory for the game's private space, the path can not have "../",Web supports only pass names.)
         * @param rect The need to convert the area
         * @version Egret 2.4
         * @platform Native
         * @language en_US
         */
        /**
         * 裁剪指定区域并保存成图片。
         * native只支持 "image/png" 和 "image/jpeg"；Web中由于各个浏览器的实现不一样，因此建议也只用这2种。
         * @param type 转换的类型，如  "image/png"
         * @param filePath 图片的名称的路径（主目录为游戏的私有空间，路径中不能有 "../"，Web只支持传名称。）
         * @param rect 需要转换的区域
         * @version Egret 2.4
         * @platform Native
         * @language zh_CN
         */
        Texture.prototype.saveToFile = function (type, filePath, rect) {
            throw new Error();
        };
        /**
         * dispose texture
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 释放纹理
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        Texture.prototype.dispose = function () {
            if (this._bitmapData) {
                this._bitmapData.$dispose();
                this._bitmapData = null;
            }
        };
        return Texture;
    }(egret.HashObject));
    egret.Texture = Texture;
    __reflect(Texture.prototype, "egret.Texture");
})(egret || (egret = {}));
//# sourceMappingURL=Texture.js.map