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
        GameLogic.getInstance().GameStage = this.stage;
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
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _b.sent();
                        this.createGameScene();
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        _b.sent();
                        _a = GameLogic.getInstance();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        _a.userInfo = _b.sent();
                        console.log("userinfo:", GameLogic.getInstance().userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
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
        GameLogic.getInstance().init();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
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
        _this.bases = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        _this.diss1 = [0.2, 5, 10];
        //事件概率
        _this.diss2 = [0.1, 0.2, 5, 10];
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
            DataBase.debt = Math.floor(DataBase.debt * 1.15);
            DataBase.deposit = Math.floor(DataBase.deposit * 1.04);
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
        GameLogic.getInstance().gameui.errorRsp(i);
    };
    GameCommand.prototype.sendOver = function (t) {
        DataBase.gameState = 0;
        if (t == 0) {
            //结算
            DataBase.debt = Math.floor(DataBase.debt * 1.15);
            DataBase.deposit = Math.floor(DataBase.deposit * 1.04);
            DataBase.money = DataBase.money + DataBase.deposit - DataBase.debt + this.getStorePrice();
            DataBase.debt = 0;
            DataBase.deposit = 0;
        }
        else if (t == 1) {
        }
        this.sendData();
        GameLogic.getInstance().gameui.over();
        if (t == 0) {
            GameLogic.getInstance().setUserCloudStorage();
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
        var len = 4 + Math.floor(Math.random() * 6);
        var arr = this.bases.slice();
        // let lll = DataBase.gamePackage < 2 ? arr.length : arr.length - 1;
        var lll = arr.length;
        var goodIds = [];
        for (var i = 0; i < len; i++) {
            var i_1 = Math.floor(Math.random() * lll);
            goodIds.push(arr[i_1]);
            arr.splice(i_1, 1);
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
    /**其他事件 */
    GameCommand.prototype.dealOtherEvent = function () {
        var b = Math.random() < 0.2;
        if (b) {
            var a = Math.floor(Math.random() * 4) + 1;
            var b_1 = Math.random() < 0.5 ? 1 : 2;
            var c = Math.floor(Math.random() * 3) + 1;
            this.addEvent(a, b_1, c);
        }
    };
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
                    DataBase.fame = DataBase.fame + (isadd ? value : -value);
                    DataBase.fame = DataBase.fame <= 0 ? 0 : DataBase.fame;
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
    GameCommand.prototype.getRandom1 = function () {
        var r = Math.random();
        if (r < 0.1) {
            var i = Math.floor(Math.random() * 3);
            return this.diss1[i];
        }
        else {
            return 1;
        }
    };
    GameCommand.prototype.getRandom2 = function () {
        var i = Math.floor(Math.random() * 4);
        return this.diss2[i];
    };
    /**浮动区间	0.2,3,5,10
     *
     */
    GameCommand.prototype.getPrice = function (o, evt) {
        //上下浮动 0.2~10
        var n = o['price'];
        var r1 = this.getRandom1();
        var v = Math.floor(n * r1);
        // console.log(o['name'],"正常价格：",n,"范围浮动随机：",r1,"实际价格：",v);
        var b2 = Math.random() < 0.5;
        var v2 = Math.floor(v * Math.random() * 0.2);
        v = b2 ? v + v2 : v - v2;
        // console.log(o['name'],"正常价格：",n,"上下浮动随机0.2：",v);
        if (evt) {
            //出现事件概率 0.1
            var b3 = Math.random() < 0.1;
            if (b3) {
                //事件翻倍数随机
                var r3 = this.getRandom2();
                v = Math.floor(v * r3);
                // console.log(o['name'],"正常价格：",n,"事件浮动随机：",r3,"实际价格：",v);
                //记录事件
                var r4 = Math.floor(Math.random() * 3) + 1;
                var evt_1 = 'evt' + (r3 < 1 ? 0 : 1) + r4;
                DataBase.events.push(o[evt_1]);
            }
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
        DataBase.gamePackage = 1;
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
        DataBase.fame = o['fame'];
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
        // if(id == 9 && DataBase.gamePackage != 3){
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
                DataBase.fame += 3;
                c = 0;
            }
            else {
                c = 1;
            }
        }
        else {
            var i = Math.floor(n / charity);
            DataBase.fame += i;
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
var GameLogic = (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        return _super.call(this) || this;
    }
    GameLogic.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameLogic();
        }
        return this._instance;
    };
    GameLogic.prototype.init = function () {
        this.initData();
        this.showShareMenu();
        this.openStart();
        this.checkShareInfo();
    };
    GameLogic.prototype.openStart = function () {
        this.main.removeChildren();
        this.main.addChild(new StartUI());
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
        }
    };
    GameLogic.prototype.startGame = function () {
        this.main.removeChildren();
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
    /**点击别人转发进来的 ，获取shareTicket*/
    GameLogic.prototype.checkShareInfo = function () {
        var _this = this;
        console.log("checkShareInfo");
        var wx = window["wx"];
        if (wx == null) {
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
                        _this.openFriendRank(false, info.shareTicket);
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
                { key: "money", value: DataBase.money + "" },
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
var DataBase = (function () {
    function DataBase() {
    }
    return DataBase;
}());
__reflect(DataBase.prototype, "DataBase");
var GameConst = (function () {
    function GameConst() {
    }
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
var ERROR;
(function (ERROR) {
    ERROR[ERROR["MONEY_NOT_ENOUGH"] = 0] = "MONEY_NOT_ENOUGH";
    ERROR[ERROR["STORE_NOT_ENOUGH"] = 1] = "STORE_NOT_ENOUGH";
    ERROR[ERROR["BUY_ZERO"] = 2] = "BUY_ZERO";
    ERROR[ERROR["SELL_ZERO"] = 3] = "SELL_ZERO";
    ERROR[ERROR["MARKET_NO_GOOD"] = 4] = "MARKET_NO_GOOD";
    ERROR[ERROR["MAX_STORE_NUM"] = 5] = "MAX_STORE_NUM";
    ERROR[ERROR["NEED_LICIENCE"] = 6] = "NEED_LICIENCE";
})(ERROR || (ERROR = {}));
var ACHIVE;
(function (ACHIVE) {
    ACHIVE[ACHIVE["RELIVE"] = 1] = "RELIVE";
})(ACHIVE || (ACHIVE = {}));
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
var msgGoodsStoreRsp = (function () {
    function msgGoodsStoreRsp() {
        this.goods = [];
    }
    return msgGoodsStoreRsp;
}());
__reflect(msgGoodsStoreRsp.prototype, "msgGoodsStoreRsp");
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
    return StringUtil;
}());
__reflect(StringUtil.prototype, "StringUtil");
var GameEvent = (function () {
    function GameEvent() {
    }
    return GameEvent;
}());
__reflect(GameEvent.prototype, "GameEvent");
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameSkin";
        return _this;
    }
    GameUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        GameLogic.getInstance().gameui = this;
        this.market_arr = [];
        this.store_arr = [];
        this.eventlist = [];
        this.initView();
        this.initEvent();
        GameCommand.getInstance().startGame();
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
        if (this.eventlist.length > 0) {
            var str = this.eventlist.shift();
            this.popEvent(str);
        }
        else {
            this.pop(0);
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
        for (var i = 0; i < msg.goods.length; i++) {
            var item = new MarketItem(msg.goods[i]);
            item.y = (item.height + 2) * i;
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickMarketItem, this);
            this.market_arr.push(item);
            this.gp_market.addChild(item);
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
            str += StringUtil.getSwfLangStr("s50") + "\n";
            this['btn_27'].visible = true;
        }
        this['lbl_over_1'].text = str;
    };
    GameUI.prototype.errorRsp = function (i) {
        this.eventAppear(StringUtil.getSwfLangStr("e" + i));
    };
    GameUI.prototype.initView = function () {
        this.cb_0.selected = GameLogic.getInstance().cbSelected;
    };
    GameUI.prototype.initEvent = function () {
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        for (var i = 0; i <= 27; i++) {
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
        this.cb_0.addEventListener(egret.Event.CHANGE, this.cbChange, this);
        this.rect_evt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRect, this);
    };
    GameUI.prototype.cbChange = function () {
        GameLogic.getInstance().cbSelected = this.cb_0.selected;
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
                GameLogic.getInstance().share();
                break;
            case 10://广告
                break;
            case 11://排行榜
                GameLogic.getInstance().openFriendRank(true);
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
                break;
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
        GameLogic.getInstance().startGame();
    };
    GameUI.prototype.clear = function () {
        this.clearEvent();
        this.clearMarket();
        this.clearStore();
        GameLogic.getInstance().gameui = null;
    };
    GameUI.prototype.clearEvent = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
        for (var i = 0; i <= 27; i++) {
            var btn = this['btn_' + i];
            btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        for (var i = 0; i <= 7; i++) {
            var lbl = this['lbl_num' + i];
            lbl.removeEventListener(egret.Event.CHANGE, this.txtChange, this);
            lbl.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.txtClick, this);
        }
        this.cb_0.removeEventListener(egret.Event.CHANGE, this.cbChange, this);
        this.rect_evt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRect, this);
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
    Object.defineProperty(MarketItem.prototype, "select", {
        get: function () {
            return this._select;
        },
        set: function (b) {
            this._select = b;
            this.rect_bg.fillAlpha = b ? 1 : 0;
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
var StartUI = (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "StartSkin";
        return _this;
    }
    StartUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var data = GameLogic.getInstance().data;
        this.lbl_name.text = StringUtil.getSwfLangStr("s1");
        this.lbl_content.text = StringUtil.getSwfLangStr("s2");
        for (var i = 1; i <= 3; i++) {
            var o = data['config' + i];
            var str = i == 1 ? "开始游戏" : o['rmb'] + "元  开始";
            // str += "\n" + o['pow'] + "体力 " + o['debt'] + "欠债 " + o['money'] + "启动资金\n";
            if (i == 3) {
                str += "(可获炒房证)";
            }
            var btn = this['btn_' + i];
            btn.label = str;
            btn.name = i + "";
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
    };
    StartUI.prototype.clickBtn = function (e) {
        if (GameLogic.getInstance().strings == null) {
            this.lbl_log.text = "正在形成市场，请稍后...";
            return;
        }
        var i = parseInt(e.currentTarget.name);
        GameCommand.getInstance().selectPackage(i);
        GameLogic.getInstance().startGame();
    };
    StartUI.prototype.clear = function () {
        for (var i = 1; i <= 3; i++) {
            this['btn_' + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this);
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
            this.rect_bg.fillAlpha = b ? 1 : 0;
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