var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerConst = (function () {
    function PlayerConst() {
    }
    PlayerConst.prop_num = 0;
    PlayerConst.hiscore = "hiscore";
    return PlayerConst;
}());
__reflect(PlayerConst.prototype, "PlayerConst");
