var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"StartSkin":"resource/skins/StartSkin.exml"};generateEUI.paths['resource/skins/BaseButtonSkin.exml'] = window.BaseButtonSkin = (function (_super) {
	__extends(BaseButtonSkin, _super);
	function BaseButtonSkin() {
		_super.call(this);
		this.skinParts = ["img_bg","labelDisplay"];
		
		this.height = 80;
		this.width = 500;
		this.elementsContent = [this.img_bg_i(),this.labelDisplay_i()];
	}
	var _proto = BaseButtonSkin.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.source = "qua_0_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "150体力 7000欠债 15000启动资金 \n 免费";
		t.textAlign = "center";
		t.textColor = 0x2409f2;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	return BaseButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin1 = 	(function (_super) {
		__extends(GameSkin$Skin1, _super);
		function GameSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 36;
			this.width = 35;
			this.elementsContent = [this._Image1_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","",1,"")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "qua_0_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.height = 48;
			t.source = "public_8_png";
			t.width = 48;
			return t;
		};
		return GameSkin$Skin1;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["gp_bg","gp_market","gp_store","lbl_store","lbl_day","cb_0","gp_title","btn_5","btn_6","btn_7","btn_8","btn_1","btn_2","btn_3","btn_4","btn_9","btn_10","btn_11","btn_12","gp_btn","lbl_1","lbl_4","lbl_5","lbl_6","lbl_2","lbl_3","gp_value","lbl_charity","lbl_num0","btn_0","gp_4","lbl_num1","lbl_num2","btn_13","btn_14","gp_5","lbl_hos_1","lbl_num3","btn_15","btn_16","gp_6","lbl_medi_1","lbl_num4","btn_17","btn_18","gp_7","lbl_post_1","lbl_num5","btn_19","btn_20","gp_8","lbl_buy_1","lbl_num6","btn_21","btn_22","gp_9","lbl_sell_1","lbl_num7","btn_23","btn_24","gp_10","img_pop","gp_pop","rect_evt","lbl_event_1","btn_25","gp_11","lbl_over_1","btn_26","btn_27","gp_over"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.gp_bg_i(),this.gp_market_i(),this.gp_store_i(),this.gp_title_i(),this.gp_btn_i(),this.gp_value_i(),this.gp_pop_i(),this.gp_11_i(),this.gp_over_i()];
	}
	var _proto = GameSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x868e8d;
		t.percentHeight = 100;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 1;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.source = "qua_1_png";
		t.width = 640;
		t.x = 356;
		t.y = 16;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 18;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(33,14,202,91);
		t.source = "img_3_png";
		t.width = 280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(33,14,202,91);
		t.source = "img_3_png";
		t.width = 360;
		t.x = 294;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.scale9Grid = new egret.Rectangle(20,8,124,55);
		t.source = "img_1_png";
		t.width = 640;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.scale9Grid = new egret.Rectangle(20,8,124,55);
		t.source = "img_1_png";
		t.width = 640;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 260;
		t.scale9Grid = new egret.Rectangle(37,53,226,325);
		t.source = "img_2_png";
		t.width = 640;
		return t;
	};
	_proto.gp_market_i = function () {
		var t = new eui.Group();
		this.gp_market = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 408;
		t.touchEnabled = false;
		t.width = 258;
		t.x = 12;
		t.y = 132;
		return t;
	};
	_proto.gp_store_i = function () {
		var t = new eui.Group();
		this.gp_store = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 408;
		t.touchEnabled = false;
		t.width = 336;
		t.x = 292;
		t.y = 132;
		return t;
	};
	_proto.gp_title_i = function () {
		var t = new eui.Group();
		this.gp_title = t;
		t.anchorOffsetX = 0;
		t.touchEnabled = false;
		t.width = 617.34;
		t.x = 17.33;
		t.y = 8;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.lbl_store_i(),this._Label7_i(),this._Label8_i(),this.lbl_day_i(),this.cb_0_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "市场";
		t.textColor = 0x2d07f7;
		t.touchEnabled = false;
		t.x = 94.63;
		t.y = 50;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "货物";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.x = 29.63;
		t.y = 86;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "价格";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.x = 169.63;
		t.y = 86;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "货物";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.x = 307.63;
		t.y = 86;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "价格";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.x = 445.63;
		t.y = 86;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "数量";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.x = 540.63;
		t.y = 86;
		return t;
	};
	_proto.lbl_store_i = function () {
		var t = new eui.Label();
		this.lbl_store = t;
		t.text = "110/110";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.x = 506.63;
		t.y = 50;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.text = "出租屋";
		t.textColor = 0x2d07f7;
		t.touchEnabled = false;
		t.x = 382.63;
		t.y = 50;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 22;
		t.text = "屏蔽事件";
		t.textAlign = "left";
		t.textColor = 0x2D07F7;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 142;
		t.x = 50;
		t.y = 8;
		return t;
	};
	_proto.lbl_day_i = function () {
		var t = new eui.Label();
		this.lbl_day = t;
		t.text = "40/40天";
		t.textAlign = "right";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 484.63;
		t.y = 0;
		return t;
	};
	_proto.cb_0_i = function () {
		var t = new eui.CheckBox();
		this.cb_0 = t;
		t.height = 36;
		t.label = "CheckBox";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 36;
		t.x = 12;
		t.y = 4;
		t.skinName = GameSkin$Skin1;
		return t;
	};
	_proto.gp_btn_i = function () {
		var t = new eui.Group();
		this.gp_btn = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.y = 912;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.btn_5_i(),this.btn_6_i(),this.btn_7_i(),this.btn_8_i(),this.btn_1_i(),this.btn_2_i(),this.btn_3_i(),this.btn_4_i(),this.btn_9_i(),this.btn_10_i(),this.btn_11_i(),this.btn_12_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 20;
		t.orientation = "rows";
		t.requestedRowCount = 3;
		t.verticalAlign = "middle";
		t.verticalGap = 12;
		return t;
	};
	_proto.btn_5_i = function () {
		var t = new eui.Button();
		this.btn_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "银行";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 0;
		t.y = 70;
		return t;
	};
	_proto.btn_6_i = function () {
		var t = new eui.Button();
		this.btn_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "医院";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 156;
		t.y = 70;
		return t;
	};
	_proto.btn_7_i = function () {
		var t = new eui.Button();
		this.btn_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "中介";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 306;
		t.y = 70;
		return t;
	};
	_proto.btn_8_i = function () {
		var t = new eui.Button();
		this.btn_8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "邮局";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 456;
		t.y = 70;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Button();
		this.btn_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "市场一";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Button();
		this.btn_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "市场二";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 156;
		t.y = 0;
		return t;
	};
	_proto.btn_3_i = function () {
		var t = new eui.Button();
		this.btn_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "市场三";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 306;
		t.y = 0;
		return t;
	};
	_proto.btn_4_i = function () {
		var t = new eui.Button();
		this.btn_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "慈善";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 456;
		t.y = 0;
		return t;
	};
	_proto.btn_9_i = function () {
		var t = new eui.Button();
		this.btn_9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "转发";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 4;
		t.y = 138;
		return t;
	};
	_proto.btn_10_i = function () {
		var t = new eui.Button();
		this.btn_10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "惊喜";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 160;
		t.y = 138;
		return t;
	};
	_proto.btn_11_i = function () {
		var t = new eui.Button();
		this.btn_11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "排行榜";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 310;
		t.y = 138;
		return t;
	};
	_proto.btn_12_i = function () {
		var t = new eui.Button();
		this.btn_12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "重新开始";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 460;
		t.y = 138;
		return t;
	};
	_proto.gp_value_i = function () {
		var t = new eui.Group();
		this.gp_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.y = 564;
		t.elementsContent = [this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this.lbl_1_i(),this.lbl_4_i(),this.lbl_5_i(),this.lbl_6_i(),this.lbl_2_i(),this.lbl_3_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.text = "现金";
		t.textColor = 0x07f70f;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.text = "存款";
		t.textColor = 0x07f70f;
		t.x = 20;
		t.y = 60;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.text = "欠债";
		t.textColor = 0x07f70f;
		t.x = 20;
		t.y = 100;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "体力";
		t.textColor = 0x07f70f;
		t.x = 400;
		t.y = 20;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "名声";
		t.textColor = 0x07f70f;
		t.x = 400;
		t.y = 60;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Q群";
		t.textColor = 0x07f70f;
		t.width = 96;
		t.x = 400;
		t.y = 100;
		return t;
	};
	_proto.lbl_1_i = function () {
		var t = new eui.Label();
		this.lbl_1 = t;
		t.text = "012345678912345678";
		t.width = 302;
		t.x = 90;
		t.y = 20;
		return t;
	};
	_proto.lbl_4_i = function () {
		var t = new eui.Label();
		this.lbl_4 = t;
		t.text = "0123";
		t.width = 100;
		t.x = 470;
		t.y = 20;
		return t;
	};
	_proto.lbl_5_i = function () {
		var t = new eui.Label();
		this.lbl_5 = t;
		t.text = "0123";
		t.width = 100;
		t.x = 470;
		t.y = 60;
		return t;
	};
	_proto.lbl_6_i = function () {
		var t = new eui.Label();
		this.lbl_6 = t;
		t.anchorOffsetX = 0;
		t.text = "40344680";
		t.width = 146;
		t.x = 470;
		t.y = 100;
		return t;
	};
	_proto.lbl_2_i = function () {
		var t = new eui.Label();
		this.lbl_2 = t;
		t.text = "012345678912345678";
		t.width = 302;
		t.x = 90;
		t.y = 60;
		return t;
	};
	_proto.lbl_3_i = function () {
		var t = new eui.Label();
		this.lbl_3 = t;
		t.text = "012345678912345678";
		t.width = 302;
		t.x = 90;
		t.y = 100;
		return t;
	};
	_proto.gp_pop_i = function () {
		var t = new eui.Group();
		this.gp_pop = t;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.y = 724;
		t.elementsContent = [this.gp_4_i(),this.gp_5_i(),this.gp_6_i(),this.gp_7_i(),this.gp_8_i(),this.gp_9_i(),this.gp_10_i(),this.img_pop_i()];
		return t;
	};
	_proto.gp_4_i = function () {
		var t = new eui.Group();
		this.gp_4 = t;
		t.height = 144;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.lbl_charity_i(),this.lbl_num0_i(),this.btn_0_i()];
		return t;
	};
	_proto.lbl_charity_i = function () {
		var t = new eui.Label();
		this.lbl_charity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 600;
		return t;
	};
	_proto.lbl_num0_i = function () {
		var t = new eui.Label();
		this.lbl_num0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.height = 40;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0x7F0CF2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 320;
		t.x = 64.96;
		t.y = 100;
		return t;
	};
	_proto.btn_0_i = function () {
		var t = new eui.Button();
		this.btn_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "捐款";
		t.skinName = "BaseButtonSkin";
		t.width = 140;
		t.x = 440;
		t.y = 96;
		return t;
	};
	_proto.gp_5_i = function () {
		var t = new eui.Group();
		this.gp_5 = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.lbl_num1_i(),this.lbl_num2_i(),this.btn_13_i(),this.btn_14_i()];
		return t;
	};
	_proto.lbl_num1_i = function () {
		var t = new eui.Label();
		this.lbl_num1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.height = 40;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0x7F0CF2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 320;
		t.x = 140;
		t.y = 24;
		return t;
	};
	_proto.lbl_num2_i = function () {
		var t = new eui.Label();
		this.lbl_num2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.height = 40;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0x7F0CF2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 320;
		t.x = 140;
		t.y = 80;
		return t;
	};
	_proto.btn_13_i = function () {
		var t = new eui.Button();
		this.btn_13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "存钱";
		t.skinName = "BaseButtonSkin";
		t.width = 140;
		t.x = 475.34;
		t.y = 18;
		return t;
	};
	_proto.btn_14_i = function () {
		var t = new eui.Button();
		this.btn_14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "取钱";
		t.skinName = "BaseButtonSkin";
		t.width = 140;
		t.x = 475.34;
		t.y = 76;
		return t;
	};
	_proto.gp_6_i = function () {
		var t = new eui.Group();
		this.gp_6 = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.lbl_hos_1_i(),this.lbl_num3_i(),this.btn_15_i(),this.btn_16_i()];
		return t;
	};
	_proto.lbl_hos_1_i = function () {
		var t = new eui.Label();
		this.lbl_hos_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 563;
		t.x = 57;
		t.y = 0;
		return t;
	};
	_proto.lbl_num3_i = function () {
		var t = new eui.Label();
		this.lbl_num3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "999";
		t.textAlign = "left";
		t.textColor = 0x7f0cf2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 140;
		t.y = 96;
		return t;
	};
	_proto.btn_15_i = function () {
		var t = new eui.Button();
		this.btn_15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "治疗";
		t.skinName = "BaseButtonSkin";
		t.width = 142;
		t.x = 230;
		t.y = 94;
		return t;
	};
	_proto.btn_16_i = function () {
		var t = new eui.Button();
		this.btn_16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "我不要";
		t.skinName = "BaseButtonSkin";
		t.width = 226;
		t.x = 390;
		t.y = 94;
		return t;
	};
	_proto.gp_7_i = function () {
		var t = new eui.Group();
		this.gp_7 = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.lbl_medi_1_i(),this.lbl_num4_i(),this.btn_17_i(),this.btn_18_i()];
		return t;
	};
	_proto.lbl_medi_1_i = function () {
		var t = new eui.Label();
		this.lbl_medi_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 578;
		t.x = 42;
		t.y = 0;
		return t;
	};
	_proto.lbl_num4_i = function () {
		var t = new eui.Label();
		this.lbl_num4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x7F0CF2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 236.36;
		t.x = 142.67;
		t.y = 96;
		return t;
	};
	_proto.btn_17_i = function () {
		var t = new eui.Button();
		this.btn_17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "成交";
		t.skinName = "BaseButtonSkin";
		t.width = 110;
		t.x = 380;
		t.y = 94;
		return t;
	};
	_proto.btn_18_i = function () {
		var t = new eui.Button();
		this.btn_18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "不要";
		t.skinName = "BaseButtonSkin";
		t.width = 110;
		t.x = 500;
		t.y = 94;
		return t;
	};
	_proto.gp_8_i = function () {
		var t = new eui.Group();
		this.gp_8 = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.lbl_post_1_i(),this.lbl_num5_i(),this.btn_19_i(),this.btn_20_i()];
		return t;
	};
	_proto.lbl_post_1_i = function () {
		var t = new eui.Label();
		this.lbl_post_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 480;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.lbl_num5_i = function () {
		var t = new eui.Label();
		this.lbl_num5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x7F0CF2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 236.36;
		t.x = 142.67;
		t.y = 96;
		return t;
	};
	_proto.btn_19_i = function () {
		var t = new eui.Button();
		this.btn_19 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "还钱";
		t.skinName = "BaseButtonSkin";
		t.width = 110;
		t.x = 390;
		t.y = 94;
		return t;
	};
	_proto.btn_20_i = function () {
		var t = new eui.Button();
		this.btn_20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "再缓缓";
		t.skinName = "BaseButtonSkin";
		t.width = 110;
		t.x = 510;
		t.y = 94;
		return t;
	};
	_proto.gp_9_i = function () {
		var t = new eui.Group();
		this.gp_9 = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.lbl_buy_1_i(),this.lbl_num6_i(),this.btn_21_i(),this.btn_22_i()];
		return t;
	};
	_proto.lbl_buy_1_i = function () {
		var t = new eui.Label();
		this.lbl_buy_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.45;
		t.horizontalCenter = -10.5;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 348.61;
		t.y = 35.89;
		return t;
	};
	_proto.lbl_num6_i = function () {
		var t = new eui.Label();
		this.lbl_num6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xbcb3b3;
		t.height = 40;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x7F0CF2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 509.42;
		t.y = 26.19;
		return t;
	};
	_proto.btn_21_i = function () {
		var t = new eui.Button();
		this.btn_21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "购买";
		t.skinName = "BaseButtonSkin";
		t.width = 142;
		t.x = 162;
		t.y = 94;
		return t;
	};
	_proto.btn_22_i = function () {
		var t = new eui.Button();
		this.btn_22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "再想想";
		t.skinName = "BaseButtonSkin";
		t.width = 282;
		t.x = 323;
		t.y = 94;
		return t;
	};
	_proto.gp_10_i = function () {
		var t = new eui.Group();
		this.gp_10 = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.lbl_sell_1_i(),this.lbl_num7_i(),this.btn_23_i(),this.btn_24_i()];
		return t;
	};
	_proto.lbl_sell_1_i = function () {
		var t = new eui.Label();
		this.lbl_sell_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.45;
		t.horizontalCenter = -10.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 348.61;
		t.x = 135;
		t.y = 35.8900000000001;
		return t;
	};
	_proto.lbl_num7_i = function () {
		var t = new eui.Label();
		this.lbl_num7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xe2d9d9;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x7F0CF2;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 509.4200000000001;
		t.y = 26.190000000000055;
		return t;
	};
	_proto.btn_23_i = function () {
		var t = new eui.Button();
		this.btn_23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "卖出";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BaseButtonSkin";
		t.width = 142;
		t.x = 162;
		t.y = 94;
		return t;
	};
	_proto.btn_24_i = function () {
		var t = new eui.Button();
		this.btn_24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.label = "再想想";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BaseButtonSkin";
		t.width = 282;
		t.x = 323;
		t.y = 94;
		return t;
	};
	_proto.img_pop_i = function () {
		var t = new eui.Image();
		this.img_pop = t;
		t.height = 96;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "qua_2_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 96;
		t.x = 20;
		t.y = -204;
		return t;
	};
	_proto.gp_11_i = function () {
		var t = new eui.Group();
		this.gp_11 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.rect_evt_i(),this.lbl_event_1_i(),this.btn_25_i()];
		return t;
	};
	_proto.rect_evt_i = function () {
		var t = new eui.Rect();
		this.rect_evt = t;
		t.fillAlpha = 0.3;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbl_event_1_i = function () {
		var t = new eui.Label();
		this.lbl_event_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 480;
		t.y = 728;
		return t;
	};
	_proto.btn_25_i = function () {
		var t = new eui.Button();
		this.btn_25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 0;
		t.label = "知道了";
		t.skinName = "BaseButtonSkin";
		t.width = 142;
		t.y = 818;
		return t;
	};
	_proto.gp_over_i = function () {
		var t = new eui.Group();
		this.gp_over = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 640;
		t.elementsContent = [this._Rect2_i(),this.lbl_over_1_i(),this.btn_26_i(),this.btn_27_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x8f9b71;
		t.percentHeight = 100;
		t.strokeColor = 0x2bed1c;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lbl_over_1_i = function () {
		var t = new eui.Label();
		this.lbl_over_1 = t;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.width = 500;
		t.y = 140;
		return t;
	};
	_proto.btn_26_i = function () {
		var t = new eui.Button();
		this.btn_26 = t;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 120;
		t.horizontalCenter = 0;
		t.label = "再来一把";
		t.skinName = "BaseButtonSkin";
		return t;
	};
	_proto.btn_27_i = function () {
		var t = new eui.Button();
		this.btn_27 = t;
		t.bottom = 60;
		t.height = 120;
		t.horizontalCenter = 0;
		t.label = "炫耀";
		t.skinName = "BaseButtonSkin";
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MarketItemSkin.exml'] = window.MarketItemSkin = (function (_super) {
	__extends(MarketItemSkin, _super);
	function MarketItemSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","lbl_name","lbl_price"];
		
		this.height = 40;
		this.width = 258;
		this.elementsContent = [this.rect_bg_i(),this.lbl_name_i(),this.lbl_price_i()];
	}
	var _proto = MarketItemSkin.prototype;

	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillAlpha = 0;
		t.fillColor = 0xd6bebe;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.anchorOffsetX = 0;
		t.left = 2;
		t.size = 22;
		t.text = "一二三四五六";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 154;
		return t;
	};
	_proto.lbl_price_i = function () {
		var t = new eui.Label();
		this.lbl_price = t;
		t.right = 2;
		t.size = 22;
		t.text = "100000000";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return MarketItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RankSkin.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
	}
	var _proto = RankSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x868e8d;
		t.percentHeight = 100;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.scale9Grid = new egret.Rectangle(43,14,259,90);
		t.source = "img_5_png";
		t.width = 600;
		t.x = 20;
		t.y = 160;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(43,14,259,90);
		t.source = "img_5_png";
		t.width = 600;
		t.x = 20;
		t.y = 878.79;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 30.61;
		t.multiline = false;
		t.size = 22;
		t.text = "微信名字最长一二三四五六七八九十";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.width = 166.15;
		t.x = 138.98;
		t.y = 193.35;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "99";
		t.textColor = 0xed1515;
		t.width = 40;
		t.x = 40;
		t.y = 191.81;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "1234567890123456";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.width = 250;
		t.x = 349.64;
		t.y = 192.13;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.text = "好友排行榜";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 228;
		t.y = 95.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "qua_0_png";
		t.x = 80;
		t.y = 182.81;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 40;
		t.source = "qua_0_png";
		t.x = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.source = "qua_0_png";
		t.width = 258.61;
		t.x = 361.39;
		t.y = 1049.58;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	function StartSkin() {
		_super.call(this);
		this.skinParts = ["lbl_name","lbl_content","btn_1","btn_2","btn_3"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.lbl_name_i(),this.lbl_content_i(),this.btn_1_i(),this.btn_2_i(),this.btn_3_i()];
	}
	var _proto = StartSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd7b1db;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.source = "qua_1_png";
		t.width = 282;
		t.y = 74;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "134534457447";
		t.textAlign = "center";
		t.textColor = 0x022ff4;
		t.verticalAlign = "middle";
		t.y = 92;
		return t;
	};
	_proto.lbl_content_i = function () {
		var t = new eui.Label();
		this.lbl_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 550;
		t.horizontalCenter = 0;
		t.text = "222222";
		t.textColor = 0x000000;
		t.width = 514;
		t.y = 212.72;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Button();
		this.btn_1 = t;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.skinName = "BaseButtonSkin";
		t.y = 780;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Button();
		this.btn_2 = t;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.skinName = "BaseButtonSkin";
		t.visible = false;
		t.y = 880;
		return t;
	};
	_proto.btn_3_i = function () {
		var t = new eui.Button();
		this.btn_3 = t;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.skinName = "BaseButtonSkin";
		t.visible = false;
		t.y = 980;
		return t;
	};
	return StartSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StoreItemSkin.exml'] = window.StoreItemSkin = (function (_super) {
	__extends(StoreItemSkin, _super);
	function StoreItemSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","lbl_name","lbl_price","lbl_num","img_up"];
		
		this.height = 40;
		this.width = 336;
		this.elementsContent = [this.rect_bg_i(),this.lbl_name_i(),this.lbl_price_i(),this.lbl_num_i(),this.img_up_i()];
	}
	var _proto = StoreItemSkin.prototype;

	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillAlpha = 0;
		t.fillColor = 0x444444;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.anchorOffsetX = 0;
		t.left = 2;
		t.size = 22;
		t.text = "一二三四五六";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 154;
		return t;
	};
	_proto.lbl_price_i = function () {
		var t = new eui.Label();
		this.lbl_price = t;
		t.size = 22;
		t.text = "100000000";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 156;
		return t;
	};
	_proto.lbl_num_i = function () {
		var t = new eui.Label();
		this.lbl_num = t;
		t.size = 22;
		t.text = "111";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 278;
		return t;
	};
	_proto.img_up_i = function () {
		var t = new eui.Image();
		this.img_up = t;
		t.height = 40;
		t.source = "qua_3_png";
		t.visible = false;
		t.width = 10;
		t.x = 318;
		t.y = 1;
		return t;
	};
	return StoreItemSkin;
})(eui.Skin);