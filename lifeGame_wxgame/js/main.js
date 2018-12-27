var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var msgGoodsStoreRsp = (function () {
    function msgGoodsStoreRsp() {
        this.goods = [];
    }
    return msgGoodsStoreRsp;
}());
__reflect(msgGoodsStoreRsp.prototype, "msgGoodsStoreRsp");
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
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        RES.setMaxLoadingThread(1);
        GameLogic.getInstance().GameStage = this.stage;
        WxApi.getInstance().GameStage = this.stage;
        GameLogic.getInstance().main = this;
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        this.loadingView = new LoadingUI();
                        this.stage.addChild(this.loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, this.loadingView)];
                    case 3:
                        _a.sent();
                        if (this.loadingView != null && this.loadingView.parent != null) {
                            this.loadingView.parent.removeChild(this.loadingView);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        if (this.loadingView != null && this.loadingView.parent != null) {
            this.loadingView.parent.removeChild(this.loadingView);
        }
        this.loadingView = null;
        GameLogic.getInstance().init();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
/**
 * DebugPlatform用于本地测试
 */
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.isdebug = function () {
        return true;
    };
    DebugPlatform.prototype.checkVersion = function () {
    };
    DebugPlatform.prototype.initBuryingSDK = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("debug_initBuryingSDK");
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.buryingPoint = function (id, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("debug_buryingPoint", id);
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { code: "1D1C1C1C1C1C181L1L181F1F1C1G1E1F1H1C" }];
            });
        });
    };
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "debug_nickName", avatarUrl: "resource/assets/logo.png", city: "sz", country: "CHZ", gender: 1, language: "chinese", province: "js" }];
            });
        });
    };
    DebugPlatform.prototype.showShareMenu = function () {
    };
    DebugPlatform.prototype.share = function (title, imageUrl, query) {
        console.log("debug_share", title, imageUrl, query);
    };
    DebugPlatform.prototype.onShareAppMessage = function (title, imageUrl, query) {
        console.log("debug_onShareAppMessage", title, imageUrl, query);
    };
    DebugPlatform.prototype.updateShareMenu = function (bool) {
        console.log("debug_updateShareMenu", bool);
    };
    DebugPlatform.prototype.getShareInfo = function (ticket) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { encryptedData: "debug_encryptedData", iv: "debug_iv" }];
            });
        });
    };
    DebugPlatform.prototype.getLaunchOptionsSync = function () {
        return { info: { query: "debug_query" }, shareTicket: "debug_shareTicket" };
    };
    DebugPlatform.prototype.createGameClubButton = function (textstr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("debug_createGameClubButton", textstr);
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.vibrate = function (short) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("debug_vibrate", short);
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.bannershow = function (bannerId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("debug_bannershow");
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.bannerdestroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("debug_bannerdestroy");
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.bannerhide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("debug_bannerhide");
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.setStorageSync = function (key, value, isobj) {
        if (typeof (value) != "string") {
            value = JSON.stringify(value);
        }
        console.log("setStorageSync:", key, value);
        egret.localStorage.setItem(key, value);
    };
    DebugPlatform.prototype.getStorageSync = function (key, isobj) {
        var value = egret.localStorage.getItem(key);
        value = JSON.parse(value);
        console.log("getStorageSync:", key, value);
        return value;
    };
    DebugPlatform.prototype.skipToProgram = function (appid, extraData) {
        console.log("debug_postMessage", appid, extraData);
    };
    DebugPlatform.prototype.rewardAdCreate = function (adunitId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, 1];
            });
        });
    };
    DebugPlatform.prototype.rerwardAdShow = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, 2];
            });
        });
    };
    DebugPlatform.prototype.postMessage = function (data) {
        console.log("debug_postMessage", data);
    };
    DebugPlatform.prototype.setUserCloudStorage = function (KVDataList) {
        console.log("debug_setUserCloudStorage", KVDataList);
    };
    DebugPlatform.prototype.openCustomerServiceConversation = function () {
        console.log("debug_openCustomerServiceConversation");
    };
    DebugPlatform.prototype.toast = function (str) {
        console.log("debug_toast:", str);
    };
    DebugPlatform.prototype.showModal = function (content, title, surestr) {
        console.log("debug_showModal:", title, content, surestr);
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
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
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var GameCommand = (function (_super) {
    __extends(GameCommand, _super);
    function GameCommand() {
        var _this = _super.call(this) || this;
        _this.bases = [];
        return _this;
    }
    GameCommand.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameCommand();
        }
        return this._instance;
    };
    /**-------------------------------------------------- 服务器发送 -------------------------------------------------------- */
    GameCommand.prototype.sendData = function (b) {
        if (b === void 0) { b = false; }
        //利息计算
        if (b) {
            DataBase.debt = Formula.getDebt(DataBase.debt);
            DataBase.deposit = Formula.getDeposit(DataBase.deposit);
        }
        var msg = this.getData();
        GameLogic.getInstance().gameui.initData(msg);
    };
    GameCommand.prototype.sendMarket = function (evt) {
        DataBase.events = [];
        DataBase.marketGoods = [];
        var msg = this.getMarket(evt);
        DataBase.marketGoods = msg.goods;
        GameLogic.getInstance().gameui.initMarket(msg);
    };
    //购买柜子
    GameCommand.prototype.sendStore = function () {
        var msg = new msgGoodsStoreRsp();
        msg.goods = DataBase.storeGoods;
        GameLogic.getInstance().gameui.initStore(msg);
    };
    GameCommand.prototype.sendEvent = function () {
        this.dealOtherEvent();
        var arr = DataBase.events;
        for (var i = 0; i < arr.length; i++) {
            GameLogic.getInstance().gameui.eventAppear(arr[i]);
        }
        DataBase.events = [];
    };
    GameCommand.prototype.sendError = function (i) {
        egret.setTimeout(function () {
            GameLogic.getInstance().gameui.errorRsp(i);
        }, this, 100);
    };
    GameCommand.prototype.sendOver = function (t) {
        DataBase.gameState = 0;
        if (t == 0) {
            //结算
            DataBase.debt = Formula.getDebt(DataBase.debt);
            DataBase.deposit = Formula.getDeposit(DataBase.deposit);
            DataBase.money = DataBase.money + DataBase.deposit - DataBase.debt + this.getStorePrice();
            DataBase.debt = 0;
            DataBase.deposit = 0;
        }
        else if (t == 1) {
        }
        this.sendData();
        GameLogic.getInstance().gameui.over();
        WxApi.getInstance().setLocalDataByString("fame", DataBase.fame + "");
        if (t == 0) {
            WxApi.getInstance().setHigherScore(DataBase.money);
        }
    };
    /**----------------------------------------------- 数据获得 --------------------------------------------------------------------- */
    GameCommand.prototype.getStorePrice = function () {
        var p = 0;
        for (var i = 0; i < DataBase.storeGoods.length; i++) {
            var good = DataBase.storeGoods[i];
            p += good.dwPrice * good.dwNum;
        }
        return p;
    };
    GameCommand.prototype.getData = function () {
        var msg = new msgLifeDataRsp();
        msg.dwMoney = DataBase.money;
        msg.dwDebt = DataBase.debt;
        msg.dwDeposit = DataBase.deposit;
        msg.dwPow = DataBase.pow;
        msg.dwTimes = DataBase.times;
        msg.dwMaxStoreNum = DataBase.maxStoreNum;
        msg.dwFame = DataBase.fame;
        return msg;
    };
    GameCommand.prototype.getMarket = function (evt) {
        var msg = new msgGoodsBuyRsp();
        msg.goods = [];
        var googlen = this.bases.length;
        var len = 4 + Math.floor(Math.random() * (googlen - 3));
        var arr = this.bases.slice();
        var lll = DataBase.gamePackage == 1 ? arr.length - 1 : arr.length;
        arr = StringUtil.shuffle(arr);
        var goodIds = [];
        for (var i = 0; i < len; i++) {
            goodIds.push(arr[i]);
        }
        goodIds.sort(this.sortfun);
        // console.log("开始随机价格");
        for (var i = 0; i < goodIds.length; i++) {
            var good = new varGoods();
            var id = goodIds[i];
            var o = GameLogic.getInstance().goods[id];
            if (o == null) {
                continue;
            }
            good.dwID = id;
            good.strName = o['name'];
            good.dwPrice = this.getPrice(o, evt);
            good.dwNum = 0;
            msg.goods.push(good);
        }
        return msg;
    };
    /**其他事件触发几率 */
    GameCommand.prototype.dealOtherEvent = function () {
        var o = Formula.getOtherEvent();
        if (o != null) {
            this.addEvent(o['a'], o['b'], o['c']);
        }
    };
    /**事件
     * @param a	类型  1现金 2存款 3健康 4声望 5
     * @param b 1减少 2增加
     * @param c	随机值
     */
    GameCommand.prototype.addEvent = function (a, b, c) {
        var id = a * 100 + b * 10 + c;
        var o = GameLogic.getInstance().goods["evt" + id];
        if (o == null) {
            return;
        }
        var isadd = b == 2;
        var value = o['value'];
        if (a < 5) {
            switch (a) {
                case 1://money
                    if (value <= 1) {
                        value = Math.floor(DataBase.money * value);
                    }
                    else {
                        value = Math.floor(Math.random() * value / 5);
                    }
                    DataBase.money = DataBase.money + (isadd ? value : -value);
                    DataBase.money = DataBase.money <= 0 ? 0 : DataBase.money;
                    break;
                case 2://deposit
                    if (value <= 1) {
                        value = Math.floor(DataBase.money * value);
                    }
                    else {
                        value = Math.floor(Math.random() * value / 5);
                    }
                    DataBase.deposit = DataBase.deposit + (isadd ? value : -value);
                    DataBase.deposit = DataBase.deposit <= 0 ? 0 : DataBase.deposit;
                    break;
                case 3://pow
                    DataBase.pow = DataBase.pow + (isadd ? value : -value);
                    DataBase.pow = DataBase.pow <= 0 ? 0 : DataBase.pow;
                    break;
                case 4://fame
                    DataBase.saveFame(DataBase.fame + (isadd ? value : -value));
                    DataBase.saveFame(DataBase.fame <= 0 ? 0 : DataBase.fame);
                    break;
            }
        }
        if (typeof (o) == "string") {
            DataBase.events.push(StringUtil.getSwfLangStr(o));
        }
        else {
            DataBase.events.push(StringUtil.getSwfLangStrVar(o['str'], [value]));
        }
    };
    /**浮动区间	0.2,3,5,10
     *
     */
    GameCommand.prototype.getPrice = function (o, evt) {
        //上下浮动 0.2~10
        var n = o['price'];
        var r1 = Formula.getRandom1();
        //第一次随机后的价格
        var v = Math.floor(n * r1);
        // console.log(o['name'],"正常价格：",n,"范围浮动随机：",r1,"实际价格：",v);
        var b2 = Formula.isAdd();
        var v2 = Math.floor(v * Formula.getRandom2());
        //随机值 看起来不是每次都一样的价格
        v = b2 ? v + v2 : v - v2;
        // console.log(o['name'],"正常价格：",n,"上下浮动随机0.2：",v);
        if (evt) {
            //出现事件概率 0.1
            var b3 = Formula.apperEvent();
            if (b3) {
                //事件翻倍数随机
                var r3 = Formula.getRandom3();
                v = Math.floor(v * r3);
                // console.log(o['name'],"正常价格：",n,"事件浮动随机：",r3,"实际价格：",v);
                //记录事件
                var r4 = Math.floor(Math.random() * 3) + 1;
                var evt_1 = 'evt' + (r3 < 1 ? 0 : 1) + r4;
                DataBase.events.push(o[evt_1]);
            }
        }
        if (v <= 0) {
            v = 1;
        }
        return v;
    };
    GameCommand.prototype.sortfun = function (a, b) {
        return a < b ? -1 : 1;
    };
    GameCommand.prototype.saveAchieve = function () {
        if (DataBase.money > DataBase.achives[0]) {
            DataBase.achives[0] = DataBase.money;
        }
        if (DataBase.deposit > DataBase.achives[1]) {
            DataBase.achives[1] = DataBase.deposit;
        }
        if (DataBase.debt > DataBase.achives[2]) {
            DataBase.achives[2] = DataBase.debt;
        }
        if (DataBase.pow < DataBase.achives[3]) {
            DataBase.achives[3] = DataBase.pow;
        }
        if (DataBase.fame < DataBase.achives[4]) {
            DataBase.achives[4] = DataBase.fame;
        }
        if (DataBase.fame > DataBase.achives[5]) {
            DataBase.achives[5] = DataBase.fame;
        }
    };
    GameCommand.prototype.getPriceInMarket = function (id) {
        var arr = DataBase.marketGoods;
        for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            if (id == good.dwID) {
                return good.dwPrice;
            }
        }
        return null;
    };
    /**-------------------------------------------- 客户端发送  ------------------------------------------------------------------------ */
    GameCommand.prototype.selectPackage = function (i) {
        DataBase.gamePackage = i;
    };
    /**根据type 刷数据 */
    GameCommand.prototype.startGame = function () {
        var o = GameLogic.getInstance().data["config" + DataBase.gamePackage];
        DataBase.times = 1;
        DataBase.money = o['money']; //new Int64(o['money'], 0);
        DataBase.debt = o['debt'];
        DataBase.deposit = 0; //new Int64(0, 0);
        DataBase.pow = o['pow'];
        DataBase.maxStoreNum = 100;
        var n = WxApi.getInstance().getLocalData("fame");
        DataBase.fame = (n == null || n == "") ? o['fame'] : parseInt(n);
        if (DataBase.fame == null || DataBase.fame == undefined || DataBase.fame == NaN) {
            DataBase.fame = 0;
        }
        DataBase.marketGoods = [];
        DataBase.storeGoods = [];
        DataBase.events = [];
        DataBase.achives = [0, 0, 0, 0, 0];
        DataBase.gameState = 1;
        this.sendData();
        this.sendMarket(false);
    };
    /**过一天 */
    GameCommand.prototype.passOneDay = function () {
        if (DataBase.gameState == 0) {
            return;
        }
        DataBase.times++;
        if (DataBase.times >= GameLogic.getInstance().data['maxday']) {
            this.sendOver(0);
            return;
        }
        this.sendMarket(true);
        this.sendEvent();
        this.sendData(true);
        if (DataBase.pow <= 0) {
            this.sendOver(1);
            return;
        }
        this.saveAchieve();
    };
    GameCommand.prototype.buyGoods = function (id, num) {
        if (num == 0) {
            this.sendError(ERROR.BUY_ZERO);
            return;
        }
        // if(id == this.bases[this.bases.length-1] && DataBase.gamePackage == 1){
        // 	this.sendError(ERROR.NEED_LICIENCE);
        // 	return;
        // }
        var arr = DataBase.marketGoods;
        for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            if (good.dwID == id) {
                var n = good.dwPrice * num;
                if (n > DataBase.money) {
                    this.sendError(ERROR.MONEY_NOT_ENOUGH);
                    return;
                }
                else {
                    var arr1 = DataBase.storeGoods;
                    var total = 0;
                    var index = void 0;
                    for (var j = 0; j < arr1.length; j++) {
                        var good1 = arr1[j];
                        if (good1.dwID == id) {
                            index = j;
                        }
                        total += good1.dwNum;
                    }
                    if (total + num > DataBase.maxStoreNum) {
                        this.sendError(ERROR.STORE_NOT_ENOUGH);
                        return;
                    }
                    else {
                        DataBase.money -= n;
                        var g = arr1[index];
                        if (g == null) {
                            g = new varGoods();
                            g.dwID = id;
                            g.dwPrice = good.dwPrice;
                            g.dwNum = num;
                            g.strName = good.strName;
                            arr1.push(g);
                        }
                        else {
                            var nn = g.dwNum + num;
                            var p = Math.floor((g.dwPrice * g.dwNum + good.dwPrice * num) / nn);
                            g.dwNum = nn;
                            g.dwPrice = p;
                            arr1[index] = g;
                        }
                        this.sendData();
                        this.sendStore();
                    }
                }
                break;
            }
        }
    };
    GameCommand.prototype.sellGoods = function (id, num) {
        if (num == 0) {
            this.sendError(ERROR.SELL_ZERO);
            return;
        }
        var marketprice = this.getPriceInMarket(id);
        if (marketprice == null) {
            this.sendError(ERROR.MARKET_NO_GOOD);
            return;
        }
        var arr = DataBase.storeGoods;
        for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            if (good.dwID == id) {
                DataBase.money += marketprice * num;
                good.dwNum -= num;
                if (good.dwNum <= 0) {
                    DataBase.storeGoods.splice(i, 1);
                }
                this.sendData();
                this.sendStore();
                break;
            }
        }
    };
    GameCommand.prototype.cun = function (num) {
        if (num > 0 && num <= DataBase.money) {
            DataBase.deposit += num;
            DataBase.money -= num;
            this.sendData();
        }
    };
    GameCommand.prototype.qu = function (num) {
        if (num > 0 && num <= DataBase.deposit) {
            DataBase.deposit -= num;
            DataBase.money += num;
            this.sendData();
        }
    };
    GameCommand.prototype.huan = function (num) {
        if (num > 0 && num <= DataBase.money && num <= DataBase.debt) {
            DataBase.debt -= num;
            DataBase.money -= num;
            this.sendData();
        }
    };
    GameCommand.prototype.treat = function (n) {
        if (n > 0 && n < 100) {
            if (n + DataBase.pow > 100) {
                n = 100 - DataBase.pow;
            }
            var needmoney = n * GameLogic.getInstance().data['hospital'];
            if (needmoney >= DataBase.money) {
                this.sendError(ERROR.MONEY_NOT_ENOUGH);
                return;
            }
            DataBase.money -= needmoney;
            DataBase.pow += n;
            this.sendData();
        }
    };
    /**慈善 */
    GameCommand.prototype.charity = function (n) {
        if (n > DataBase.money) {
            this.sendError(ERROR.MONEY_NOT_ENOUGH);
            return;
        }
        var charity = GameLogic.getInstance().data['charity'];
        var c;
        if (n < charity) {
            var r = Math.random() * 100;
            if (r < 2) {
                DataBase.saveFame(DataBase.fame + 3);
                c = 0;
            }
            else {
                c = 1;
            }
        }
        else {
            var i = Math.floor(n / charity);
            DataBase.saveFame(DataBase.fame + i);
            c = i < 10 ? 2 : (i < 100 ? 3 : 4);
        }
        this.addEvent(5, 1, c);
        DataBase.money -= n;
        this.sendData();
        this.sendEvent();
    };
    GameCommand.prototype.buyStore = function (price) {
        var max = GameLogic.getInstance().data['maxstore'];
        if (DataBase.maxStoreNum >= max) {
            this.sendError(ERROR.MAX_STORE_NUM);
            return;
        }
        var n = GameLogic.getInstance().data['storeprice'];
        if (price < n) {
            console.log("价格低于标准值，请勿作弊");
            return;
        }
        if (DataBase.money < price) {
            this.sendError(ERROR.MONEY_NOT_ENOUGH);
            return;
        }
        else {
            DataBase.maxStoreNum += 10;
            if (DataBase.maxStoreNum >= max) {
                DataBase.maxStoreNum = max;
            }
            var r = Math.floor(Math.random() * n / 5);
            DataBase.money -= (price + r);
            this.sendData();
            this.addEvent(5, 0, 0);
            this.sendEvent();
        }
    };
    return GameCommand;
}(egret.EventDispatcher));
__reflect(GameCommand.prototype, "GameCommand");
var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.data = null;
        return _this;
    }
    GameEvent.REWARDAD_CLOSE_EVENT = "REWARDAD_CLOSE_EVENT";
    GameEvent.PROP_NUM_CHANGE = "PROP_NUM_CHANGE";
    GameEvent.ADDMONEY = "ADDMONEY";
    return GameEvent;
}(egret.Event));
__reflect(GameEvent.prototype, "GameEvent");
var GameLogic = (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        var _this = _super.call(this) || this;
        /**成就数据 1:[10,20,30]	2:[{10:1},{20:3}] */
        _this.arrives = {};
        return _this;
    }
    GameLogic.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameLogic();
        }
        return this._instance;
    };
    GameLogic.prototype.init = function () {
        platform.checkVersion();
        SoundManager.getInstance().playBgSound(true);
        this.initData();
        this.getHiscore();
        //视频cd
        var cd = WxApi.getInstance().getStorage(GameConst.localdata_key_reward_cd);
        WxApi.getInstance().starttime = cd == null || cd == "" ? null : parseInt(cd);
        this.openStart(); //要放在initShareInfo之前，share可能有群排行点进来的
        WxApi.getInstance().initShareInfo();
    };
    GameLogic.prototype.openStart = function () {
        this.main.removeChildren();
        this.main.addChild(new StartUI());
    };
    GameLogic.prototype.getHiscore = function () {
        var s = WxApi.getInstance().getLocalData(PlayerConst.hiscore);
        PlayerConst.highestScore = s == null ? 0 : s;
    };
    GameLogic.prototype.initData = function () {
        if (this.data == null) {
            this.data = RES.getRes("config_json");
        }
        if (this.strings == null) {
            this.strings = RES.getRes("strings_json");
        }
        if (this.goods == null) {
            this.goods = RES.getRes("goods_json");
            //初始化商品
            var n = 1;
            while (true) {
                if (this.goods[n] == null) {
                    break;
                }
                else {
                    GameCommand.getInstance().bases.push(n);
                }
                n++;
            }
            //初始化称号
            this.titles = {};
            this.titles = this.goods['titles'];
            //初始化成就
            this.achieves = {};
            this.achieves = this.goods['dreams'];
            //初始化已达成成就
            this.arrives = WxApi.getInstance().getLocalData("newachieves");
            console.log("this.arrives:", this.arrives);
            if (this.arrives == null || this.arrives == "") {
                this.arrives = {};
            }
        }
    };
    /**获取称号 */
    GameLogic.prototype.getTitle = function () {
        var data = GameLogic.getInstance().titles;
        var titleId = "10";
        var titleobj;
        for (var id in data) {
            var o = data[id];
            var needs = o.need.split(":");
            var arivenum = 0;
            for (var i = 0; i < needs.length; i++) {
                var a = needs[i].split("_"); //0type 1value
                var type = parseInt(a[0]);
                var value = parseInt(a[1]);
                switch (type) {
                    case COINTYPE.MONEY:
                        if (DataBase.money >= value) {
                            arivenum++;
                        }
                        break;
                    case COINTYPE.FAME:
                        if (DataBase.fame >= value) {
                            arivenum++;
                        }
                        break;
                }
            }
            //全部达成
            if (arivenum == needs.length) {
                titleId = id;
            }
        }
        titleobj = data[titleId];
        //加入成就
        this.saveAchieve(ACHIVE.TITLE, titleId);
        return titleobj.name;
    };
    /**保存成就 1:[10,20,30]	2:[{10:1},{20:3}	3:[10,20]]
     * @param type  1达成类  2购买类  3称号
     * @param id
     * @param num 数量
    */
    GameLogic.prototype.saveAchieve = function (type, id, num) {
        if (num === void 0) { num = 1; }
        console.log("saveAchieve：", type, id, num);
        var arr = this.arrives[type];
        console.log("arr:", this.arrives, arr);
        if (arr == null) {
            arr = [];
        }
        var has = false;
        console.log("arr1:", arr);
        for (var key in arr) {
            if (id == arr[key].id) {
                has = true;
                arr[key].num += num;
            }
        }
        if (!has) {
            arr.push({ id: id, num: num });
        }
        // }
        this.arrives[type] = arr;
        WxApi.getInstance().setLocalDataByObject("newachieves", this.arrives);
    };
    /** 游戏结束保存达成类成就 */
    GameLogic.prototype.saveAchieveByGameOver = function () {
        for (var id in this.achieves) {
            var o = this.achieves[id];
            if (o.type == 1) {
                var n = 0;
                var arr = o.need.split(";");
                for (var i = 0; i < arr.length; i++) {
                    var a = arr[i].split("_");
                    var coinId = parseInt(a[0]);
                    var value = parseInt(a[1]);
                    var b = false;
                    switch (coinId) {
                        case COINTYPE.MONEY:
                            if (value >= DataBase.money) {
                                b = true;
                            }
                            break;
                        case COINTYPE.DEPT:
                            if (value == 0 && value == DataBase.debt) {
                                b = true;
                            }
                            else if (value > 0 && value >= DataBase.debt) {
                                b = true;
                            }
                            break;
                        case COINTYPE.FAME:
                            if (value >= DataBase.fame) {
                                b = true;
                            }
                            break;
                        case COINTYPE.DEPOSIT:
                            if (value >= DataBase.deposit) {
                                b = true;
                            }
                            break;
                        case COINTYPE.POW:
                            if (DataBase.pow >= value) {
                                b = true;
                            }
                            break;
                    }
                    if (b) {
                        n++;
                    }
                }
                if (n == arr.length) {
                    this.saveAchieve(ACHIVE.ARIVED, id);
                }
            }
        }
    };
    GameLogic.prototype.getArrives = function () {
        return this.arrives;
    };
    GameLogic.prototype.startGame = function () {
        this.main.removeChildren();
        WxApi.getInstance().watched = false;
        WxApi.getInstance().sharenum = 0;
        this.main.addChild(new GameUI());
    };
    /** 登录授权*/
    GameLogic.prototype.login = function () {
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        wx.login({
            success: function () {
                wx.getUserInfo({
                    fail: function (res) {
                        // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                        if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
                            // 处理用户拒绝授权的情况
                        }
                    }
                });
            }
        });
    };
    /**右上角转发 */
    GameLogic.prototype.showShareMenu = function () {
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        wx.showShareMenu();
        this.onShare("rightup=1");
    };
    /**主动转发
     * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
    */
    GameLogic.prototype.share = function (query) {
        if (query === void 0) { query = null; }
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        this.updateShareMenu(true);
        wx.shareAppMessage({
            title: '来苏州一起浮生吧啊啊啊啊啊啊啊啊啊啊啊啊',
            imageUrl: "resource/assets/img/qua_1.png",
            query: query
        });
    };
    /**监听用户点击右上角菜单的“转发”按钮时触发的事件
     * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
     */
    GameLogic.prototype.onShare = function (query) {
        if (query === void 0) { query = "rightup=1"; }
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        this.updateShareMenu(true);
        console.log("onShare:query:", query);
        wx.onShareAppMessage(function () {
            return {
                title: '右上角转发一起来苏州浮生吧',
                imageUrl: "resource/assets/img/qua_4.png",
                query: query
            };
        });
    };
    /**转发参数 */
    GameLogic.prototype.updateShareMenu = function (withShareTicket) {
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        console.log("updateShareMenu:", withShareTicket);
        wx.updateShareMenu({
            withShareTicket: withShareTicket,
            success: function (res) {
                console.log("updateShareMenu:success:", res);
            },
            fail: function (res) {
                console.log("updateShareMenu:fail:", res);
            },
            complete: function () {
                console.log("updateShareMenu:complete:");
            }
        });
    };
    GameLogic.prototype.openRank = function (shareticket) {
        if (shareticket === void 0) { shareticket = null; }
        this.main.addChild(new RankUI(shareticket));
    };
    /**获取好友排行榜数据 */
    GameLogic.prototype.openFriendRank = function (friend, shareTicket) {
        if (shareTicket === void 0) { shareTicket = ""; }
        this.isFriend = friend;
        //处理遮罩，避免开放数据域事件影响主域。
        if (this.rankingListMask == null) {
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.GameStage.width, this.GameStage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.8;
            this.rankingListMask.touchEnabled = true;
        }
        this.main.addChild(this.rankingListMask);
        //开放域主体
        var bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
        bitmapdata.$deleteSource = false;
        var texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        this.bitmap = new egret.Bitmap(texture);
        this.bitmap.width = this.GameStage.stageWidth;
        this.bitmap.height = this.GameStage.stageHeight;
        this.main.addChild(this.bitmap);
        //关闭按钮
        if (this.btn_rankclose == null) {
            this.btn_rankclose = new eui.Image();
            this.btn_rankclose.source = RES.getRes("qua_0_png");
            this.btn_rankclose.left = 20;
            this.btn_rankclose.bottom = 40;
            this.btn_rankclose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFriendRank, this);
        }
        this.main.addChild(this.btn_rankclose);
        //查看群排行
        if (this.btn_grouprank == null) {
            this.btn_grouprank = new eui.Image();
            this.btn_grouprank.source = RES.getRes(friend ? "qua_0_png" : "qua_1_png");
            this.btn_grouprank.right = 20;
            this.btn_grouprank.bottom = 40;
            this.btn_grouprank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGroupRank, this);
        }
        this.main.addChild(this.btn_grouprank);
        //
        egret.startTick(function (timeStarmp) {
            egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
            bitmapdata.webGLTexture = null;
            return false;
        }, this);
        console.log("postMessage:", this.userInfo);
        // //发送消息
        wx.getOpenDataContext().postMessage({
            head: friend ? "friend" : "group",
            userinfo: this.userInfo,
            shareTicket: shareTicket,
            open: true
        });
    };
    GameLogic.prototype.closeFriendRank = function () {
        this.bitmap && this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
        this.btn_rankclose && this.btn_rankclose.parent && this.btn_rankclose.parent.removeChild(this.btn_rankclose);
        this.btn_grouprank && this.btn_grouprank.parent && this.btn_grouprank.parent.removeChild(this.btn_grouprank);
        this.rankingListMask && this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
        //发送消息
        wx.getOpenDataContext().postMessage({
            head: "friend",
            open: false
        });
    };
    /**获取群内数据,实际上只是一个转发 */
    GameLogic.prototype.openGroupRank = function () {
        if (this.isFriend) {
            this.share("grouprank=1");
        }
        else {
            this.closeGroupRank();
        }
    };
    GameLogic.prototype.closeGroupRank = function () {
        this.closeFriendRank();
    };
    /** 对用户托管数据进行写数据操作，允许同时写多组 KV 数据
     * @param	KVDataList	要修改的 KV 数据列表
    */
    GameLogic.prototype.setUserCloudStorage = function () {
        var wx = window['wx'];
        if (wx == null) {
            return;
        }
        var KVDataList = [];
        var str = "";
        for (var i = 0; i < DataBase.achives.length; i++) {
            str += DataBase.achives[i];
            if (i < DataBase.achives.length) {
                str += ",";
            }
        }
        wx.setUserCloudStorage({
            KVDataList: [
                { key: "score", value: DataBase.money + "" },
                { key: "fame", value: DataBase.fame + "" },
                { key: "achives", value: str }
            ],
            success: function (res) {
                console.log("setUserCloudStorage:res:", res);
            },
            fail: function (err) {
                console.log("setUserCloudStorage:error:", err);
            },
            complete: function () {
                console.log("setUserCloudStorage:complete:");
            }
        });
    };
    /**删除游戏托管数据
     * @param keyList 要删除掉 key 列表
     */
    GameLogic.prototype.removeUserCloudStorage = function (keyList) {
        wx.removeUserCloudStorage()({
            keyList: keyList,
            success: function (res) {
                console.log("removeUserCloudStorage:res:", res);
            },
            fail: function (err) {
                console.log("removeUserCloudStorage:error:", err);
            },
            complete: function () {
                console.log("removeUserCloudStorage:complete:");
            }
        });
    };
    /**上报用户数据后台接口。小游戏可以通过本接口上报key-value数据到用户的CloudStorage。
     * @param	access_token	接口调用凭证
     * @param	openid	用户唯一标识符
     * @param	appid	小程序 appId
     * @param	signature	用户登录态签名，签名算法请参考用户登录态签名算法
     * @param	sig_method	用户登录态签名的哈希方法，如hmac_sha256等，请参考用户登录态签名算法
     * @param	kv_list	要上报的数据
    */
    GameLogic.prototype.setUserStorage = function (kv_list) {
        var access_token = "";
        var openid = "";
        var appid = "";
        var signature = "";
        var sig_method = "";
        //POST https://api.weixin.qq.com/wxa/set_user_storage?access_token=ACCESS_TOKEN&signature=SIGNATURE&openid=OPENID&sig_method=SIG_METHOD
    };
    return GameLogic;
}(egret.EventDispatcher));
__reflect(GameLogic.prototype, "GameLogic");
/**
 *
 * @author
 *
 */
var SoundManager = (function () {
    function SoundManager() {
        this.bg_position = 0;
        this.sound_switch = false;
        this.sound_effect_switch = false;
    }
    SoundManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SoundManager();
        }
        return this.instance;
    };
    /**打开/关闭背景音乐*/
    SoundManager.prototype.playBgSound = function (b) {
        this.sound_switch = b;
        if (b) {
            if (this.bgSound == null) {
                this.bgSound = RES.getRes("bg_mp3");
            }
            if (this.bgChannel != null) {
                this.bgChannel.stop();
                this.bgChannel = null;
            }
            this.bgChannel = this.bgSound.play(this.bg_position, 0);
            this.bgChannel.volume = 0.2;
        }
        else {
            if (this.bgChannel != null) {
                this.bg_position = this.bgChannel.position;
                this.bgChannel.stop();
                this.bgChannel = null;
            }
            else {
                this.bg_position = 0;
            }
        }
    };
    /**音效开关*/
    SoundManager.prototype.setSoundEffectSwitch = function (b) {
        this.sound_effect_switch = b;
    };
    /**播放音效*/
    SoundManager.prototype.playEffectSound = function (str) {
        if (str === void 0) { str = "sound_11_wav"; }
        if (!this.sound_effect_switch) {
            return;
        }
        var sound = RES.getRes(str);
        if (sound != null) {
            var channel = sound.play(0, 1);
            var obj = { s: sound, c: channel };
            var complete = function () {
                this.c.stop();
                this.c = null;
                this.s = null;
            };
            channel.addEventListener(egret.Event.SOUND_COMPLETE, complete, obj);
        }
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
var TimerManager = (function () {
    function TimerManager() {
        this.timerFunList = [];
        this.clipFrameStatus = true;
        this.frameList = [];
        this.init();
    }
    TimerManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TimerManager();
        }
        return this.instance;
    };
    /**添加每秒的时间回调
     * @param fun 回调的函数
     * @param _t this域
     * @param time 以秒为单位
     */
    TimerManager.prototype.addTimerCallBack = function (fun, _t, time) {
        if (time === void 0) { time = 1; }
        if (!this.checkHasCallBack(fun, _t)) {
            var timerVo = new TimerVo();
            timerVo.fun = fun;
            timerVo.time = time;
            timerVo.totalTime = time;
            timerVo.thisObj = _t;
            this.timerFunList.push(timerVo);
        }
    };
    /***
     * 检查是添加过相同的回调
     */
    TimerManager.prototype.checkHasCallBack = function (fun, _t) {
        for (var i = 0; i < this.timerFunList.length; i++) {
            var obj = this.timerFunList[i];
            if (fun == obj.fun && _t == obj.thisObj) {
                console.warn("on this same fun by TimerManager this: " + egret.getQualifiedClassName(_t) + ",fun:" + egret.getQualifiedClassName(fun) + ",please check!!!");
                return true;
            }
        }
        return false;
    };
    TimerManager.prototype.init = function () {
        var timer = new egret.Timer(1000);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFun, this);
        timer.start();
        GameLogic.getInstance().GameStage.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    };
    TimerManager.prototype.clipFrameChange = function () {
        if (this.clipFrameStatus) {
            GameLogic.getInstance().GameStage.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        }
        else {
            GameLogic.getInstance().GameStage.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
            GameLogic.getInstance().GameStage.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        }
        this.clipFrameStatus = !this.clipFrameStatus;
    };
    TimerManager.prototype.timerFun = function (e) {
        for (var i = 0; i < this.timerFunList.length; i++) {
            var timerVo = this.timerFunList[i];
            var fun = timerVo.fun;
            var t = timerVo.thisObj;
            timerVo.time--;
            if (timerVo.time <= 0) {
                timerVo.time = timerVo.totalTime;
                fun.call(t);
            }
        }
    };
    /**删除时间回调
     * fun 回调的函数
     * _t  执行回调函数的域
     */
    TimerManager.prototype.removeFun = function (f, _t) {
        for (var i = this.timerFunList.length - 1; i >= 0; i--) {
            var timerVo = this.timerFunList[i];
            var fun = timerVo.fun;
            var t = timerVo.thisObj;
            if (fun == f && _t == t) {
                this.timerFunList.splice(i, 1);
            }
        }
    };
    TimerManager.prototype.enterFrame = function () {
        var len = this.frameList.length;
        for (var i = 0; i < this.frameList.length; i++) {
            var vo = this.frameList[i];
            vo.fun.call(vo.thisObj);
        }
        //console.log("enter Frame count :" +len);
    };
    TimerManager.prototype.addEnterFrame = function (fun, thisobj) {
        var frame = new frameVo();
        frame.fun = fun;
        frame.thisObj = thisobj;
        this.frameList.push(frame);
    };
    TimerManager.prototype.removeEnterFrame = function (fun, thisobj) {
        var len = this.frameList.length;
        for (var i = 0; i < len; i++) {
            var vo = this.frameList[i];
            if (fun == vo.fun && thisobj == vo.thisObj) {
                this.frameList.splice(i, 1);
                break;
            }
        }
    };
    return TimerManager;
}());
__reflect(TimerManager.prototype, "TimerManager");
var TimerVo = (function () {
    function TimerVo() {
        this.totalTime = 0;
        this.time = 0;
    }
    return TimerVo;
}());
__reflect(TimerVo.prototype, "TimerVo");
var frameVo = (function () {
    function frameVo() {
    }
    return frameVo;
}());
__reflect(frameVo.prototype, "frameVo");
var DataBase = (function () {
    function DataBase() {
    }
    DataBase.saveFame = function (fame) {
        DataBase.fame = fame;
    };
    return DataBase;
}());
__reflect(DataBase.prototype, "DataBase");
var GameConst = (function () {
    function GameConst() {
    }
    /**web测试 0微信  1web本地 */
    GameConst.web = 1;
    GameConst.version = "201808181130";
    GameConst.coinstr = ["", "现金", "存款", "债务", "体力", "声望"];
    GameConst.rewardAdId = "adunit-24c9a10622c29f9e";
    GameConst.bannerAdId = "adunit-648e17f5764c7979";
    /** 缓存在本地的key */
    GameConst.localdata_key_reward_cd = "rewardadcd";
    GameConst.rewardCD = 180;
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
/** 分享类型 */
var SHARETYPE;
(function (SHARETYPE) {
    SHARETYPE[SHARETYPE["ACTIVE"] = 1] = "ACTIVE";
    SHARETYPE[SHARETYPE["SHOWOFF"] = 2] = "SHOWOFF";
    SHARETYPE[SHARETYPE["CRTSCORE"] = 3] = "CRTSCORE";
    SHARETYPE[SHARETYPE["PASSIVE"] = 4] = "PASSIVE";
    SHARETYPE[SHARETYPE["GROUPRANK"] = 5] = "GROUPRANK";
    SHARETYPE[SHARETYPE["SCREENSHOT"] = 6] = "SCREENSHOT";
    SHARETYPE[SHARETYPE["INVITE"] = 7] = "INVITE";
    SHARETYPE[SHARETYPE["INVITE_DAILY"] = 8] = "INVITE_DAILY";
})(SHARETYPE || (SHARETYPE = {}));
var ERROR;
(function (ERROR) {
    ERROR[ERROR["MONEY_NOT_ENOUGH"] = 1] = "MONEY_NOT_ENOUGH";
    ERROR[ERROR["STORE_NOT_ENOUGH"] = 2] = "STORE_NOT_ENOUGH";
    ERROR[ERROR["BUY_ZERO"] = 3] = "BUY_ZERO";
    ERROR[ERROR["SELL_ZERO"] = 4] = "SELL_ZERO";
    ERROR[ERROR["MARKET_NO_GOOD"] = 5] = "MARKET_NO_GOOD";
    ERROR[ERROR["MAX_STORE_NUM"] = 6] = "MAX_STORE_NUM";
    ERROR[ERROR["NEED_LICIENCE"] = 7] = "NEED_LICIENCE";
})(ERROR || (ERROR = {}));
var ACHIVE;
(function (ACHIVE) {
    ACHIVE[ACHIVE["ARIVED"] = 1] = "ARIVED";
    ACHIVE[ACHIVE["BUY"] = 2] = "BUY";
    ACHIVE[ACHIVE["TITLE"] = 3] = "TITLE";
})(ACHIVE || (ACHIVE = {}));
var COINTYPE;
(function (COINTYPE) {
    COINTYPE[COINTYPE["MONEY"] = 1] = "MONEY";
    COINTYPE[COINTYPE["DEPOSIT"] = 2] = "DEPOSIT";
    COINTYPE[COINTYPE["DEPT"] = 3] = "DEPT";
    COINTYPE[COINTYPE["POW"] = 4] = "POW";
    COINTYPE[COINTYPE["FAME"] = 5] = "FAME";
})(COINTYPE || (COINTYPE = {}));
var WATCHTYPE;
(function (WATCHTYPE) {
    WATCHTYPE[WATCHTYPE["NONE"] = 0] = "NONE";
    WATCHTYPE[WATCHTYPE["ADDMONEY"] = 1] = "ADDMONEY";
})(WATCHTYPE || (WATCHTYPE = {}));
var PlayerConst = (function () {
    function PlayerConst() {
    }
    PlayerConst.prop_num = 0;
    PlayerConst.hiscore = "hiscore";
    return PlayerConst;
}());
__reflect(PlayerConst.prototype, "PlayerConst");
var Int64 = (function () {
    function Int64(lowerUint, higherUint) {
        if (lowerUint === void 0) { lowerUint = 0; }
        if (higherUint === void 0) { higherUint = 0; }
        this._highValue = 0;
        this._lowValue = 0;
        /**
         * 缓存的字符串
         */
        this.cacheString = new Array();
        this._lowValue = lowerUint;
        this._highValue = higherUint;
    }
    Object.defineProperty(Int64.prototype, "higherUint", {
        /**
         * 高32位整型数字
         */
        get: function () {
            return this._highValue;
        },
        set: function (value) {
            if (this._highValue == value)
                return;
            this._highValue = value;
            this.cacheBytes = null;
            this.cacheString = [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Int64.prototype, "lowerUint", {
        /**
         * 低32位整型数字
         */
        get: function () {
            return this._lowValue;
        },
        set: function (value) {
            this._lowValue = value;
            if (this._lowValue == value)
                return;
            this.cacheBytes = null;
            this.cacheString = [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 从字符串生成数字
     * @param value 要转换为数字的字符串。
     * @param radix 要用于字符串到数字的转换的基数（从 2 到 36）。如果未指定 radix 参数，则默认值为 10。
     */
    Int64.prototype.fromString = function (value, radix) {
        if (radix === void 0) { radix = 10; }
        if (!value) {
            this.reset();
            return;
        }
        value = value.toLowerCase();
        var div = 4294967296;
        var low = 0;
        var high = 0;
        for (var i = 0; i < value.length; i++) {
            var num = value.charCodeAt(i) - 48;
            if (num > 9)
                num -= 39;
            low = low * radix + num;
            high = high * radix + (low / div >> 0);
            low = low % div;
        }
        this._lowValue = low;
        this._highValue = high;
        this.cacheString = [];
        this.cacheString[radix] = value;
        this.cacheBytes = null;
    };
    /**
     * 从字节流数组中读取uint64数字
     * @param bytes 包含64位无符号整型的字节流
     * @param postion 要从字节流中开始读取的偏移量
     */
    Int64.prototype.fromBytes = function (bytes, postion) {
        if (postion === void 0) { postion = 0; }
        try {
            bytes.position = postion;
            if (bytes.endian == egret.Endian.LITTLE_ENDIAN) {
                this._lowValue = bytes.readUnsignedInt();
                this._highValue = bytes.readUnsignedInt();
            }
            else {
                this._highValue = bytes.readUnsignedInt();
                this._lowValue = bytes.readUnsignedInt();
            }
        }
        catch (e) {
            this.reset();
            return;
        }
        this.cacheBytes = null;
        this.cacheString = [];
    };
    /**
     * 重置为0
     */
    Int64.prototype.reset = function () {
        this._highValue = 0;
        this._lowValue = 0;
        this.cacheBytes = null;
        this.cacheString = [];
    };
    /**
     * 克隆一个数字
     */
    Int64.prototype.clone = function () {
        return new Int64(this._lowValue, this._highValue);
    };
    Int64.prototype.copy = function (value) {
        this.reset();
        this._lowValue = value._lowValue;
        this._highValue = value._highValue;
    };
    Int64.prototype.cloneTo = function (value) {
        if (value == null) {
            value = new Int64();
        }
        value.copy(this);
        return value;
    };
    Int64.prototype.equals = function (value) {
        if (value == null)
            return false;
        return this._highValue == value._highValue && this._lowValue == value._lowValue;
    };
    Object.defineProperty(Int64.prototype, "bytes", {
        /**
         * 返回数字的字节流数组形式,存储方式为Endian.LITTLE_ENDIAN。
         */
        get: function () {
            if (this.cacheBytes)
                return this.cacheBytes;
            this.cacheBytes = new egret.ByteArray();
            this.cacheBytes.endian = egret.Endian.LITTLE_ENDIAN;
            this.cacheBytes.writeUnsignedInt(this._lowValue);
            this.cacheBytes.writeUnsignedInt(this._highValue);
            return this.cacheBytes;
        },
        enumerable: true,
        configurable: true
    });
    Int64.prototype.toNumber = function () {
        var value = this.toString();
        return value == "" ? 0 : parseInt(value);
    };
    /**
     * 返回数字的字符串表示形式。
     * @param radix 指定要用于数字到字符串的转换的基数（从 2 到 36）。如果未指定 radix 参数，则默认值为 10。
     */
    Int64.prototype.toString = function (radix) {
        if (radix === void 0) { radix = 10; }
        if (radix < 2 || radix > 36) {
            throw new RangeError("基数参数必须介于 2 到 36 之间；当前值为 " + radix + "。");
        }
        if (this.cacheString[radix])
            return this.cacheString[radix];
        var result = "";
        var lowUint = this._lowValue;
        var highUint = this._highValue;
        var highRemain;
        var lowRemain;
        var tempNum;
        var MaxLowUint = Math.pow(2, 32);
        while (highUint != 0 || lowUint != 0) {
            highRemain = (highUint % radix);
            tempNum = highRemain * MaxLowUint + lowUint;
            lowRemain = tempNum % radix;
            result = lowRemain.toString(radix) + result;
            highUint = (highUint - highRemain) / radix;
            lowUint = (tempNum - lowRemain) / radix;
        }
        this.cacheString[radix] = result == "" ? "0" : result;
        return this.cacheString[radix];
    };
    Int64.prototype.parseData = function (data) {
        this._highValue = data.readUnsignedInt();
        this._lowValue = data.readUnsignedInt();
    };
    Int64.prototype.toData = function (data) {
        data.writeUnsignedInt(this._highValue);
        data.writeUnsignedInt(this._lowValue);
    };
    Int64.prototype.gc = function () {
        this.cacheBytes = null;
        this.cacheString = null;
    };
    return Int64;
}());
__reflect(Int64.prototype, "Int64");
var msgGoodsBuyRsp = (function () {
    function msgGoodsBuyRsp() {
        this.goods = [];
    }
    return msgGoodsBuyRsp;
}());
__reflect(msgGoodsBuyRsp.prototype, "msgGoodsBuyRsp");
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var msgLifeDataRsp = (function () {
    function msgLifeDataRsp() {
        /**体力 */
        this.dwPow = 0;
        /**欠债 */
        this.dwDebt = 0;
        /**当前天数 */
        this.dwTimes = 0;
        /**房屋大小 */
        this.dwMaxStoreNum = 0;
        /**名声 */
        this.dwFame = 0;
    }
    return msgLifeDataRsp;
}());
__reflect(msgLifeDataRsp.prototype, "msgLifeDataRsp");
var varGoods = (function () {
    function varGoods() {
        this.dwID = 0;
        // required unumber32 dwPrice = 3;
        this.dwPrice = 0;
        // optional unumber32 dwNum = 4;
        this.dwNum = 0;
    }
    return varGoods;
}());
__reflect(varGoods.prototype, "varGoods");
/**
 * 数值公式
 *
 */
var Formula = (function () {
    function Formula() {
    }
    /**每天结算----债务 */
    Formula.getDebt = function (old) {
        return Math.floor(old * 1.15);
    };
    /**每天结算----银行利息 */
    Formula.getDeposit = function (old) {
        return Math.floor(DataBase.deposit * 1.04);
    };
    /**每日其他事件几率 */
    Formula.getOtherEvent = function () {
        var o;
        var b = Math.random() < 0.1;
        if (b) {
            o = {};
            var a = Math.floor(Math.random() * 4) + 1;
            var b_1 = Math.random() < 0.5 ? 1 : 2;
            var c = Math.floor(Math.random() * 3) + 1;
            o['a'] = a;
            o['b'] = b_1;
            o['c'] = c;
        }
        return o;
    };
    /**market商品的价格第一次随机概率 ：上下限浮动概率 */
    Formula.getRandom1 = function () {
        var r = Math.random();
        if (r < 0.1) {
            var i = Math.floor(Math.random() * 3);
            return Formula.diss1[i];
        }
        else {
            return 1;
        }
    };
    /**market商品的价格第二次随机概率正负 ：后续价格比正常价格是否增加 */
    Formula.isAdd = function () {
        return Math.random() < 0.5;
    };
    /**market商品的价格第二次随机概率 ：上下浮动offset */
    Formula.getRandom2 = function () {
        return Math.random() * 0.2;
    };
    /**market商品的价格第三次次随机是否出现特殊事件 */
    Formula.apperEvent = function () {
        return Math.random() < 0.05;
    };
    /**market商品的价格第三次次随机出现特殊事件的翻倍数 */
    Formula.getRandom3 = function () {
        var i = Math.floor(Math.random() * 4);
        return Formula.diss2[i];
    };
    Formula.diss1 = [0.3, 3, 8];
    Formula.diss2 = [0.1, 0.2, 5, 10];
    return Formula;
}());
__reflect(Formula.prototype, "Formula");
var StringUtil = (function () {
    function StringUtil() {
    }
    /**
     * 带文本替换功能的字符串：返回富文本
     * @param StrID
     * @param valArr
     * @return
     */
    StringUtil.getSwfLangTextFlowVar = function (StrID, valArr) {
        return new egret.HtmlTextParser().parser(StringUtil.getSwfLangStrVar(StrID, valArr));
    };
    StringUtil.getSwfLangStrVarByID = function (StrID, valArr) {
        if (GameLogic.getInstance().strings == null) {
            return StrID;
        }
        var data = GameLogic.getInstance().strings[StrID];
        if (data == null) {
            return StrID;
        }
        return StringUtil.getSwfLangStrVar(data, valArr);
    };
    /**
     * 带文本替换功能的字符串
     * @param StrID
     * @param valArr
     * @return
     */
    StringUtil.getSwfLangStrVar = function (strData, valArr) {
        var indexpre;
        var indexback;
        var strget;
        indexpre = strData.indexOf("{");
        indexback = strData.indexOf("}");
        //下一次搜索的起始偏移量,防止{@}嵌套时，造成死循环
        var nextOffset = 0;
        var firstIndex;
        var strFlagPre;
        var strFlagBack;
        var strFlag;
        while (indexpre != -1 && indexback != -1) {
            strget = strData.substring(indexpre, indexback + 1);
            firstIndex = strData.indexOf("@", nextOffset);
            //var number: int = int(strData.charAt(strData.indexOf("@", nextOffset) + 1));
            var numberic = parseInt(strData.substring(firstIndex + 1, strData.indexOf(":", firstIndex))) - 1;
            if (numberic == NaN) {
                return "stringError:" + strData;
            }
            //处理填充字符串参数（如果有）
            strFlagPre = strData.indexOf("!#[", nextOffset) + 3;
            if (strFlagPre > 2) {
                //前缀{!#[PeerageRank_]@0:}
                strFlagBack = strData.indexOf("]@", nextOffset);
                strFlag = strData.substring(strFlagPre, strFlagBack);
                valArr[numberic] = StringUtil.getSwfLangStr(strFlag + valArr[numberic]);
            }
            var strreplace = valArr[numberic].toString();
            strData = strData.replace(strget, strreplace);
            nextOffset = indexpre + strreplace.length;
            indexpre = strData.indexOf("{", nextOffset);
            indexback = strData.indexOf("}", nextOffset);
        }
        return strData;
    };
    /**
     * 获取配置好的字符串
     * @param StrID
     * @return
     *
     */
    StringUtil.getSwfLangStr = function (StrID) {
        if (GameLogic.getInstance().strings == null) {
            return StrID;
        }
        var data = GameLogic.getInstance().strings[StrID];
        if (data == null) {
            return StrID;
        }
        return data.toString();
    };
    /**对数组乱序 */
    StringUtil.shuffle = function (a) {
        var b = a.slice();
        var c = [];
        while (true) {
            var i = Math.floor(Math.random() * b.length);
            c.push(b[i]);
            b.splice(i, 1);
            if (b.length == 0) {
                break;
            }
        }
        return c;
    };
    return StringUtil;
}());
__reflect(StringUtil.prototype, "StringUtil");
var WxApi = (function (_super) {
    __extends(WxApi, _super);
    function WxApi() {
        var _this = _super.call(this) || this;
        _this.watched = false;
        _this.sharenum = 0;
        /** ------------------------------- 分享 -------------------------------------------------------  */
        _this.titlestr = ["我来苏州40天就买了3套房，你也试试？",
            "阳澄湖大闸蟹上市了，不想尝尝吗",
            "苏州园林甲江南 江南园林甲天下，苏州欢迎您",
            "迪士尼太远，来苏州乐园，苏州欢迎您",
            "是松鼠桂鱼还是松鼠鳜鱼，点击试吃"];
        return _this;
    }
    WxApi.getInstance = function () {
        if (this._instance == null) {
            this._instance = new WxApi();
        }
        return this._instance;
    };
    /**初始化 */
    WxApi.prototype.init = function () {
        if (GameConst.web == 1) {
            GameLogic.getInstance().init();
        }
        else {
            this.login();
        }
    };
    /**检测wx是否启用 */
    WxApi.prototype.checkWx = function () {
        var wx = window['wx'];
        return wx != null;
    };
    /**是否新玩家，新手引导 */
    WxApi.prototype.isNew = function () {
        var isnew = this.getLocalData("newhand");
        if (isnew == null) {
            this.setLocalDataByString("newhand", "notnew");
            return true;
        }
        return false;
    };
    /**系统提示 */
    WxApi.prototype.showToast = function (str) {
        if (!this.checkWx()) {
            return;
        }
        wx.showToast({
            title: str
        });
    };
    /**主动转发
     * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
    */
    WxApi.prototype.share = function (query) {
        if (query === void 0) { query = null; }
        if (!this.checkWx()) {
            return;
        }
        this.updateShareMenu(true);
        var querystr = query == null ? WxApi.getInstance().shareInfo.query : query;
        var i = Math.floor(Math.random() * this.titlestr.length);
        WxApi.getInstance().shareInfo.share_game_title = this.titlestr[i];
        WxApi.getInstance().shareInfo.share_game_img = "resource/assets/img/share" + i + ".jpg";
        wx.shareAppMessage({
            title: WxApi.getInstance().shareInfo.share_game_title,
            imageUrl: WxApi.getInstance().shareInfo.share_game_img,
            query: querystr,
            success: function (res) {
            }
        });
    };
    /**分享
     * @param type fw.SHARETYPE.XXX分享类型 1主动分享  2炫耀  3当前分数 4被动分享 5群排行
     */
    WxApi.prototype.sharenew = function (type, title, img) {
        if (type === void 0) { type = 1; }
        if (title === void 0) { title = null; }
        if (img === void 0) { img = null; }
        var query = "";
        switch (type) {
            case SHARETYPE.ACTIVE:
                this.share();
                break;
            case SHARETYPE.SHOWOFF:
                platform.share(title, img, null);
                break;
            case SHARETYPE.CRTSCORE:
                platform.share(title, "resource/assets/share.jpg", query);
                break;
            case SHARETYPE.PASSIVE:
                platform.showShareMenu();
                platform.updateShareMenu(true);
                platform.onShareAppMessage("每天练习5分钟，提高孩子注意力", "resource/assets/share.jpg", query);
                break;
            case SHARETYPE.GROUPRANK:
                query = "&grouprank=1";
                platform.share("每天练习5分钟，提高孩子注意力", "resource/assets/share.jpg", query);
                break;
            case SHARETYPE.INVITE:
                platform.share("玩了舒尔特方格，我上课注意力变的集中了，你也来试试吧", "resource/assets/share.jpg", query);
                break;
            case SHARETYPE.INVITE_DAILY:
                break;
        }
    };
    /**右上角转发 */
    WxApi.prototype.initShareInfo = function (info) {
        if (info === void 0) { info = null; }
        if (info == null) {
            info = { share_game_title: "我来苏州40天就买了3套房，来苏州玩玩？", share_game_img: "resource/assets/img/share.jpg", query: "" };
        }
        this.shareInfo = info;
        if (!this.checkWx()) {
            return;
        }
        console.log("initShareInfo:", info);
        wx.showShareMenu();
        this.onShare();
        this.initRewardVideoAd();
        this.checkShareInfo();
    };
    /**点击别人转发进来的 ，获取shareTicket*/
    WxApi.prototype.checkShareInfo = function () {
        console.log("checkShareInfo");
        if (!this.checkWx()) {
            return;
        }
        var info = wx.getLaunchOptionsSync();
        console.log("info:", info);
        //如果是从群里点开的
        if (info != null && info.shareTicket != null && info.shareTicket != "") {
            //查看群排行
            if (info.query != null && info.query.grouprank == "1") {
                wx.getShareInfo({
                    shareTicket: info.shareTicket,
                    success: function (res) {
                        console.log("getShareInfo:success:", res);
                        GameLogic.getInstance().openRank(info.shareTicket);
                    },
                    fail: function (res) {
                        console.log("getShareInfo:fail:", res);
                    },
                    complete: function () {
                        console.log("getShareInfo:complete:");
                    }
                });
            }
        }
    };
    /** true 不显示  false 显示 */
    WxApi.prototype.checkVersion = function () {
        var time = new Date().getTime();
        var vtime = 1543037708162 + 1000 * 3600 * 20;
        return time < vtime;
    };
    /**监听用户点击右上角菜单的“转发”按钮时触发的事件
     * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
     */
    WxApi.prototype.onShare = function (query) {
        if (query === void 0) { query = "rightup=1"; }
        if (!this.checkWx()) {
            return;
        }
        this.updateShareMenu(true);
        var querystr = query == null ? WxApi.getInstance().shareInfo.query : query;
        console.log("onShareAppMessage:", this.shareInfo);
        wx.onShareAppMessage(function () {
            return {
                title: WxApi.getInstance().shareInfo.share_game_title,
                imageUrl: WxApi.getInstance().shareInfo.share_game_img,
                query: querystr
            };
        });
    };
    /** 更新转发参数 */
    WxApi.prototype.updateShareMenu = function (withShareTicket) {
        if (!this.checkWx()) {
            return;
        }
        console.log("updateShareMenu:withShareTicket:", withShareTicket);
        wx.updateShareMenu({
            withShareTicket: withShareTicket,
            success: function (res) {
                console.log("updateShareMenu:success:", res);
            },
            fail: function (res) {
                console.log("updateShareMenu:fail:", res);
            },
            complete: function () {
                console.log("updateShareMenu:complete:");
            }
        });
    };
    /** -------------------------------------- 一些本地数据 --------------------------------------------------- */
    /** 对用户托管数据进行写数据操作，允许同时写多组 KV 数据
    * @param	KVDataList	要修改的 KV 数据列表
   */
    WxApi.prototype.setHigherScore = function (v) {
        //0不计入
        if (v <= 0) {
            return;
        }
        if (!this.checkWx()) {
            return;
        }
        var n = PlayerConst.highestScore;
        if (v <= n) {
            return;
        }
        PlayerConst.highestScore = v;
        this.setLocalDataByString(PlayerConst.hiscore, v + "");
        var KVDataList = [];
        wx.setUserCloudStorage({
            KVDataList: [
                { key: "score", value: v + "" },
                { key: "date", value: new Date().getTime().toString() }
            ],
            success: function (res) {
                console.log("setUserCloudStorage:res:", res);
            },
            fail: function (err) {
                console.log("setUserCloudStorage:error:", err);
            },
            complete: function () {
                console.log("setUserCloudStorage:complete:");
            }
        });
    };
    /**------------------------------------------ 读写删 本地数据 -----------------------------------------*/
    /**存取本地数据 */
    WxApi.prototype.setLocalDataByObject = function (key, obj) {
        this.setLocalDataByString(key, obj);
    };
    /**存取本地数据 */
    WxApi.prototype.setLocalDataByString = function (key, value) {
        if (!this.checkWx()) {
            return null;
        }
        try {
            return wx.setStorageSync(key, value);
        }
        catch (e) {
            return null;
        }
    };
    /**读取本地数据 */
    WxApi.prototype.getLocalData = function (key) {
        if (!this.checkWx()) {
            return null;
        }
        try {
            return wx.getStorageSync(key);
            ;
        }
        catch (e) {
            return null;
        }
    };
    /**删除缓存 */
    WxApi.prototype.clearLocalData = function (key) {
        if (!this.checkWx()) {
            return null;
        }
        try {
            return wx.clearStorageSync(key);
        }
        catch (e) {
            return null;
        }
    };
    /** ------------------------------------- 待完善 ------------------------------ */
    WxApi.prototype.toast = function (str) {
        if (!this.checkWx()) {
            return null;
        }
        wx.showToast({
            title: str
        });
    };
    /**登录 */
    WxApi.prototype.login = function () {
        var _this = this;
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        wx.login({
            success: function (res) {
                console.log("wxloginsuccess:", res);
                _this.logincode = res['code'];
                GameLogic.getInstance().init();
            },
            fail: function () {
            },
            complete: function () {
            },
        });
    };
    WxApi.prototype.drawBMP = function () {
        var con = new egret.DisplayObjectContainer();
        var result = new egret.Bitmap();
        var texture = RES.getRes("over_json.game_over_share");
        result.texture = texture;
        con.addChild(result);
        // let img_head = new eui.Image();
        // img_head.source = WxApi.getInstance().userInfo.avatarUrl;
        // img_head.smoothing = true;
        // img_head.width = img_head.height = 50;
        // img_head.x = (con.width - 50) >> 1;
        // img_head.y = 260;
        // con.addChild(img_head);
        // let circle: egret.Shape = new egret.Shape();
        // circle.graphics.beginFill(0x000000);
        // circle.graphics.drawCircle(0, 0, 25);
        // circle.graphics.endFill();
        // circle.x = (con.width - circle.width) >> 1;
        // circle.y = img_head.y;
        // con.addChild(circle);
        // img_head.mask = circle;
        var lbl_name = new egret.TextField();
        // lbl_name.text = WxApi.getInstance().userInfo.nickName;
        lbl_name.width = 200;
        lbl_name.height = 24;
        lbl_name.size = 24;
        lbl_name.textAlign = "center";
        lbl_name.fontFamily = "SimHei";
        lbl_name.x = (con.width - lbl_name.width) >> 1;
        lbl_name.y = 310;
        con.addChild(lbl_name);
        var tf_score = new egret.TextField();
        tf_score.text = PlayerConst.highestScore + "分";
        tf_score.width = 300;
        tf_score.height = 24;
        tf_score.size = 40;
        tf_score.textAlign = "center";
        tf_score.fontFamily = "SimHei";
        tf_score.x = (con.width - tf_score.width) >> 1;
        tf_score.y = 352;
        con.addChild(tf_score);
        var trrrr = new egret.RenderTexture();
        trrrr.drawToTexture(con);
        return new egret.Bitmap(trrrr);
    };
    // 	let shareinfo = {
    // 	share_game_img: setting.share_game_img,
    // 	share_game_title: setting.share_game_title,
    // 	share_group_img: setting.share_group_img,
    // 	share_group_title: setting.share_group_title,
    // 	share_show_img: setting.share_show_img,
    // 	share_show_title: setting.share_show_title,
    // 	query: "",
    // };
    /**联系客服 */
    WxApi.prototype.feedBack = function () {
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        wx.openCustomerServiceConversation({
            success: function (res) {
                console.log("success:", res);
            },
            fail: function (res) {
                console.log("fail:", res);
            },
            complete: function (res) {
                console.log("complete:", res);
            }
        });
    };
    /**banner广告 */
    WxApi.prototype.showBanner = function () {
        console.log("系统信息：", wx.getSystemInfoSync());
        if (this.bannerAd == null) {
            var phoneWidth = wx.getSystemInfoSync().screenWidth; //手机屏幕宽度
            var phoneHeight = wx.getSystemInfoSync().screenHeight; //手机屏幕高度
            this.bannerAd = wx.createBannerAd({
                adUnitId: 'adunit-465b0f38397b8e3f',
                style: {
                    left: 10,
                    top: phoneHeight - 100,
                    width: phoneWidth - 20,
                }
            });
        }
        if (this.bannerAd != null) {
            this.bannerAd.onLoad(function () {
                console.log('banner 广告加载成功');
            });
            this.bannerAd.show();
        }
    };
    WxApi.prototype.hideBanner = function () {
        if (this.bannerAd != null) {
            this.bannerAd.hide();
        }
    };
    /** 预加载激励视频 */
    WxApi.prototype.initRewardVideoAd = function () {
        var _this = this;
        var wx = window["wx"];
        if (wx == null) {
            return;
        }
        this.rewardAd = wx.createRewardedVideoAd({ adUnitId: GameConst.rewardAdId });
        this.rewardAd.onLoad(function () {
            console.log('激励视频 广告加载成功');
        });
        this.rewardAd.onError(function (err) {
            platform.toast("广告拉取失败，请稍后尝试");
        });
        this.rewardAd.onClose(function (res) {
            // 用户点击了【关闭广告】按钮
            var state;
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                state = 0;
                _this.rewardAdCDStart();
            }
            else {
                // 播放中途退出，不下发游戏奖励
                state = 1;
                _this.rewardAdCDStart();
            }
            _this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, state);
        });
    };
    /** 观看视频 关闭视频监听GameEvent.REWARDAD_CLOSE_EVENT
     * @param type 观看视频来源类型 WATCHTYPE.XXXX
     */
    WxApi.prototype.showRewardAd = function (type) {
        var _this = this;
        this.adtype = type;
        if (this.rewardAd != null) {
            try {
                this.rewardAd.show()
                    .catch(function (err) {
                    _this.toast("广告加载失败");
                    _this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, 2);
                });
            }
            catch (e) {
                this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, 2);
            }
        }
        else {
            this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, 2);
        }
    };
    WxApi.prototype.dispatchGameEvent = function (eventname, data) {
        console.log("dispatchGameEvent:", eventname, this.adtype, data);
        if (eventname == GameEvent.REWARDAD_CLOSE_EVENT && data == 2) {
            platform.toast("暂无视频可观看，过会再来看看吧");
        }
        var event = new GameEvent(eventname);
        event.data = { type: this.adtype, data: data };
        this.dispatchEvent(event);
    };
    WxApi.prototype.rewardAdCDStart = function () {
        this.starttime = new Date().getTime();
        this.setStorage(GameConst.localdata_key_reward_cd, this.starttime + "");
    };
    WxApi.prototype.getRewardCD = function () {
        var nowtime = new Date().getTime();
        if (this.starttime == null) {
            return 0;
        }
        else {
            return GameConst.rewardCD - Math.floor((nowtime - this.starttime) / 1000);
        }
    };
    /** 存储本地数据
     * @param key
     * @param value   string|obj
     * @param isobj 是否为obj，本地缓存数据时需要用，微信不需要
     */
    WxApi.prototype.setStorage = function (key, value, isobj) {
        if (isobj === void 0) { isobj = false; }
        platform.setStorageSync(key, value, isobj);
    };
    /** 获取本地缓存
     * @param key
     * @param isobj 是否为obj，本地缓存数据时需要用，微信不需要
     * @return 如果没有 返回空字符串 ""
     */
    WxApi.prototype.getStorage = function (key, isobj) {
        if (isobj === void 0) { isobj = false; }
        return platform.getStorageSync(key, isobj);
    };
    /**跳转到其他小程序 */
    WxApi.prototype.skipToProgram = function () {
        try {
            wx.navigateToMiniProgram({
                appId: "wx5ccf73a5edb50795",
                extraData: "qiuqiu",
                success: function (res) {
                    console.log("navigateToMiniProgram:", res);
                },
                fail: function (err) {
                    console.log("navigateToMiniProgram:error:", err);
                },
                complete: function () {
                    console.log("navigateToMiniProgram:complete:");
                }
            });
        }
        catch (e) {
            wx.showToast({
                title: '该功能暂未开放',
                icon: 'none',
                duration: 2000
            });
        }
    };
    /**给开放域发消息 */
    WxApi.prototype.postToDataContext = function (data) {
        if (wx == null) {
            return;
        }
        console.log("postToDataContext", data);
        wx.getOpenDataContext().postMessage(data);
    };
    return WxApi;
}(egret.EventDispatcher));
__reflect(WxApi.prototype, "WxApi");
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
var AchieveVO = (function () {
    function AchieveVO() {
    }
    return AchieveVO;
}());
__reflect(AchieveVO.prototype, "AchieveVO");
var AchiveItemUI = (function (_super) {
    __extends(AchiveItemUI, _super);
    function AchiveItemUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "AchieveItemSkin";
        return _this;
    }
    AchiveItemUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initView();
        this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuy, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    AchiveItemUI.prototype.initView = function () {
        var vo = this.data;
        if (vo == null) {
            return;
        }
        this.lbl_name.text = vo.content;
        this.lbl_have.text = (vo.type == 1 || vo.type == 3 ? "已达成：" : "已拥有：") + vo.have + "次";
        var needstr = "需要：";
        for (var i = 0; i < vo.need.length; i++) {
            var o = vo.need[i];
            needstr += GameConst.coinstr[o.id] + o.value + "  ";
        }
        this.lbl_need.text = needstr;
        if (vo.type == 1 || vo.type == 3) {
            this.btn_buy.label = vo.state == 0 ? "未达成" : (vo.state == 1 ? "已达成" : "购买");
        }
        else {
            this.btn_buy.label = vo.state == 0 ? "未达成" : (vo.state == 1 ? "已达成" : "购买");
        }
        this.btn_buy.touchEnabled = vo.state == 2;
    };
    AchiveItemUI.prototype.dataChanged = function () {
        this.initView();
    };
    AchiveItemUI.prototype.clickBuy = function () {
        var vo = this.data;
        var arrives = 0;
        var coins = [DataBase.money, DataBase.deposit, DataBase.debt, DataBase.pow, DataBase.fame];
        for (var i = 0; i < vo.need.length; i++) {
            var o = vo.need[i];
            var index = o.id - 1;
            if (coins[index] >= o.value) {
                arrives++;
            }
        }
        if (arrives == vo.need.length) {
            var type = vo.type;
            GameLogic.getInstance().saveAchieve(type, vo.id, 1);
            for (var i = 0; i < vo.need.length; i++) {
                var o = vo.need[i];
                if (o.id == COINTYPE.MONEY) {
                    DataBase.money -= o.value;
                    if (GameLogic.getInstance().achieveui != null) {
                        GameLogic.getInstance().achieveui.updateCoin();
                    }
                }
            }
            this.data['have'] = vo.have + 1;
            this.lbl_have.text = "已拥有：" + vo.have;
        }
    };
    AchiveItemUI.prototype.clear = function () {
        this.btn_buy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuy, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    return AchiveItemUI;
}(eui.ItemRenderer));
__reflect(AchiveItemUI.prototype, "AchiveItemUI");
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameSkin";
        return _this;
    }
    GameUI.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.checkFit();
        GameLogic.getInstance().gameui = this;
        this.market_arr = [];
        this.store_arr = [];
        this.eventlist = [];
        this.initView();
        this.initEvent();
        GameCommand.getInstance().startGame();
        this.checkNewHand();
        egret.lifecycle.onPause = function () {
            console.log("onPause:", WxApi.getInstance().sharenum);
        };
        egret.lifecycle.onResume = function () {
            console.log("onResume:", WxApi.getInstance().sharenum);
            if (WxApi.getInstance().sharenum == 1) {
                _this.addMoneyreal();
            }
            else if (WxApi.getInstance().sharenum == 3) {
                _this.addMoneyreal();
                WxApi.getInstance().sharenum++;
            }
            else if (WxApi.getInstance().sharenum == 2) {
                platform.toast("请分享到不同的群");
            }
        };
    };
    GameUI.prototype.checkFit = function () {
        this.rect_bg.height = this.img_over_bg0.height = this.img_over_bg1.height =
            this.rect_evt.height = GameLogic.getInstance().GameStage.stageHeight;
    };
    GameUI.prototype.checkNewHand = function () {
        if (WxApi.getInstance().isNew()) {
            this.addChild(new NewGuild());
        }
    };
    /**出现事件 */
    GameUI.prototype.eventAppear = function (str) {
        if (GameLogic.getInstance().cbSelected) {
            return;
        }
        if (this.eventpoping) {
            this.eventlist.push(str);
            return;
        }
        this.popEvent(str);
    };
    GameUI.prototype.eventNext = function () {
        this.eventpoping = false;
        var b = this.cb_0.selected;
        if (b) {
            this.eventlist = [];
            this.pop(0);
            GameLogic.getInstance().cbSelected = b;
        }
        else {
            if (this.eventlist.length > 0) {
                var str = this.eventlist.shift();
                this.popEvent(str);
            }
            else {
                this.pop(0);
            }
        }
    };
    GameUI.prototype.popEvent = function (str) {
        this.eventpoping = true;
        this.pop(11);
        this['lbl_event_1'].text = str;
    };
    /**刷新基本数据*/
    GameUI.prototype.initData = function (msg) {
        this.data = msg;
        this.setLeft();
        this.lbl_1.text = this.data.dwMoney.toString();
        this.lbl_2.text = this.data.dwDeposit.toString();
        this.lbl_3.text = this.data.dwDebt.toString();
        this.lbl_4.text = this.data.dwPow.toString();
        this.lbl_5.text = this.data.dwFame.toString();
        var maxday = GameLogic.getInstance().data['maxday'];
        this.lbl_day.text = (maxday - this.data.dwTimes) + "/" + maxday + "天";
    };
    GameUI.prototype.setLeft = function () {
        var n = this.getStoreNum();
        this.leftStore = this.data.dwMaxStoreNum - n;
        this.lbl_store.text = n + "/" + this.data.dwMaxStoreNum;
    };
    GameUI.prototype.getStoreNum = function () {
        var n = 0;
        for (var i = 0; i < this.store_arr.length; i++) {
            var item = this.store_arr[i];
            n += item.good.dwNum;
        }
        return n;
    };
    /**刷新商店*/
    GameUI.prototype.initMarket = function (msg) {
        this.clearMarket();
        var storeuparr = [];
        for (var i = 0; i < msg.goods.length; i++) {
            var item = new MarketItem(msg.goods[i]);
            item.y = (item.height + 2) * i;
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickMarketItem, this);
            this.market_arr.push(item);
            this.gp_market.addChild(item);
            for (var j = 0; j < this.store_arr.length; j++) {
                var storeItem = this.store_arr[j];
                var g = storeItem.good;
                if (g != null && g.dwID == item.good.dwID) {
                    item.same(true);
                    if (g.dwPrice < msg.goods[i].dwPrice) {
                        storeuparr.push(g.dwID);
                    }
                    break;
                }
            }
        }
        //store里面加个高的出箭头
        for (var j = 0; j < this.store_arr.length; j++) {
            var storeItem = this.store_arr[j];
            var bool = storeuparr.indexOf(storeItem.good.dwID) != -1;
            storeItem.upState(bool);
        }
    };
    GameUI.prototype.clickMarketItem = function (e) {
        var item = e.currentTarget;
        if (this.crtMarketItem != null) {
            this.crtMarketItem.select = false;
        }
        this.crtMarketItem = item;
        this.crtMarketItem.select = true;
        this.pop(9);
        var max = Math.floor(this.data.dwMoney / item.good.dwPrice);
        this.max_num = max > this.leftStore ? this.leftStore : max;
        this['lbl_buy_1'].text = item.good.strName;
        this['lbl_num6'].text = this.max_num + "";
    };
    /**刷新我的商品*/
    GameUI.prototype.initStore = function (msg) {
        this.clearStore();
        for (var i = 0; i < msg.goods.length; i++) {
            var item = new StoreItem(msg.goods[i]);
            item.y = (item.height + 2) * i;
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStoreItem, this);
            this.store_arr.push(item);
            this.gp_store.addChild(item);
        }
        this.setLeft();
    };
    GameUI.prototype.clickStoreItem = function (e) {
        var item = e.currentTarget;
        if (this.crtStoreItem != null) {
            this.crtStoreItem.select = false;
        }
        this.crtStoreItem = item;
        this.crtStoreItem.select = true;
        this.pop(10);
        this.max_num = this.crtStoreItem.good.dwNum;
        this['lbl_sell_1'].text = item.good.strName;
        this['lbl_num7'].text = this.max_num + "";
    };
    /**我的商品里有价格上涨的时候显示箭头
     * @param arr 一组id
     */
    GameUI.prototype.storeUp = function (arr) {
    };
    /**结算 */
    GameUI.prototype.over = function () {
        platform.bannershow(GameConst.bannerAdId);
        this['gp_over'].visible = true;
        var str = "";
        if (this.data.dwPow <= 0) {
            str += StringUtil.getSwfLangStr("s20") + "\n";
            this['btn_27'].visible = false;
        }
        else {
            str += StringUtil.getSwfLangStr("s11") + "\n";
            str += StringUtil.getSwfLangStrVarByID("s21", [DataBase.money + ""]) + "\n";
            str += StringUtil.getSwfLangStr("s12") + "\n";
            for (var i = 0; i < 5; i++) {
                str += StringUtil.getSwfLangStrVarByID("s1" + (3 + i), [DataBase.achives[i] + ""]) + "\n";
            }
            str += StringUtil.getSwfLangStr("s19") + "\n";
            var title = GameLogic.getInstance().getTitle();
            title = "<font size=42 color=0xA310E5>" + title + "</font>";
            str += title;
            this['btn_27'].visible = true;
        }
        this['lbl_over_1'].textFlow = new egret.HtmlTextParser().parser(str);
        GameLogic.getInstance().saveAchieveByGameOver();
    };
    GameUI.prototype.errorRsp = function (i) {
        this.eventAppear(StringUtil.getSwfLangStr("e" + i));
    };
    GameUI.prototype.initView = function () {
        var b = SoundManager.getInstance().sound_switch;
        this.img_sound.source = RES.getRes(b ? "game_json.noice1_zb" : "game_json.noice2_zb");
    };
    GameUI.prototype.initEvent = function () {
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        for (var i = 0; i <= 28; i++) {
            var btn = this['btn_' + i];
            btn.name = i + "";
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        for (var i = 0; i <= 7; i++) {
            var lbl = this['lbl_num' + i];
            lbl.name = 'lbl' + i;
            lbl.addEventListener(egret.Event.CHANGE, this.txtChange, this);
            lbl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.txtClick, this);
        }
        this.rect_evt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRect, this);
        this.img_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSound, this);
        WxApi.getInstance().addEventListener(GameEvent.REWARDAD_CLOSE_EVENT, this.addMoney, this);
    };
    GameUI.prototype.clickSound = function () {
        var b = !SoundManager.getInstance().sound_switch;
        SoundManager.getInstance().playBgSound(b);
        this.img_sound.source = RES.getRes(b ? "game_json.noice1_zb" : "game_json.noice2_zb");
    };
    GameUI.prototype.cbChange = function () {
    };
    GameUI.prototype.clickRect = function (e) {
        this.eventNext();
    };
    GameUI.prototype.txtClick = function (e) {
        var lbl = e.currentTarget;
        var i = parseInt(lbl.name.slice(3));
        switch (i) {
            case 1://存款
                this.max_num = this.data.dwMoney;
                break;
            case 2://取款
                this.max_num = this.data.dwDeposit;
                break;
        }
    };
    GameUI.prototype.txtChange = function (e) {
        var lbl = e.currentTarget;
        var n = parseInt(lbl.text);
        if (n > this.max_num) {
            lbl.text = this.max_num + "";
        }
    };
    GameUI.prototype.clickBtn = function (e) {
        var i = parseInt(e.currentTarget.name);
        if (this.gamestate == 0) {
            if (i < 9 && i > 12 && i < 26) {
                return;
            }
        }
        switch (i) {
            case 0://捐款
                this.pop(0);
                GameCommand.getInstance().charity(parseInt(this['lbl_num0'].text));
                break;
            case 1:
            case 2:
            case 3:
                this.pop(0);
                GameCommand.getInstance().passOneDay();
                break;
            case 4://慈善
                this.pop(i);
                this.max_num = this.data.dwMoney;
                this['lbl_charity'].text = StringUtil.getSwfLangStr("s10");
                this['lbl_num0'].text = "0";
                break;
            case 5://银行
                this.pop(i);
                this['lbl_num1'].text = this.data.dwMoney + "";
                this['lbl_num2'].text = this.data.dwDeposit + "";
                break;
            case 6://医院
                this.pop(i);
                var n = 100 - this.data.dwPow;
                if (n <= 0) {
                    this['lbl_hos_1'].text = StringUtil.getSwfLangStr("s6");
                    this.max_num = 0;
                }
                else {
                    this['lbl_hos_1'].text = StringUtil.getSwfLangStrVarByID("s7", [GameLogic.getInstance().data['hospital'] + ""]);
                    this.max_num = n;
                }
                this['lbl_num3'].text = this.max_num + "";
                break;
            case 7://中介
                this.pop(i);
                var n7 = GameLogic.getInstance().data['maxstore'] - this.data.dwMaxStoreNum;
                if (n7 <= 0) {
                    this['lbl_medi_1'].text = StringUtil.getSwfLangStr("s8");
                }
                else {
                    var n70 = GameLogic.getInstance().data['storeprice'];
                    var n71 = Math.floor(Math.random() * n70 / 5) + n70;
                    this['lbl_medi_1'].text = StringUtil.getSwfLangStrVarByID("s9", [n71 + ""]);
                }
                break;
            case 8://邮局
                this.pop(i);
                var n8 = this.data.dwDebt;
                var n80 = this.data.dwMoney > n8 ? n8 : this.data.dwMoney;
                if (n8 <= 0) {
                    this['lbl_post_1'].text = StringUtil.getSwfLangStr("s102");
                    this.max_num = 0;
                }
                else {
                    this['lbl_post_1'].text = StringUtil.getSwfLangStr("s101");
                    this.max_num = n80;
                }
                this['lbl_num5'].text = this.max_num + "";
                break;
            case 9://转发
                this.share();
                break;
            case 10://玩法说明
                this.addChild(new NewGuild());
                break;
            case 11://排行榜
                GameLogic.getInstance().openRank();
                break;
            case 12: //重新开始
            case 26:
                this.restart();
                break;
            case 13://存钱
                GameCommand.getInstance().cun(parseInt(this['lbl_num1'].text));
                this.pop(0);
                break;
            case 14://取钱
                GameCommand.getInstance().qu(parseInt(this['lbl_num2'].text));
                this.pop(0);
                break;
            case 15://治疗
                if (this.data.dwPow < 100) {
                    GameCommand.getInstance().treat(100 - this.data.dwPow);
                }
                this.pop(0);
                break;
            case 17://买柜子
                var n17 = GameLogic.getInstance().data['storeprice'];
                n17 = Math.floor(Math.random() * n17 / 5) + n17;
                GameCommand.getInstance().buyStore(n17);
                this.pop(0);
                break;
            case 19://还债
                var n19 = parseInt(this['lbl_num5'].text);
                n19 = this.data.dwMoney < n19 ? this.data.dwMoney : n19;
                GameCommand.getInstance().huan(n19);
                this.pop(0);
                break;
            case 21://购买
                var n21 = parseInt(this['lbl_num6'].text);
                if (n21 > 0) {
                    GameCommand.getInstance().buyGoods(this.crtMarketItem.good.dwID, n21);
                }
                this.pop(0);
                break;
            case 23://出售
                var n23 = parseInt(this['lbl_num7'].text);
                if (n23 > 0) {
                    GameCommand.getInstance().sellGoods(this.crtStoreItem.good.dwID, n23);
                }
                this.pop(0);
                break;
            case 16: //关闭
            case 18:
            case 20:
            case 22:
            case 24:
                this.pop(0);
                break;
            case 25:
                this.eventNext();
                break;
            case 27://炫耀
                var title = "我40天赚了" + DataBase.money + "元，买了豪车买了房，只差一个靓媳妇！";
                var img = "resource/assets/img/share5.jpg";
                WxApi.getInstance().sharenew(SHARETYPE.SHOWOFF, title, img);
                break;
            case 28://成就
                // platform.toast("尽请期待")
                this.addChild(new AchieveUI());
                break;
        }
    };
    GameUI.prototype.share = function () {
        console.log("share:", WxApi.getInstance().checkVersion());
        if (WxApi.getInstance().checkVersion()) {
            //看视频
            var cd = WxApi.getInstance().getRewardCD();
            if (cd > 0) {
                platform.toast(cd + "秒后再来观看");
                return;
            }
            if (WxApi.getInstance().watched == true) {
                this.popEvent("单局游戏只能获取一次");
                return;
            }
            WxApi.getInstance().showRewardAd(WATCHTYPE.ADDMONEY);
        }
        else {
            //先分享
            if (WxApi.getInstance().sharenum == 0) {
                WxApi.getInstance().share();
                WxApi.getInstance().sharenum++;
            }
            else if (WxApi.getInstance().sharenum == 1) {
                WxApi.getInstance().share();
                WxApi.getInstance().sharenum++;
            }
            else if (WxApi.getInstance().sharenum == 2) {
                WxApi.getInstance().share();
                WxApi.getInstance().sharenum++;
            }
            else {
                //看视频
                var cd = WxApi.getInstance().getRewardCD();
                if (cd > 0) {
                    platform.toast(cd + "秒后再来观看");
                    return;
                }
                if (WxApi.getInstance().watched == true) {
                    this.popEvent("单局游戏只能获取一次");
                    return;
                }
                WxApi.getInstance().showRewardAd(WATCHTYPE.ADDMONEY);
            }
        }
    };
    GameUI.prototype.pop = function (i) {
        if (this.crtPop != null) {
            var gp_1 = this['gp_' + this.crtPop];
            if (gp_1 != null) {
                gp_1.visible = false;
            }
        }
        if (i == 0) {
            this.eventpoping = false;
        }
        var gp = this['gp_' + i];
        if (gp != null) {
            gp.visible = true;
            this.crtPop = i;
        }
        else {
            this.crtPop = null;
        }
    };
    GameUI.prototype.clearMarket = function () {
        for (var i = 0; i < this.market_arr.length; i++) {
            var item = this.market_arr[i];
        }
        this.gp_market.removeChildren();
        this.market_arr = [];
        this.crtMarketItem = null;
    };
    GameUI.prototype.clearStore = function () {
        for (var i = 0; i < this.store_arr.length; i++) {
            var item = this.store_arr[i];
            item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStoreItem, this);
        }
        this.gp_store.removeChildren();
        this.store_arr = [];
        this.crtStoreItem = null;
    };
    GameUI.prototype.restart = function () {
        GameLogic.getInstance().openStart();
    };
    GameUI.prototype.clear = function () {
        this.clearEvent();
        this.clearMarket();
        this.clearStore();
        GameLogic.getInstance().gameui = null;
    };
    GameUI.prototype.clearEvent = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        for (var i = 0; i <= 28; i++) {
            var btn = this['btn_' + i];
            btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        for (var i = 0; i <= 7; i++) {
            var lbl = this['lbl_num' + i];
            lbl.removeEventListener(egret.Event.CHANGE, this.txtChange, this);
            lbl.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.txtClick, this);
        }
        this.rect_evt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRect, this);
        this.img_sound.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSound, this);
        WxApi.getInstance().removeEventListener(GameEvent.REWARDAD_CLOSE_EVENT, this.addMoney, this);
    };
    GameUI.prototype.addMoney = function (e) {
        if (e.data.type == WATCHTYPE.ADDMONEY && e.data.data == 0) {
            this.addMoneyreal();
            WxApi.getInstance().watched = true;
        }
    };
    GameUI.prototype.addMoneyreal = function () {
        DataBase.money += 5000;
        this.lbl_1.text = DataBase.money.toString();
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
var MarketItem = (function (_super) {
    __extends(MarketItem, _super);
    function MarketItem(o) {
        var _this = _super.call(this) || this;
        _this.good = o;
        _this.skinName = "MarketItemSkin";
        return _this;
    }
    MarketItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lbl_name.text = this.good.strName;
        this.lbl_price.text = this.good.dwPrice + "";
    };
    MarketItem.prototype.same = function (b) {
        this.rect_same.visible = b;
    };
    Object.defineProperty(MarketItem.prototype, "select", {
        get: function () {
            return this._select;
        },
        set: function (b) {
            this._select = b;
            this.rect_bg.visible = b;
        },
        enumerable: true,
        configurable: true
    });
    MarketItem.prototype.clear = function () {
        this.good = null;
    };
    return MarketItem;
}(eui.Component));
__reflect(MarketItem.prototype, "MarketItem");
var NewGuild = (function (_super) {
    __extends(NewGuild, _super);
    function NewGuild() {
        var _this = _super.call(this) || this;
        _this.skinName = "NewGuildSkin";
        return _this;
    }
    NewGuild.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.guidestep = 0;
        this.nextGuide();
        this.checkFit();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    NewGuild.prototype.checkFit = function () {
        this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
    };
    NewGuild.prototype.clickBtn = function (e) {
        if (e.target == this.btn_over) {
            this.over();
        }
        else {
            this.nextGuide();
        }
    };
    NewGuild.prototype.over = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    NewGuild.prototype.nextGuide = function () {
        if (this.crtstep != null) {
            this.crtstep.visible = false;
        }
        var step = this['gp_' + this.guidestep];
        if (step == null) {
            this.over();
            return;
        }
        this['lbl_' + this.guidestep].text = StringUtil.getSwfLangStr("guidestr" + this.guidestep);
        this.crtstep = step;
        this.crtstep.visible = true;
        this.guidestep++;
    };
    NewGuild.prototype.clear = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    return NewGuild;
}(eui.Component));
__reflect(NewGuild.prototype, "NewGuild");
var RankUI = (function (_super) {
    __extends(RankUI, _super);
    function RankUI(ticket) {
        if (ticket === void 0) { ticket = null; }
        var _this = _super.call(this) || this;
        _this.shareticket = ticket;
        _this.skinName = "RankSkin";
        return _this;
    }
    RankUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.checkFit();
        this.initView();
        this.initEvent();
    };
    RankUI.prototype.checkFit = function () {
        var h = GameLogic.getInstance().GameStage.stageHeight;
        this.height = this.rect_bg.height = h;
    };
    RankUI.prototype.initView = function () {
        this.lbl_title.text = this.shareticket != null ? "群排行榜" : "好友排行榜";
        this.initDataContext();
    };
    RankUI.prototype.initDataContext = function () {
        //开放域主体
        this.bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
        this.bitmapdata.$deleteSource = false;
        var texture = new egret.Texture();
        texture._setBitmapData(this.bitmapdata);
        this.bmp_context = new egret.Bitmap(texture);
        this.bmp_context.width = GameLogic.getInstance().GameStage.stageWidth;
        this.bmp_context.height = GameLogic.getInstance().GameStage.stageHeight;
        this.bmp_context.x = this.bmp_context.y = 0;
        this.addChildAt(this.bmp_context, 4); //盖在底图上面，各种按钮下面
        egret.stopTick(this.tickerHandler, this);
        egret.startTick(this.tickerHandler, this);
        platform.postMessage({
            shareTicket: this.shareticket,
            // userinfo:WxApi.getInstance().userInfo,
            stageW: GameLogic.getInstance().GameStage.stageWidth,
            stageH: GameLogic.getInstance().GameStage.stageHeight,
            command: "open"
        });
    };
    RankUI.prototype.initEvent = function () {
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
        this.btn_group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGroupRank, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    RankUI.prototype.clickGroupRank = function () {
        WxApi.getInstance().share("grouprank=1");
    };
    RankUI.prototype.clickClose = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    RankUI.prototype.tickerHandler = function (timeStarmp) {
        egret.WebGLUtils.deleteWebGLTexture(this.bitmapdata.webGLTexture);
        this.bitmapdata.webGLTexture = null;
        return false;
    };
    RankUI.prototype.clear = function () {
        this.img_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
        this.btn_group.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGroupRank, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        platform.postMessage({
            command: "close"
        });
        if (this.bmp_context != null && this.bmp_context.parent != null) {
            this.bmp_context.parent.removeChild(this.bmp_context);
            this.bmp_context = null;
        }
        egret.stopTick(this.tickerHandler, this);
        this.bmp_context = null;
        this.bitmapdata = null;
    };
    return RankUI;
}(eui.Component));
__reflect(RankUI.prototype, "RankUI");
window["RankUI"] = RankUI;
var StartUI = (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "StartSkin";
        return _this;
    }
    StartUI.prototype.clickGame = function () {
        platform.skipToProgram("wxdf77c92683d0ad32", "wx6a3ca3523aaa4e34");
    };
    StartUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this['mc'].play();
        this.checkFit();
        this.rewardCD();
        platform.bannershow(GameConst.bannerAdId);
        var data = GameLogic.getInstance().data;
        this.lbl_content.text = StringUtil.getSwfLangStr("s2");
        this.updateProp();
        for (var i = 1; i <= 3; i++) {
            var o = data['config' + i];
            var str = "开始游戏";
            str = i == 1 ? str : "使用券" + str;
            str += "\n" + o['pow'] + "体力 " + o['debt'] + "欠债 " + o['money'] + "启动资金\n";
            if (i == 2) {
                str += "(可获炒房证)";
            }
            var btn = this['btn_' + i];
            btn.label = str;
            btn.name = i + "";
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        this.img_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGame, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        this.img_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSound, this);
        GameLogic.getInstance().addEventListener(GameEvent.PROP_NUM_CHANGE, this.updateProp, this);
        TimerManager.getInstance().addTimerCallBack(this.rewardCD, this);
        this.btn_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_14.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_15.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        // if(WxApi.getInstance().checkWx()){
        // 	this.button = wx.createGameClubButton({
        // 	icon: 'white',
        // 	style: {
        // 		left: 10,
        // 		top: 40,
        // 		width: 32,
        // 		height: 32,
        // 		text: "游戏圈"
        // 	}
        // })
        // }
    };
    StartUI.prototype.rewardCD = function () {
        var cd = WxApi.getInstance().getRewardCD();
        this.canwatch = cd <= 0;
        if (cd > 0) {
            this.lbl_cd.text = this.ParseTime2Format(cd);
            this.lbl_cd.visible = true;
        }
        else {
            this.lbl_cd.text = "";
        }
    };
    StartUI.prototype.ParseTime2Format = function (t, f) {
        if (f === void 0) { f = "h:m:s"; }
        var h = Math.floor(t / 3600);
        var m = Math.floor((t % 3600) / 60);
        var s = (t % 3600) % 60;
        function parse_format(t) {
            var s = t.toString();
            if (t < 10) {
                s = "0" + t;
            }
            return s;
        }
        if (f.indexOf("h") != -1) {
            f = f.replace(/h/g, parse_format(h));
        }
        else {
            m += h * 60;
        }
        if (f.indexOf("m") != -1) {
            f = f.replace(/m/g, parse_format(m));
        }
        else {
            if (f.indexOf("h") != -1) {
                s += m * 60;
            }
            else {
                s = t;
            }
        }
        if (f.indexOf("s") != -1) {
            f = f.replace(/s/g, parse_format(s));
        }
        return f;
    };
    StartUI.prototype.initSound = function () {
        var b = SoundManager.getInstance().sound_switch;
        this.img_sound.source = RES.getRes(b ? "game_json.noice1_zb" : "game_json.noice2_zb");
    };
    StartUI.prototype.checkFit = function () {
        this.img_bg.height = GameLogic.getInstance().GameStage.stageHeight;
    };
    StartUI.prototype.updateProp = function () {
        this.lbl_prop.text = "分享可获得炒房券（炒房券 X" + PlayerConst.prop_num + "）";
    };
    StartUI.prototype.clickBtn = function (e) {
        if (GameLogic.getInstance().strings == null) {
            this.lbl_log.text = "正在形成市场，请稍后...";
            return;
        }
        var i = parseInt(e.currentTarget.name);
        if (i == 2 && PlayerConst.prop_num <= 0) {
            WxApi.getInstance().showToast("邀请好友进入游戏可获得炒房券");
            return;
        }
        GameCommand.getInstance().selectPackage(i);
        GameLogic.getInstance().startGame();
    };
    StartUI.prototype.clickbtn1 = function (e) {
        switch (e.currentTarget) {
            case this.btn_10:
                if (!this.canwatch) {
                    var cd = WxApi.getInstance().getRewardCD();
                    platform.toast("观看视频过快，请稍微再来");
                    return;
                }
                WxApi.getInstance().showRewardAd(WATCHTYPE.NONE);
                break;
            case this.btn_11:
                this.addChild(new RankUI());
                break;
            case this.btn_12:
                WxApi.getInstance().share();
                break;
            case this.btn_13:
                DataBase.money = 0;
                this.addChild(new AchieveUI());
                break;
            case this.btn_14:
                platform.skipToProgram("wxd4950745d08c9e90", null);
                break;
            case this.btn_15:
                platform.skipToProgram("wxedfbcd2e9d68611e", null);
                break;
        }
    };
    StartUI.prototype.clickSound = function () {
        var b = !SoundManager.getInstance().sound_switch;
        SoundManager.getInstance().playBgSound(b);
        this.img_sound.source = RES.getRes(b ? "game_json.noice1_zb" : "game_json.noice2_zb");
    };
    StartUI.prototype.clear = function () {
        for (var i = 1; i <= 3; i++) {
            this['btn_' + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        this['mc'].stop();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        this.img_sound.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSound, this);
        GameLogic.getInstance().removeEventListener(GameEvent.PROP_NUM_CHANGE, this.updateProp, this);
        this.btn_10.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_11.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_12.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_13.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_14.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        this.btn_15.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickbtn1, this);
        TimerManager.getInstance().removeFun(this.rewardCD, this);
        this.img_game.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGame, this);
        platform.bannerdestroy();
        if (this.button != null) {
            this.button.destroy();
        }
    };
    return StartUI;
}(eui.Component));
__reflect(StartUI.prototype, "StartUI");
var StoreItem = (function (_super) {
    __extends(StoreItem, _super);
    function StoreItem(o) {
        var _this = _super.call(this) || this;
        _this.good = o;
        _this.skinName = "StoreItemSkin";
        return _this;
    }
    StoreItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.update();
    };
    /**贵的显示箭头 */
    StoreItem.prototype.upState = function (b) {
        this.img_up.visible = b;
    };
    StoreItem.prototype.updateGood = function (o) {
        this.good = o;
        this.update();
    };
    StoreItem.prototype.update = function () {
        this.lbl_name.text = this.good.strName;
        this.lbl_price.text = this.good.dwPrice + "";
        this.lbl_num.text = this.good.dwNum + "";
    };
    Object.defineProperty(StoreItem.prototype, "select", {
        get: function () {
            return this._select;
        },
        set: function (b) {
            this._select = b;
            this.rect_bg.visible = b;
        },
        enumerable: true,
        configurable: true
    });
    StoreItem.prototype.clear = function () {
        this.good = null;
    };
    return StoreItem;
}(eui.Component));
__reflect(StoreItem.prototype, "StoreItem");
;window.Main = Main;