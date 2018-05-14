declare const wx: any

class GameLogic extends egret.EventDispatcher {
	public constructor() {
		super();
	}

	private static _instance: GameLogic;
	public static getInstance(): GameLogic {
		if (this._instance == null) {
			this._instance = new GameLogic();
		}
		return this._instance;
	}


	public GameStage: egret.Stage;
	public main: eui.UILayer;


	public data: Object;
	public goods: Object;
	public strings: Object;

	public cbSelected: boolean;


	public openStart() {
		this.initData();

		this.main.removeChildren();

		this.main.addChild(new StartUI());
	}

	private initData() {
		if (this.data == null) {
			this.data = RES.getRes("config_json");
		}
		if (this.goods == null) {
			this.goods = RES.getRes("goods_json");
		}
		if (this.strings == null) {
			this.strings = RES.getRes("string_json");
		}
	}

	public gameui: GameUI;

	public startGame() {
		this.main.removeChildren();

		this.main.addChild(new GameUI());
	}


	/**转发 */
	public share(type: number) {
		let wx = window["wx"];
		if (wx != null) {
			wx.onShareAppMessage(function () {
				return {
					title: '转发标题',
					imageUrl: 'qua_3_png',
					success: function (res) {
						console.log('转发成功')
					}
				}
			});
		}

	}
}