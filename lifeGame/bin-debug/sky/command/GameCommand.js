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
var GameCommand = (function (_super) {
    __extends(GameCommand, _super);
    function GameCommand() {
        return _super.call(this) || this;
    }
    GameCommand.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameCommand();
        }
        return this._instance;
    };
    /**-------------------------------------------------- 服务器发送 -------------------------------------------------------- */
    GameCommand.prototype.sendData = function () {
        GameLogic.getInstance().gameui.initData(this.getData());
    };
    GameCommand.prototype.sendMarket = function () {
    };
    GameCommand.prototype.sendStore = function () {
    };
    GameCommand.prototype.sendBuy = function () {
    };
    GameCommand.prototype.sendSell = function () {
    };
    /**还债 */
    GameCommand.prototype.sendDebt = function () {
    };
    /**存款/取款 */
    GameCommand.prototype.sendDeposit = function () {
    };
    GameCommand.prototype.sendEvent = function () {
    };
    GameCommand.prototype.sendOver = function () {
    };
    /**-------------------------------------------------------------------------------------------------------------------- */
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
    /**-------------------------------------------- 客户端发送  ------------------------------------------------------------------------ */
    GameCommand.prototype.selectPackage = function (i) {
        DataBase.gamePackage = i;
    };
    /**根据type 刷数据 */
    GameCommand.prototype.startGame = function () {
        var o = GameLogic.getInstance().data["config" + DataBase.gamePackage];
        DataBase.times = 1;
        DataBase.money = new Int64(o['money'], 0);
        DataBase.debt = o['debt'];
        DataBase.deposit = new Int64(0, 0);
        DataBase.pow = o['pow'];
        DataBase.maxStoreNum = 100;
        DataBase.fame = o['fame'];
        DataBase.gameState = true;
        this.sendData();
        this.sendMarket();
    };
    /**过一天 */
    GameCommand.prototype.passOneDay = function () {
    };
    return GameCommand;
}(egret.EventDispatcher));
__reflect(GameCommand.prototype, "GameCommand");
//# sourceMappingURL=GameCommand.js.map