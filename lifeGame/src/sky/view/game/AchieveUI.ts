class AchieveUI extends eui.Component {
	public constructor() {
		super();
		this.skinName = "AchieveSkin";
	}

	private rect_bg:eui.Rect;
	private btn_back:eui.Button;
	private scorller:eui.Scroller;
	private list:eui.List;
	private arr_data:eui.ArrayCollection;

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
		this.list.itemRenderer = AchiveItemUI;
		this.arr_data = new eui.ArrayCollection();
		let obj = GameLogic.getInstance().achieves;
		/**1:[10,20,30]	2:[{10:1},{20:3}	3:[10,20]] */
		let arrives = GameLogic.getInstance().arrives;


		for(let id in obj){
			let o = obj[id];
			let vo = new AchieveVO();
			vo.content = o.content;
			vo.type = o.type;
			let a1 = o.need.split(":");
			let a3:{id:number,value:number}[] = [];
			for(let i=0;i<a1.length;i++){
				let a2 = a1[i].split("_");
				let oo = {id:parseInt(a2[0]),value:parseInt(a2[1])};
				a3.push(oo);
			}
			vo.need = a3;

			//已达成数据
			let a4 = arrives[vo.type];
			if(a4 == null){
				vo.state = 0;
				vo.have = 0;
				this.arr_data.addItem(vo);
				continue;
			}
			if(vo.type != ACHIVE.BUY){
				vo.state = a4.indexOf(vo.id) == -1 ? 0 : 1;
			}
			else{
				for(let i=0;i<a4.length;i++){
					let ooo = a4[i];
					if(ooo.id == id){
						vo.have = ooo.value;
						break;
					}
				}
			}
			this.arr_data.addItem(vo);
		}

		this.list.dataProvider = this.arr_data;
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