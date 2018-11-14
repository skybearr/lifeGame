class GameUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "GameSkin";
	}

	private gp_main:eui.Group;
	private mer:eui.Component;
	private img_ball:eui.Image;
	private acup_arr:BaseAcup[];


	private data:Object;
	private id:number;

	protected childrenCreated() {
		super.childrenCreated();

		this.initEvent();
	}

	public setMer(i:number){
		this.reset();
		this.id = i;
		this.data = GameCache.mers[i];
		this.initMer();
	}

	public reset(){
		
	}

	private initMer() {
		this.mer.skinName = "Mer" + this.id + "Skin";
	}

	private initEvent() {
		
	}

	public readytoStart(){
		
	}

	private gameStart() {
		
	}
	private gameOver() {
		
	}
}