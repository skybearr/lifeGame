class Ball extends egret.DisplayObjectContainer{
	public constructor(o:Object) {
		super();
		this.data = o;

		this.init();
	}

	private bg:egret.Shape;
	private lbl:eui.Label;

	private data:Object;


	private init(){
		let r = 30;
		this.bg.graphics.clear();
		this.bg.graphics.beginFill(0x000000);
		this.bg.graphics.moveTo(r,r);
		this.bg.graphics.lineTo(r * 2, r);
		this.bg.graphics.drawArc(r, r, r, 2 * Math.PI, 0, false);
		this.bg.graphics.lineTo(r, r);
		this.bg.graphics.endFill();

		this.addChild(this.bg);
	}

}