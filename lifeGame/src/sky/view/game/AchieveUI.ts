class AchieveUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "AchieveSkin";
	}

	private rect_bg:eui.Rect;
	private btn_back:eui.Button;

	protected childrenCreated(){
		super.childrenCreated();

		this.checkFit();
		this.initView();
		this.initEvent();
	}

	private checkFit(){
		this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
		this.btn_back.y = this.rect_bg.height - this.btn_back.height;
	}

	private initView(){

	}

	private initEvent(){

		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickBack,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
	}

	private clickBack(){
		if(this.parent != null){
			this.parent.removeChild(this);
		}
	}

	private clear(){
		this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickBack,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
	}
}