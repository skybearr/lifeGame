var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameCache = (function () {
    function GameCache() {
    }
    GameCache.initData = function () {
        var data = RES.getRes("acup_data_json");
        this.points = data['gdAcup'];
        this.mers = data['gdMeridian'];
        this.illness = data['gdIllness'];
        this.points_names = {};
        for (var id in this.points) {
            var o = this.points[id];
            this.points_names[o['nam']] = id;
        }
    };
    return GameCache;
}());
__reflect(GameCache.prototype, "GameCache");
//# sourceMappingURL=GameCache.js.map