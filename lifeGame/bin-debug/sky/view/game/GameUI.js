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
//# sourceMappingURL=GameUI.js.map