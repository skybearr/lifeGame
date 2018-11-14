class SearchUI extends eui.Component {
    public constructor() {
        super();
        this.skinName = "SearchSkin";
    }

    private btn_start: eui.Button;
    private btn_back: eui.Button;

    protected childrenCreated() {
        super.childrenCreated();
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBack, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStart, this);
    }

    private clickStart() {
        
        

    }

    private clickBack(b: boolean) {
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ scaleX: 0, scaleY: 0 }, 300).call(() => {
            if (this.parent != null) {
                this.parent.removeChild(this);
            }
        }, this);

    }
}