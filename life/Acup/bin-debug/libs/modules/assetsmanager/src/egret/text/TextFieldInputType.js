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
var egret;
(function (egret) {
    /**
     * TextFieldInputType class is an enumeration of constant value used in setting the inputType property of the TextField class.
     * @version Egret 3.1.2
     * @platform Web,Native
     * @language en_US
     */
    /**
     * TextFieldInputType 类是在设置 TextField 类的 inputType 属性时使用的常数值的枚举。
     * @version Egret 3.1.2
     * @platform Web,Native
     * @language zh_CN
     */
    var TextFieldInputType = (function () {
        function TextFieldInputType() {
        }
        /**
         * The default
         * @version Egret 3.1.2
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 默认 input 类型
         * @version Egret 3.1.2
         * @platform Web,Native
         * @language zh_CN
         */
        TextFieldInputType.TEXT = "text";
        /**
         * Telephone Number Inputs
         * @version Egret 3.1.2
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 电话号码 input 类型
         * @version Egret 3.1.2
         * @platform Web,Native
         * @language zh_CN
         */
        TextFieldInputType.TEL = "tel";
        /**
         * Password Inputs
         * @version Egret 3.1.2
         * @platform Web,Native
         * @language en_US
         */
        /**
         * password 类型
         * @version Egret 3.1.2
         * @platform Web,Native
         * @language zh_CN
         */
        TextFieldInputType.PASSWORD = "password";
        return TextFieldInputType;
    }());
    egret.TextFieldInputType = TextFieldInputType;
    __reflect(TextFieldInputType.prototype, "egret.TextFieldInputType");
})(egret || (egret = {}));
//# sourceMappingURL=TextFieldInputType.js.map