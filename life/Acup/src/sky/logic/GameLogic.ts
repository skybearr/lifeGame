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

	public GameStage:egret.Stage;

	public main: Main;
	public startui: StartUI;
	public gameui: GameUI;

	public startLogin() {
		if (this.startui == null) {
			this.startui = new StartUI();
		}
		GameCache.initData();
		this.main.addChild(this.startui);
	}

	public startGame(i:number) {
		if (this.gameui == null) {
			this.gameui = new GameUI();
		}
		this.gameui.y = this.main.stage.height;
		this.main.addChild(this.gameui);
		this.gameui.setMer(i);
		
		egret.Tween.get(this.startui).to({ y: -this.startui.height }, 200);
		egret.Tween.get(this.gameui).to({ y: 0 }, 200).call(() => {
			this.gameui.readytoStart();
		}, this);
	}

}