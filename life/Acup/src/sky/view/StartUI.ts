class StartUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "StartSkin";
	}

	private rect:eui.Rect;
	private lbl:eui.Label;
	private group:eui.Group;

	private btn_arr:eui.Button[];
	private btns:eui.Button[];

	private merui:MeridianUI;
	private searchui:SearchUI;

	private btn_1:eui.Button;

	private sp:egret.Shape;
	
	protected childrenCreated() {
		super.childrenCreated();

		this.btn_arr = [];
		this.btns = [];
		this.sp = new egret.Shape();

		this.initMers();

		this.initEvent();
	}

	private initMers(){
		for(let i:number=1;i<=20;i++){
			let btn = new eui.Button();
			btn.skinName = "BaseButtonSkin";
			// btn.anchorOffsetX = btn.width/2;
			// btn.anchorOffsetY = btn.height/2;
			let o = i < 20 ? GameCache.mers[i] : GameCache.mers[0];
			btn.label = o['nam']; 
			btn.name = i + "";
			this.group.addChild(btn);
			
			this.btns.push(btn);

			btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickBtn,this);
		}
		
		// this.initCrood1();
		this.group.visible = true;

		// this.tweenBtn();

	}

	private tweenBtn(){
		this.sp.rotation = 0;
		egret.Tween.get(this.sp,{loop:true,onChange:this.initCrood,onChangeObj:this}).to({rotation:-360},60000).call(()=>{

		},this);
	}

	private initEvent(){
		this.btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickSearch,this);
	}

	private initCrood(){
		let rotation = this.sp.rotation;
		let d = 200;
		for(let i:number=1;i<=12;i++){
			let r = rotation + (i-1) * 30;
			var h = r * Math.PI / 180;
			let xx = Math.sin(h) * d;
			let yy = Math.cos(h) * d;
			let x = 300 + xx;
			let y = 300 + yy;
			this.btns[i].x = x;
			this.btns[i].y = y;
		}
	}

	private initCrood1(){
		for(let i:number=0;i<20;i++){
			let btn = this.btns[i];
			let n = i - 1;
			if(i == 0){
				n = 20;
			}
			btn.x = 120 * (n%4);
			btn.y = (btn.height + 10) * Math.floor(n/4);
		}
	}

	private clickSearch(){
		if(this.searchui == null){
			this.searchui = new SearchUI();
			this.searchui.x = this.width/2;
			this.searchui.y = this.height/2;
		}
		egret.Tween.removeTweens(this.searchui);
		this.searchui.scaleX = this.searchui.scaleY = 0;
		this.addChild(this.searchui);
		egret.Tween.get(this.searchui).to({scaleX:1,scaleY:1},200).call(()=>{
			
		},this);
	}

	private clickBtn(e:egret.TouchEvent){
		let i = parseInt(e.currentTarget.name);

		this.openMer(i);
	}

	private openMer(i:number){
		if(this.merui == null){
			this.merui = new MeridianUI();
			this.merui.x = this.width/2;
			this.merui.y = this.height/2;
		}
		egret.Tween.removeTweens(this.merui);
		this.merui.id = i;
		this.merui.scaleX = this.merui.scaleY = 0;
		this.addChild(this.merui);
		egret.Tween.get(this.merui).to({scaleX:1,scaleY:1},200).call(()=>{
			
		},this);
	}

	public inGame(i:number){
		
		GameLogic.getInstance().startGame(i);
	}

	private clear(){

	}
}