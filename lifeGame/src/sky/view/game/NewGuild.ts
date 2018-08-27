class NewGuild extends eui.Component {
	public constructor() {
		super();
		this.skinName = "NewGuildSkin";
	}

	private rect_bg:eui.Rect;
	private btn_over:eui.Button;
	private btn_next:eui.Button;

	private guidestep:number;
	private crtstep:eui.Group;

	protected childrenCreated(){
		super.childrenCreated();

		this.guidestep = 0;
		this.nextGuide();

		this.checkFit();

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickBtn,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
	}

	private checkFit(){
		this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
	}

	private clickBtn(e:egret.TouchEvent){
		if(e.target == this.btn_over){
			this.over();
		}
		else{
			this.nextGuide();
		}
	}

	private over(){
		if(this.parent != null){
			this.parent.removeChild(this);
		}
	}

	private nextGuide(){
		if(this.crtstep != null){
			this.crtstep.visible = false;
		}
		let step = this['gp_' + this.guidestep];
		if(step == null){
			this.over();
			return;
		}
		this['lbl_' + this.guidestep].text = StringUtil.getSwfLangStr("guidestr" + this.guidestep);
		this.crtstep = step;
		this.crtstep.visible = true;
		this.guidestep ++;
	}


	private clear(){
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickBtn,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.clear,this);
	}
}