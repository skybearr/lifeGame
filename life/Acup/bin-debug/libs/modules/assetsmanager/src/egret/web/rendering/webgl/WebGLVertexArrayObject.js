var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
var egret;
(function (egret) {
    var web;
    (function (web) {
        /**
         * @private
         * 顶点数组管理对象
         * 用来维护顶点数组
         */
        var WebGLVertexArrayObject = (function () {
            function WebGLVertexArrayObject() {
                this.size = 2000;
                this.vertexMaxSize = this.size * 4;
                this.indicesMaxSize = this.size * 6;
                this.vertSize = 5;
                this.vertices = null;
                this.indices = null;
                this.indicesForMesh = null;
                this.vertexIndex = 0;
                this.indexIndex = 0;
                this.hasMesh = false;
                var numVerts = this.vertexMaxSize * this.vertSize;
                var numIndices = this.indicesMaxSize;
                this.vertices = new Float32Array(numVerts);
                this.indices = new Uint16Array(numIndices);
                this.indicesForMesh = new Uint16Array(numIndices);
                for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
                    this.indices[i + 0] = j + 0;
                    this.indices[i + 1] = j + 1;
                    this.indices[i + 2] = j + 2;
                    this.indices[i + 3] = j + 0;
                    this.indices[i + 4] = j + 2;
                    this.indices[i + 5] = j + 3;
                }
            }
            /**
             * 是否达到最大缓存数量
             */
            WebGLVertexArrayObject.prototype.reachMaxSize = function (vertexCount, indexCount) {
                if (vertexCount === void 0) { vertexCount = 4; }
                if (indexCount === void 0) { indexCount = 6; }
                return this.vertexIndex > this.vertexMaxSize - vertexCount || this.indexIndex > this.indicesMaxSize - indexCount;
            };
            /**
             * 获取缓存完成的顶点数组
             */
            WebGLVertexArrayObject.prototype.getVertices = function () {
                var view = this.vertices.subarray(0, this.vertexIndex * this.vertSize);
                return view;
            };
            /**
             * 获取缓存完成的索引数组
             */
            WebGLVertexArrayObject.prototype.getIndices = function () {
                return this.indices;
            };
            /**
             * 获取缓存完成的mesh索引数组
             */
            WebGLVertexArrayObject.prototype.getMeshIndices = function () {
                return this.indicesForMesh;
            };
            /**
             * 切换成mesh索引缓存方式
             */
            WebGLVertexArrayObject.prototype.changeToMeshIndices = function () {
                if (!this.hasMesh) {
                    // 拷贝默认index信息到for mesh中
                    for (var i = 0, l = this.indexIndex; i < l; ++i) {
                        this.indicesForMesh[i] = this.indices[i];
                    }
                    this.hasMesh = true;
                }
            };
            WebGLVertexArrayObject.prototype.isMesh = function () {
                return this.hasMesh;
            };
            /**
             * 默认构成矩形
             */
            // private defaultMeshVertices = [0, 0, 1, 0, 1, 1, 0, 1];
            // private defaultMeshUvs = [
            //     0, 0,
            //     1, 0,
            //     1, 1,
            //     0, 1
            // ];
            // private defaultMeshIndices = [0, 1, 2, 0, 2, 3];
            /**
             * 缓存一组顶点
             */
            WebGLVertexArrayObject.prototype.cacheArrays = function (transform, alpha, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, textureSourceWidth, textureSourceHeight, meshUVs, meshVertices, meshIndices, rotated) {
                //计算出绘制矩阵，之后把矩阵还原回之前的
                var locWorldTransform = transform;
                var originalA = locWorldTransform.a;
                var originalB = locWorldTransform.b;
                var originalC = locWorldTransform.c;
                var originalD = locWorldTransform.d;
                var originalTx = locWorldTransform.tx;
                var originalTy = locWorldTransform.ty;
                if (destX != 0 || destY != 0) {
                    locWorldTransform.append(1, 0, 0, 1, destX, destY);
                }
                if (sourceWidth / destWidth != 1 || sourceHeight / destHeight != 1) {
                    locWorldTransform.append(destWidth / sourceWidth, 0, 0, destHeight / sourceHeight, 0, 0);
                }
                var a = locWorldTransform.a;
                var b = locWorldTransform.b;
                var c = locWorldTransform.c;
                var d = locWorldTransform.d;
                var tx = locWorldTransform.tx;
                var ty = locWorldTransform.ty;
                locWorldTransform.a = originalA;
                locWorldTransform.b = originalB;
                locWorldTransform.c = originalC;
                locWorldTransform.d = originalD;
                locWorldTransform.tx = originalTx;
                locWorldTransform.ty = originalTy;
                if (meshVertices) {
                    // 计算索引位置与赋值
                    var vertices = this.vertices;
                    var index = this.vertexIndex * this.vertSize;
                    // 缓存顶点数组
                    var i = 0, iD = 0, l = 0;
                    var u = 0, v = 0, x = 0, y = 0;
                    for (i = 0, l = meshUVs.length; i < l; i += 2) {
                        iD = i * 5 / 2;
                        x = meshVertices[i];
                        y = meshVertices[i + 1];
                        u = meshUVs[i];
                        v = meshUVs[i + 1];
                        // xy
                        vertices[index + iD + 0] = a * x + c * y + tx;
                        vertices[index + iD + 1] = b * x + d * y + ty;
                        // uv
                        vertices[index + iD + 2] = (sourceX + u * sourceWidth) / textureSourceWidth;
                        vertices[index + iD + 3] = (sourceY + v * sourceHeight) / textureSourceHeight;
                        // alpha
                        vertices[index + iD + 4] = alpha;
                    }
                    // 缓存索引数组
                    if (this.hasMesh) {
                        for (var i_1 = 0, l_1 = meshIndices.length; i_1 < l_1; ++i_1) {
                            this.indicesForMesh[this.indexIndex + i_1] = meshIndices[i_1] + this.vertexIndex;
                        }
                    }
                    this.vertexIndex += meshUVs.length / 2;
                    this.indexIndex += meshIndices.length;
                }
                else {
                    var width = textureSourceWidth;
                    var height = textureSourceHeight;
                    var w = sourceWidth;
                    var h = sourceHeight;
                    sourceX = sourceX / width;
                    sourceY = sourceY / height;
                    var vertices = this.vertices;
                    var index = this.vertexIndex * this.vertSize;
                    if (rotated) {
                        var temp = sourceWidth;
                        sourceWidth = sourceHeight / width;
                        sourceHeight = temp / height;
                        // xy
                        vertices[index++] = tx;
                        vertices[index++] = ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + tx;
                        vertices[index++] = b * w + ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + c * h + tx;
                        vertices[index++] = d * h + b * w + ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = c * h + tx;
                        vertices[index++] = d * h + ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                    }
                    else {
                        sourceWidth = sourceWidth / width;
                        sourceHeight = sourceHeight / height;
                        // xy
                        vertices[index++] = tx;
                        vertices[index++] = ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + tx;
                        vertices[index++] = b * w + ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + c * h + tx;
                        vertices[index++] = d * h + b * w + ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = c * h + tx;
                        vertices[index++] = d * h + ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                    }
                    // 缓存索引数组
                    if (this.hasMesh) {
                        var indicesForMesh = this.indicesForMesh;
                        indicesForMesh[this.indexIndex + 0] = 0 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 1] = 1 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 2] = 2 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 3] = 0 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 4] = 2 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 5] = 3 + this.vertexIndex;
                    }
                    this.vertexIndex += 4;
                    this.indexIndex += 6;
                }
            };
            WebGLVertexArrayObject.prototype.clear = function () {
                this.hasMesh = false;
                this.vertexIndex = 0;
                this.indexIndex = 0;
            };
            return WebGLVertexArrayObject;
        }());
        web.WebGLVertexArrayObject = WebGLVertexArrayObject;
        __reflect(WebGLVertexArrayObject.prototype, "egret.web.WebGLVertexArrayObject");
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
//# sourceMappingURL=WebGLVertexArrayObject.js.map