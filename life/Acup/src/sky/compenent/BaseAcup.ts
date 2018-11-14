class BaseAcup extends eui.Component {
	public constructor(o:Object) {
		super();
        this.data = o;
		this.skinName = "BaseAcupSkin";
	}

    private data:Object;

	protected childrenCreated() {
		super.childrenCreated();
		this.anchorOffsetX = this.width/2;
		this.anchorOffsetY = this.height/2;
	}
}