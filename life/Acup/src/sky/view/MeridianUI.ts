class MeridianUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "MeridianSkin";
	}

	private btn_start: eui.Button;
	private btn_back: eui.Button;
	private lbl_mer:eui.Label;
	private lbl0:eui.Label;
	private lbl1:eui.Label;
	private lbl2:eui.Label;
	private lbl3:eui.Label;
	private lbl4:eui.Label;

	private data:Object;

	protected childrenCreated() {
		super.childrenCreated();
		this.anchorOffsetX = this.width/2;
		this.anchorOffsetY = this.height/2;
		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
		this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStart, this);
	}

	private _id: number;
	public set id(v: number) {
		this._id = v;
		this.data = GameCache.mers[v];
		this.initView();
	}
	public get id(): number {
		return this._id;
	}

	private props:string[] = ["time","treat","food","shi","xu"];
	private keys:string[] = ["时辰","主治","饮食","实证","虚症"];
	private initView() {
		this.clearLbl();
		this.lbl_mer.text = this.data['nam'];
		let n:number=0;
		for(var i:number=0;i<5;i++){
			let o = this.data[this.props[i]];
			if(o != null){
				this['lbl'+n].text = this.keys[i] + "： " + o;
				this['lbl'+n].filters = [new egret.GlowFilter(0x000000, 1, 1, 1, 1, 1, false, false)]
				n++;
			}
		}
	}

	private clickStart() {
		this.clickBack(false);
	}

	private clickBack(b:boolean) {
		egret.Tween.removeTweens(this);
		egret.Tween.get(this).to({scaleX:0,scaleY:0}, 300).call(() => {
			if (this.parent != null) {
				this.parent.removeChild(this);
			}
			if(!b){
				GameLogic.getInstance().startui.inGame(this.id);
			}
		}, this);

	}

	private clearLbl(){
		for(var i:number=0;i<5;i++){
			this['lbl'+i].text = "";
		}
	}
}