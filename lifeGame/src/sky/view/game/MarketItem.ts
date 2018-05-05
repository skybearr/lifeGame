class MarketItem extends eui.Component {
	public constructor(o:varGoods) {
		super();
		this.good = o;
		this.skinName = "MarketItemSkin";
	}

	public lbl_name:eui.Label;
	public lbl_price:eui.Label;
	public rect_bg:eui.Rect;

	public good:varGoods;

	protected childrenCreated(){
		super.childrenCreated();

		this.lbl_name.text = this.good.strName;
		this.lbl_price.text = this.good.dwPrice + "";
		
	}

	private _select:boolean;
	public set select(b:boolean){
		this._select = b;
		this.rect_bg.fillAlpha = b ? 1 : 0;
	}
	public get select():boolean{
		return this._select;
	}

	public clear(){
		this.good = null;
		
	}
}