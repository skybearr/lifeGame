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
		this.skinParts = ["labelDisplay"];
		
		this.height = 60;
		this.width = 160;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = BaseButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(33,25,130,4);
		t.source = "game_json.yong_6";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "150体力 ";
		t.textAlign = "center";
		t.textColor = 0x161616;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	return BaseButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AchieveItemSkin.exml'] = window.AchieveItemSkin = (function (_super) {
	__extends(AchieveItemSkin, _super);
	function AchieveItemSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","lbl_name","lbl_have","lbl_need","btn_buy"];
		
		this.height = 80;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.rect_bg_i(),this.lbl_name_i(),this.lbl_have_i(),this.lbl_need_i(),this.btn_buy_i()];
	}
	var _proto = AchieveItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.fillColor = 0x0373A3;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillColor = 0x0373a3;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.left = 18;
		t.size = 26;
		t.stroke = 1;
		t.strokeColor = 0x05c421;
		t.text = "兰博基尼幻影流光定制版";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.top = 10;
		t.touchEnabled = false;
		return t;
	};
	_proto.lbl_have_i = function () {
		var t = new eui.Label();
		this.lbl_have = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.left = 405;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x888888;
		t.text = "已拥有：10000";
		t.textAlign = "center";
		t.textColor = 0x1cef28;
		t.touchEnabled = false;
		t.verticalCenter = 21;
		t.width = 219;
		return t;
	};
	_proto.lbl_need_i = function () {
		var t = new eui.Label();
		this.lbl_need = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.left = 18;
		t.size = 20;
		t.strokeColor = 0x888888;
		t.text = "需要：现金100000000 声望1000";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.y = 47;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Button();
		this.btn_buy = t;
		t.height = 36;
		t.label = "已达成";
		t.right = 49;
		t.skinName = "BaseButtonSkin";
		t.top = 6;
		t.width = 120;
		return t;
	};
	return AchieveItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AchieveSkin.exml'] = window.AchieveSkin = (function (_super) {
	__extends(AchieveSkin, _super);
	function AchieveSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","btn_back","list","scroller","lbl_1"];
		
		this.width = 750;
		this.elementsContent = [this.rect_bg_i(),this.btn_back_i(),this._Group1_i(),this.scroller_i(),this._Label2_i(),this.lbl_1_i()];
	}
	var _proto = AchieveSkin.prototype;

	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillColor = 0x383636;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.label = "返回";
		t.right = 0;
		t.skinName = "BaseButtonSkin";
		t.y = 1274;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.top = 69;
		t.x = 86;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 160;
		t.scale9Grid = new egret.Rectangle(68,0,17,160);
		t.source = "game_json.yong_9";
		t.width = 578;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 66;
		t.size = 60;
		t.stroke = 2;
		t.text = "梦  想";
		t.textAlign = "center";
		t.textColor = 0xf700a4;
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 122;
		t.y = 45;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bounces = false;
		t.height = 820;
		t.horizontalCenter = 0;
		t.throwSpeed = 0;
		t.verticalCenter = 60;
		t.width = 640;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "现金";
		t.textColor = 0x00FF08;
		t.x = 186;
		t.y = 266;
		return t;
	};
	_proto.lbl_1_i = function () {
		var t = new eui.Label();
		this.lbl_1 = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "012345678912345678";
		t.width = 302;
		t.x = 256;
		t.y = 266;
		return t;
	};
	return AchieveSkin;
})(eui.Skin);generateEUI.paths['resource/skins/Game1Skin.exml'] = window.Game1Skin = (function (_super) {
	__extends(Game1Skin, _super);
	function Game1Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = Game1Skin.prototype;

	return Game1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin1 = 	(function (_super) {
		__extends(GameSkin$Skin1, _super);
		function GameSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","",2,"_Label1")
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
			t.height = 48;
			t.source = "game_json.yong_4";
			t.width = 48;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.height = 48;
			t.source = "game_json.public_8";
			t.width = 48;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.fontFamily = "SimHei";
			t.size = 22;
			t.stroke = 1;
			t.text = "不再显示";
			t.textColor = 0x8e6a08;
			t.verticalCenter = 0;
			t.x = 51;
			return t;
		};
		return GameSkin$Skin1;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","lbl_store","lbl_day","gp_title","gp_bg","gp_market","gp_store","btn_1","btn_2","btn_3","btn_4","btn_9","btn_6","btn_7","btn_8","btn_5","btn_11","btn_12","btn_10","gp_btn","img_sound","lbl_charity","lbl_num0","btn_0","gp_4","lbl_num1","lbl_num2","btn_13","btn_14","gp_5","lbl_hos_1","lbl_num3","btn_15","btn_16","gp_6","lbl_medi_1","lbl_num4","btn_17","btn_18","gp_7","lbl_post_1","lbl_num5","btn_19","btn_20","gp_8","lbl_buy_1","lbl_num6","btn_21","btn_22","gp_9","lbl_sell_1","lbl_num7","btn_23","btn_24","gp_10","gp_pop","lbl_1","lbl_4","lbl_5","lbl_6","lbl_2","lbl_3","gp_value","rect_evt","lbl_event_1","btn_25","cb_0","gp_11","img_over_bg1","img_over_bg0","lbl_over_1","btn_26","btn_28","btn_27","gp_over"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rect_bg_i(),this.gp_bg_i(),this.gp_market_i(),this.gp_store_i(),this.gp_btn_i(),this.img_sound_i(),this.gp_pop_i(),this.gp_value_i(),this.gp_11_i(),this.gp_over_i()];
	}
	var _proto = GameSkin.prototype;

	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillColor = 0x162b5b;
		t.height = 1334;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.top = 87;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.gp_title_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 420;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(197,31,277,52);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.b_bg43";
		t.touchEnabled = false;
		t.width = 455;
		t.y = -43;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 420;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(197,32,277,55);
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "game_json.b_bg43";
		t.touchEnabled = false;
		t.width = 320;
		t.x = 763;
		t.y = -43;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.yong_10";
		t.visible = false;
		t.width = 438;
		t.x = 171;
		t.y = 17.33;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 67;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "欢乐球球买房记";
		t.textAlign = "center";
		t.textColor = 0xea0e0e;
		t.verticalAlign = "middle";
		t.width = 498;
		t.y = 20;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 98;
		t.left = 12;
		t.scale9Grid = new egret.Rectangle(53,0,164,97);
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "game_json.yong_16";
		t.width = 520;
		t.y = 108;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 98;
		t.right = 12;
		t.scale9Grid = new egret.Rectangle(53,0,164,97);
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "game_json.yong_16";
		t.width = 692;
		t.y = 108;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(15,50,151,133);
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "game_json.n_sta_17";
		t.width = 178;
		t.x = 322;
		t.y = 168;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.left = 12;
		t.scale9Grid = new egret.Rectangle(15,50,151,133);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.n_sta_17";
		t.width = 160;
		t.x = 0;
		t.y = 168;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.right = 12;
		t.scale9Grid = new egret.Rectangle(15,50,151,133);
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "game_json.n_sta_17";
		t.width = 224;
		t.y = 168;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(15,50,151,133);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.n_sta_17";
		t.width = 238;
		t.x = 322;
		t.y = 168;
		return t;
	};
	_proto.gp_title_i = function () {
		var t = new eui.Group();
		this.gp_title = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 700;
		t.x = 18;
		t.y = 0;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this.lbl_store_i(),this._Label8_i(),this.lbl_day_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x424242;
		t.text = "市场";
		t.textColor = 0xffea00;
		t.touchEnabled = false;
		t.x = 56.89;
		t.y = 125.09;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x424242;
		t.text = "商品";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 12;
		t.y = 174;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x424242;
		t.text = "价格";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 193;
		t.y = 174;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x424242;
		t.text = "商品";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 322;
		t.y = 174;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x424242;
		t.text = "价格";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 484;
		t.y = 174;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x424242;
		t.text = "数量";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 620;
		t.y = 174;
		return t;
	};
	_proto.lbl_store_i = function () {
		var t = new eui.Label();
		this.lbl_store = t;
		t.fontFamily = "SimHei";
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "110/110";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.touchEnabled = false;
		t.x = 530.88;
		t.y = 128.08;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x424242;
		t.text = "出租屋";
		t.textColor = 0xffea00;
		t.touchEnabled = false;
		t.x = 398.29;
		t.y = 125.12;
		return t;
	};
	_proto.lbl_day_i = function () {
		var t = new eui.Label();
		this.lbl_day = t;
		t.fontFamily = "SimHei";
		t.stroke = 2;
		t.text = "40/40天";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 147.36;
		t.y = 129.13;
		return t;
	};
	_proto.gp_market_i = function () {
		var t = new eui.Group();
		this.gp_market = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 444;
		t.top = 301;
		t.touchEnabled = false;
		t.width = 296;
		t.x = 18;
		return t;
	};
	_proto.gp_store_i = function () {
		var t = new eui.Group();
		this.gp_store = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 444;
		t.top = 301;
		t.touchEnabled = false;
		t.width = 404;
		t.x = 330;
		return t;
	};
	_proto.gp_btn_i = function () {
		var t = new eui.Group();
		this.gp_btn = t;
		t.top = 1058;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image10_i(),this._Group1_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 540;
		t.scale9Grid = new egret.Rectangle(42,62,125,86);
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "game_json.soulhecheng_3";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.touchEnabled = false;
		t.x = 43;
		t.y = 24;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.btn_1_i(),this.btn_2_i(),this.btn_3_i(),this.btn_4_i(),this.btn_9_i(),this.btn_6_i(),this.btn_7_i(),this.btn_8_i(),this.btn_5_i(),this.btn_11_i(),this.btn_12_i(),this.btn_10_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 8;
		t.orientation = "rows";
		t.requestedRowCount = 3;
		t.verticalAlign = "middle";
		t.verticalGap = 8;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Button();
		this.btn_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "观前街";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Button();
		this.btn_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "石路";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 156;
		t.y = 0;
		return t;
	};
	_proto.btn_3_i = function () {
		var t = new eui.Button();
		this.btn_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "苏州中心";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 306;
		t.y = 0;
		return t;
	};
	_proto.btn_4_i = function () {
		var t = new eui.Button();
		this.btn_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "慈善";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 456;
		t.y = 0;
		return t;
	};
	_proto.btn_9_i = function () {
		var t = new eui.Button();
		this.btn_9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "增加现金";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 4;
		t.y = 138;
		return t;
	};
	_proto.btn_6_i = function () {
		var t = new eui.Button();
		this.btn_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "医院";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 156;
		t.y = 70;
		return t;
	};
	_proto.btn_7_i = function () {
		var t = new eui.Button();
		this.btn_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "中介";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 306;
		t.y = 70;
		return t;
	};
	_proto.btn_8_i = function () {
		var t = new eui.Button();
		this.btn_8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "邮局";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 456;
		t.y = 70;
		return t;
	};
	_proto.btn_5_i = function () {
		var t = new eui.Button();
		this.btn_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "银行";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 0;
		t.y = 70;
		return t;
	};
	_proto.btn_11_i = function () {
		var t = new eui.Button();
		this.btn_11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "排行榜";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 310;
		t.y = 138;
		return t;
	};
	_proto.btn_12_i = function () {
		var t = new eui.Button();
		this.btn_12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "重新开始";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 465.67;
		t.y = 138;
		return t;
	};
	_proto.btn_10_i = function () {
		var t = new eui.Button();
		this.btn_10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "玩法说明";
		t.skinName = "BaseButtonSkin";
		t.width = 160;
		t.x = 160;
		t.y = 138;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "1_png";
		t.touchEnabled = false;
		t.width = 20;
		t.x = 54;
		t.y = 100;
		return t;
	};
	_proto.img_sound_i = function () {
		var t = new eui.Image();
		this.img_sound = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "game_json.noice1_zb";
		t.width = 73;
		t.x = 19.6;
		t.y = 130.8;
		return t;
	};
	_proto.gp_pop_i = function () {
		var t = new eui.Group();
		this.gp_pop = t;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.top = 758;
		t.touchEnabled = false;
		t.width = 750;
		t.elementsContent = [this._Image12_i(),this.gp_4_i(),this.gp_5_i(),this.gp_6_i(),this.gp_7_i(),this.gp_8_i(),this.gp_9_i(),this.gp_10_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(38,37,119,122);
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "game_json.soulhecheng_3";
		t.top = 0;
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
		t.y = 16;
		t.elementsContent = [this._Rect1_i(),this.lbl_charity_i(),this.lbl_num0_i(),this.btn_0_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3BE562;
		t.height = 40;
		t.width = 434;
		t.x = 74;
		t.y = 100;
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
		t.background = false;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 418;
		t.x = 82;
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
		t.x = 530;
		t.y = 94;
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
		t.y = 11.97;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this.lbl_num1_i(),this.lbl_num2_i(),this.btn_13_i(),this.btn_14_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0x3BE562;
		t.height = 40;
		t.width = 374;
		t.x = 132;
		t.y = 24;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0x3BE562;
		t.height = 40;
		t.width = 374;
		t.x = 132;
		t.y = 80;
		return t;
	};
	_proto.lbl_num1_i = function () {
		var t = new eui.Label();
		this.lbl_num1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = 140;
		t.y = 24;
		return t;
	};
	_proto.lbl_num2_i = function () {
		var t = new eui.Label();
		this.lbl_num2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 360;
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
		t.x = 520;
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
		t.x = 520;
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
		t.y = 16;
		t.elementsContent = [this._Rect4_i(),this.lbl_hos_1_i(),this.lbl_num3_i(),this.btn_15_i(),this.btn_16_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3be562;
		t.height = 40;
		t.width = 100;
		t.x = 240;
		t.y = 96;
		return t;
	};
	_proto.lbl_hos_1_i = function () {
		var t = new eui.Label();
		this.lbl_hos_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 90;
		t.horizontalCenter = 0;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 658;
		t.y = 0;
		return t;
	};
	_proto.lbl_num3_i = function () {
		var t = new eui.Label();
		this.lbl_num3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0x3be562;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.stroke = 2;
		t.text = "999";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 252;
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
		t.x = 352;
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
		t.x = 542;
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
		t.y = 18.65;
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
		t.x = 334;
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
		t.y = 14.66;
		t.elementsContent = [this._Rect5_i(),this.lbl_post_1_i(),this.lbl_num5_i(),this.btn_19_i(),this.btn_20_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0x3BE562;
		t.height = 40;
		t.width = 293;
		t.x = 83;
		t.y = 96;
		return t;
	};
	_proto.lbl_post_1_i = function () {
		var t = new eui.Label();
		this.lbl_post_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 658;
		t.y = 0;
		return t;
	};
	_proto.lbl_num5_i = function () {
		var t = new eui.Label();
		this.lbl_num5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.stroke = 2;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 245;
		t.x = 96;
		t.y = 95;
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
		t.x = 390;
		t.y = 92;
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
		t.x = 556;
		t.y = 92;
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
		t.y = 13.33;
		t.elementsContent = [this._Rect6_i(),this.lbl_buy_1_i(),this.lbl_num6_i(),this.btn_21_i(),this.btn_22_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0x3BE562;
		t.height = 40;
		t.width = 160;
		t.x = 480;
		t.y = 26;
		return t;
	};
	_proto.lbl_buy_1_i = function () {
		var t = new eui.Label();
		this.lbl_buy_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 368;
		t.x = 96;
		t.y = 30;
		return t;
	};
	_proto.lbl_num6_i = function () {
		var t = new eui.Label();
		this.lbl_num6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xbcb3b3;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.stroke = 2;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 490;
		t.y = 26;
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
		t.x = 204;
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
		t.x = 380;
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
		t.y = 14.63;
		t.elementsContent = [this._Rect7_i(),this.lbl_sell_1_i(),this.lbl_num7_i(),this.btn_23_i(),this.btn_24_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0x3BE562;
		t.height = 40;
		t.width = 160;
		t.x = 480;
		t.y = 28;
		return t;
	};
	_proto.lbl_sell_1_i = function () {
		var t = new eui.Label();
		this.lbl_sell_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "LabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLaLabsLabsLabsLabsLabsLabsLabsbsLabsLabsLabsLabsLabsLabsLabsLabs";
		t.touchEnabled = false;
		t.width = 360;
		t.x = 96;
		t.y = 30;
		return t;
	};
	_proto.lbl_num7_i = function () {
		var t = new eui.Label();
		this.lbl_num7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xe2d9d9;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 2;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0xc3e218;
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 487;
		t.y = 28;
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
		t.x = 204;
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
		t.x = 380;
		t.y = 94;
		return t;
	};
	_proto.gp_value_i = function () {
		var t = new eui.Group();
		this.gp_value = t;
		t.top = 947;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 0;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Group2_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.scale9Grid = new egret.Rectangle(197,27,277,63);
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "game_json.b_bg43";
		t.width = 455;
		t.x = 0;
		t.y = 121.13;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.scale9Grid = new egret.Rectangle(197,31,277,59);
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "game_json.b_bg43";
		t.width = 320;
		t.x = 750;
		t.y = 121.13;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 720;
		t.x = 15;
		t.y = 0;
		t.elementsContent = [this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this.lbl_1_i(),this.lbl_4_i(),this.lbl_5_i(),this.lbl_6_i(),this.lbl_2_i(),this.lbl_3_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "现金";
		t.textColor = 0x00ff08;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "存款";
		t.textColor = 0x00ff08;
		t.x = 20;
		t.y = 36;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "欠债";
		t.textColor = 0x00ff08;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "体力";
		t.textColor = 0x00ff08;
		t.x = 446.69;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "声望";
		t.textColor = 0x00ff08;
		t.x = 446.69;
		t.y = 36;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "Q群";
		t.textColor = 0x07f70f;
		t.visible = false;
		t.width = 96;
		t.x = 446.69;
		t.y = 72;
		return t;
	};
	_proto.lbl_1_i = function () {
		var t = new eui.Label();
		this.lbl_1 = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "012345678912345678";
		t.width = 302;
		t.x = 90;
		return t;
	};
	_proto.lbl_4_i = function () {
		var t = new eui.Label();
		this.lbl_4 = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "0123";
		t.width = 100;
		t.x = 516.69;
		return t;
	};
	_proto.lbl_5_i = function () {
		var t = new eui.Label();
		this.lbl_5 = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "0123";
		t.width = 100;
		t.x = 516.69;
		t.y = 36;
		return t;
	};
	_proto.lbl_6_i = function () {
		var t = new eui.Label();
		this.lbl_6 = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "40344680";
		t.visible = false;
		t.width = 146;
		t.x = 516.69;
		t.y = 72;
		return t;
	};
	_proto.lbl_2_i = function () {
		var t = new eui.Label();
		this.lbl_2 = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "012345678912345678";
		t.width = 302;
		t.x = 90;
		t.y = 36;
		return t;
	};
	_proto.lbl_3_i = function () {
		var t = new eui.Label();
		this.lbl_3 = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x333333;
		t.text = "012345678912345678";
		t.width = 302;
		t.x = 90;
		t.y = 72;
		return t;
	};
	_proto.gp_11_i = function () {
		var t = new eui.Group();
		this.gp_11 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.rect_evt_i(),this._Image15_i(),this.lbl_event_1_i(),this.btn_25_i(),this.cb_0_i()];
		return t;
	};
	_proto.rect_evt_i = function () {
		var t = new eui.Rect();
		this.rect_evt = t;
		t.alpha = 0.7;
		t.fillAlpha = 1;
		t.height = 1334;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 750;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 324.12;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(53,48,41,33);
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "game_json.yong_3";
		t.verticalCenter = 178;
		t.width = 1435.16;
		return t;
	};
	_proto.lbl_event_1_i = function () {
		var t = new eui.Label();
		this.lbl_event_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 92.14;
		t.background = false;
		t.backgroundColor = 0xc1aaaa;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 92.14;
		t.horizontalCenter = -3;
		t.lineSpacing = 10;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.text = "卤汁豆腐干含有丰富的蛋白质、维生素、钙、铁、镁、锌等营养元素，可防止血管硬化，预防心血管疾病，补充钙质，防止因缺钙引起的骨质疏松，今年过节不收礼，收礼只收津津牌卤汁豆腐干";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 152;
		t.width = 672.42;
		return t;
	};
	_proto.btn_25_i = function () {
		var t = new eui.Button();
		this.btn_25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 121;
		t.label = "知道了";
		t.skinName = "BaseButtonSkin";
		t.verticalCenter = 219;
		return t;
	};
	_proto.cb_0_i = function () {
		var t = new eui.CheckBox();
		this.cb_0 = t;
		t.height = 48;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.x = 315;
		t.y = 870.2;
		t.skinName = GameSkin$Skin1;
		return t;
	};
	_proto.gp_over_i = function () {
		var t = new eui.Group();
		this.gp_over = t;
		t.horizontalCenter = 0;
		t.top = 0;
		t.visible = false;
		t.width = 750;
		t.elementsContent = [this.img_over_bg1_i(),this.img_over_bg0_i(),this._Image16_i(),this.lbl_over_1_i(),this.btn_26_i(),this.btn_28_i(),this.btn_27_i()];
		return t;
	};
	_proto.img_over_bg1_i = function () {
		var t = new eui.Image();
		this.img_over_bg1 = t;
		t.height = 1334;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(32,26,104,7);
		t.source = "game_json.yong_15";
		t.width = 500;
		t.y = 0;
		return t;
	};
	_proto.img_over_bg0_i = function () {
		var t = new eui.Image();
		this.img_over_bg0 = t;
		t.height = 1334;
		t.right = 2;
		t.scale9Grid = new egret.Rectangle(32,26,104,7);
		t.scaleX = -1;
		t.source = "game_json.yong_15";
		t.width = 500;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 693.64;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,51,41,30);
		t.source = "game_json.yong_3";
		t.verticalCenter = -140;
		t.width = 666;
		return t;
	};
	_proto.lbl_over_1_i = function () {
		var t = new eui.Label();
		this.lbl_over_1 = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 609.09;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0x000000;
		t.verticalCenter = -146.5;
		t.width = 600;
		return t;
	};
	_proto.btn_26_i = function () {
		var t = new eui.Button();
		this.btn_26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 376;
		t.label = "重新开始";
		t.left = 52;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "BaseButtonSkin";
		return t;
	};
	_proto.btn_28_i = function () {
		var t = new eui.Button();
		this.btn_28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 482;
		t.horizontalCenter = 0;
		t.label = "实现梦想";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "BaseButtonSkin";
		return t;
	};
	_proto.btn_27_i = function () {
		var t = new eui.Button();
		this.btn_27 = t;
		t.bottom = 376;
		t.label = "炫耀";
		t.right = 15;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "BaseButtonSkin";
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MainBtn.exml'] = window.MainBtn = (function (_super) {
	__extends(MainBtn, _super);
	function MainBtn() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 158;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("labelDisplay","left",30),
					new eui.SetProperty("labelDisplay","right",30),
					new eui.SetProperty("labelDisplay","top",6),
					new eui.SetProperty("labelDisplay","bottom",9),
					new eui.SetProperty("labelDisplay","textColor",0xc4c4c4)
				])
		];
	}
	var _proto = MainBtn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(103,0,165,159);
		t.source = "game_json.yong_7";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(103,0,165,159);
		t.source = "game_json.yong_8";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 10;
		t.fontFamily = "SimHei";
		t.left = 30;
		t.right = 30;
		t.size = 34;
		t.text = "开始游戏";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 5;
		t.verticalAlign = "middle";
		return t;
	};
	return MainBtn;
})(eui.Skin);generateEUI.paths['resource/skins/MarketItemSkin.exml'] = window.MarketItemSkin = (function (_super) {
	__extends(MarketItemSkin, _super);
	function MarketItemSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","rect_same","lbl_name","lbl_price"];
		
		this.height = 40;
		this.width = 292;
		this.elementsContent = [this._Rect1_i(),this.rect_bg_i(),this.rect_same_i(),this.lbl_name_i(),this.lbl_price_i()];
	}
	var _proto = MarketItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.fillColor = 0x0373A3;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillColor = 0x0373a3;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.rect_same_i = function () {
		var t = new eui.Rect();
		this.rect_same = t;
		t.fillAlpha = 1;
		t.fillColor = 0x098405;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.left = 2;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.text = "一二三四五六";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_price_i = function () {
		var t = new eui.Label();
		this.lbl_price = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.right = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.text = "6000000";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return MarketItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/NewGuildSkin.exml'] = window.NewGuildSkin = (function (_super) {
	__extends(NewGuildSkin, _super);
	function NewGuildSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","btn_over","btn_next","lbl_0","gp_0","lbl_1","gp_1","lbl_2","gp_2","lbl_3","gp_3","lbl_4","gp_4","lbl_5","gp_5","lbl_6","gp_6","lbl_7","gp_7","lbl_8","gp_8"];
		
		this.width = 750;
		this.elementsContent = [this.rect_bg_i(),this.btn_over_i(),this.btn_next_i(),this.gp_0_i(),this.gp_1_i(),this.gp_2_i(),this.gp_3_i(),this.gp_4_i(),this.gp_5_i(),this.gp_6_i(),this.gp_7_i(),this.gp_8_i()];
	}
	var _proto = NewGuildSkin.prototype;

	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillAlpha = 0.8;
		t.height = 1334;
		t.top = 0;
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto.btn_over_i = function () {
		var t = new eui.Button();
		this.btn_over = t;
		t.bottom = 0;
		t.label = "结束教程";
		t.left = 0;
		t.skinName = "BaseButtonSkin";
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.bottom = 0;
		t.label = "下一步";
		t.right = 0;
		t.skinName = "BaseButtonSkin";
		return t;
	};
	_proto.gp_0_i = function () {
		var t = new eui.Group();
		this.gp_0 = t;
		t.top = 87;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this.lbl_0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help0";
		t.width = 303;
		t.x = 16;
		t.y = 108;
		return t;
	};
	_proto.lbl_0_i = function () {
		var t = new eui.Label();
		this.lbl_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 430;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xedea17;
		t.width = 340;
		t.x = 360;
		t.y = 187;
		return t;
	};
	_proto.gp_1_i = function () {
		var t = new eui.Group();
		this.gp_1 = t;
		t.top = 87;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.lbl_1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 517.7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help1";
		t.width = 303;
		t.x = 16;
		t.y = 168;
		return t;
	};
	_proto.lbl_1_i = function () {
		var t = new eui.Label();
		this.lbl_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 430;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xEDEA17;
		t.width = 340;
		t.x = 360;
		t.y = 310;
		return t;
	};
	_proto.gp_2_i = function () {
		var t = new eui.Group();
		this.gp_2 = t;
		t.top = 87;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image3_i(),this.lbl_2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 574;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help2";
		t.width = 725.73;
		t.x = 14.76;
		t.y = 108;
		return t;
	};
	_proto.lbl_2_i = function () {
		var t = new eui.Label();
		this.lbl_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 288.21;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xEDEA17;
		t.width = 660.52;
		t.x = 47.89;
		t.y = 698.08;
		return t;
	};
	_proto.gp_3_i = function () {
		var t = new eui.Group();
		this.gp_3 = t;
		t.top = 945;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image4_i(),this.lbl_3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help3";
		t.width = 734.82;
		t.x = 8.68;
		t.y = 0;
		return t;
	};
	_proto.lbl_3_i = function () {
		var t = new eui.Label();
		this.lbl_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 227;
		t.horizontalCenter = -2.5;
		t.stroke = 2;
		t.text = "lable";
		t.textColor = 0xEDEA17;
		t.verticalAlign = "bottom";
		t.width = 691;
		t.y = -262.12;
		return t;
	};
	_proto.gp_4_i = function () {
		var t = new eui.Group();
		this.gp_4 = t;
		t.top = 1072;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.lbl_4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help4";
		t.width = 543;
		t.x = 16;
		return t;
	};
	_proto.lbl_4_i = function () {
		var t = new eui.Label();
		this.lbl_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 227;
		t.horizontalCenter = 0.5;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xEDEA17;
		t.verticalAlign = "bottom";
		t.width = 691;
		t.y = -260.61;
		return t;
	};
	_proto.gp_5_i = function () {
		var t = new eui.Group();
		this.gp_5 = t;
		t.top = 1135;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.lbl_5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help5";
		t.width = 187;
		t.x = 30;
		return t;
	};
	_proto.lbl_5_i = function () {
		var t = new eui.Label();
		this.lbl_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 227;
		t.horizontalCenter = 0.5;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xEDEA17;
		t.verticalAlign = "bottom";
		t.width = 691;
		t.y = -322.1;
		return t;
	};
	_proto.gp_6_i = function () {
		var t = new eui.Group();
		this.gp_6 = t;
		t.top = 1138;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.lbl_6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help6";
		t.width = 191;
		t.x = 200;
		return t;
	};
	_proto.lbl_6_i = function () {
		var t = new eui.Label();
		this.lbl_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 227;
		t.horizontalCenter = 0.5;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xEDEA17;
		t.verticalAlign = "bottom";
		t.width = 691;
		t.y = -255.44;
		return t;
	};
	_proto.gp_7_i = function () {
		var t = new eui.Group();
		this.gp_7 = t;
		t.top = 1134;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.lbl_7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help7";
		t.width = 189;
		t.x = 366;
		return t;
	};
	_proto.lbl_7_i = function () {
		var t = new eui.Label();
		this.lbl_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 227;
		t.horizontalCenter = 0.5;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xEDEA17;
		t.verticalAlign = "bottom";
		t.width = 691;
		t.y = -260;
		return t;
	};
	_proto.gp_8_i = function () {
		var t = new eui.Group();
		this.gp_8 = t;
		t.top = 1134;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.lbl_8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.help8";
		t.width = 185;
		t.x = 545.82;
		return t;
	};
	_proto.lbl_8_i = function () {
		var t = new eui.Label();
		this.lbl_8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 227;
		t.horizontalCenter = 0.5;
		t.stroke = 2;
		t.text = "Label";
		t.textColor = 0xEDEA17;
		t.width = 691;
		t.y = -260;
		return t;
	};
	return NewGuildSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RankSkin.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","lbl_2","lbl_title","img_close","btn_group","scroller_world"];
		
		this.height = 1335;
		this.width = 750;
		this.elementsContent = [this.rect_bg_i(),this._Image1_i(),this.lbl_2_i(),this.lbl_title_i(),this.img_close_i(),this.btn_group_i(),this.scroller_world_i()];
	}
	var _proto = RankSkin.prototype;

	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 742;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,12,76,76);
		t.source = "game_json.rank_bg";
		t.touchEnabled = false;
		t.width = 640;
		t.y = 200;
		return t;
	};
	_proto.lbl_2_i = function () {
		var t = new eui.Label();
		this.lbl_2 = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "每周一凌晨刷新";
		t.textColor = 0x727891;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 67;
		t.y = 208;
		return t;
	};
	_proto.lbl_title_i = function () {
		var t = new eui.Label();
		this.lbl_title = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "好友排行榜";
		t.textColor = 0xfffffe;
		t.touchEnabled = false;
		t.y = 134;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.source = "game_json.rank_back";
		t.x = 30;
		t.y = 44;
		return t;
	};
	_proto.btn_group_i = function () {
		var t = new eui.Button();
		this.btn_group = t;
		t.height = 140;
		t.horizontalCenter = 0;
		t.label = "查看群排行";
		t.skinName = "MainBtn";
		t.y = 1100;
		return t;
	};
	_proto.scroller_world_i = function () {
		var t = new eui.Scroller();
		this.scroller_world = t;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 242;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	function StartSkin() {
		_super.call(this);
		this.skinParts = ["mc","img_bg","img_sound","lbl_name","lbl_log","btn_1","btn_0","btn_10","btn_11","btn_12","btn_13","btn_14","btn_15","btn_2","btn_3","lbl_prop","img","lbl_cd","img_game"];
		
		this.width = 750;
		this.mc_i();
		this.elementsContent = [this.img_bg_i(),this.img_sound_i(),this._Image1_i(),this._Label1_i(),this.lbl_name_i(),this.lbl_log_i(),this.btn_1_i(),this.btn_0_i(),this._Group1_i(),this.btn_2_i(),this.btn_3_i(),this._Image2_i(),this.lbl_prop_i(),this.img_i(),this.lbl_cd_i(),this.img_game_i()];
		
		eui.Binding.$bindProperties(this, ["img_game"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [15],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [-15],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [15],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-15],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [15],[],this._Object6,"rotation");
		eui.Binding.$bindProperties(this, [-15],[],this._Object7,"rotation");
	}
	var _proto = StartSkin.prototype;

	_proto.mc_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mc = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._Wait1_i(),this._Set2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(22,18,139,114);
		t.source = "game_json.yong_11";
		t.verticalCenter = 0;
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto.img_sound_i = function () {
		var t = new eui.Image();
		this.img_sound = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "game_json.noice1_zb";
		t.visible = false;
		t.width = 73;
		t.x = 12.6;
		t.y = 404.8;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 160;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(68,0,17,160);
		t.source = "game_json.yong_9";
		t.top = 46;
		t.width = 578;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 67;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "欢乐球球买房记";
		t.textAlign = "center";
		t.textColor = 0xEA0E0E;
		t.verticalAlign = "middle";
		t.width = 498;
		t.y = 87;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.bold = false;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 65;
		t.strokeColor = 0x545454;
		t.text = "134534457447";
		t.textAlign = "center";
		t.textColor = 0x7a3232;
		t.verticalAlign = "middle";
		t.visible = false;
		t.y = 120;
		return t;
	};
	_proto.lbl_log_i = function () {
		var t = new eui.Label();
		this.lbl_log = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x8ef202;
		t.verticalAlign = "middle";
		t.y = 873;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Button();
		this.btn_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.skinName = "BaseButtonSkin";
		t.width = 260;
		t.y = 781.76;
		return t;
	};
	_proto.btn_0_i = function () {
		var t = new eui.Button();
		this.btn_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.skinName = "BaseButtonSkin";
		t.visible = false;
		t.width = 260;
		t.y = 643.76;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 955;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.btn_10_i(),this.btn_11_i(),this.btn_12_i(),this.btn_13_i(),this.btn_14_i(),this.btn_15_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 16;
		t.orientation = "rows";
		t.requestedColumnCount = 3;
		t.verticalGap = 30;
		return t;
	};
	_proto.btn_10_i = function () {
		var t = new eui.Button();
		this.btn_10 = t;
		t.height = 50;
		t.label = "鼓励作者";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 143;
		t.y = 0;
		return t;
	};
	_proto.btn_11_i = function () {
		var t = new eui.Button();
		this.btn_11 = t;
		t.height = 50;
		t.label = "排行榜";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 355;
		t.y = 0;
		return t;
	};
	_proto.btn_12_i = function () {
		var t = new eui.Button();
		this.btn_12 = t;
		t.height = 50;
		t.label = "分享";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.btn_13_i = function () {
		var t = new eui.Button();
		this.btn_13 = t;
		t.height = 50;
		t.label = "梦想";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.btn_14_i = function () {
		var t = new eui.Button();
		this.btn_14 = t;
		t.height = 50;
		t.label = "注意力训练";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 20;
		t.y = 21;
		return t;
	};
	_proto.btn_15_i = function () {
		var t = new eui.Button();
		this.btn_15 = t;
		t.height = 50;
		t.label = "记忆力训练";
		t.skinName = "BaseButtonSkin";
		t.width = 130;
		t.x = 30;
		t.y = 31;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Button();
		this.btn_2 = t;
		t.height = 160;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.skinName = "MainBtn";
		t.visible = false;
		t.width = 578;
		t.y = 1070;
		return t;
	};
	_proto.btn_3_i = function () {
		var t = new eui.Button();
		this.btn_3 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.skinName = "BaseButtonSkin";
		t.visible = false;
		t.width = 300;
		t.y = 1100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 15;
		t.source = "game_json.yong_10";
		t.top = 100;
		t.visible = false;
		t.width = 438;
		return t;
	};
	_proto.lbl_prop_i = function () {
		var t = new eui.Label();
		this.lbl_prop = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "分享可获得炒房券（炒房券X0）";
		t.textAlign = "center";
		t.textColor = 0x888888;
		t.verticalAlign = "middle";
		t.visible = false;
		t.y = 1219;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 20;
		t.source = "1_png";
		t.touchEnabled = false;
		t.width = 20;
		t.x = 205;
		t.y = 949.5;
		return t;
	};
	_proto.lbl_cd_i = function () {
		var t = new eui.Label();
		this.lbl_cd = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 22;
		t.text = "00:00:00";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 125.67;
		t.x = 163.65;
		t.y = 1004.66;
		return t;
	};
	_proto.img_game_i = function () {
		var t = new eui.Image();
		this.img_game = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.rotation = -15;
		t.source = "xiuzhen_png";
		t.width = 100;
		t.x = 671;
		t.y = 923;
		return t;
	};
	return StartSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StoreItemSkin.exml'] = window.StoreItemSkin = (function (_super) {
	__extends(StoreItemSkin, _super);
	function StoreItemSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg","lbl_name","lbl_price","lbl_num","img_up"];
		
		this.height = 40;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.rect_bg_i(),this.lbl_name_i(),this.lbl_price_i(),this.lbl_num_i(),this.img_up_i()];
	}
	var _proto = StoreItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x43E829;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillAlpha = 1;
		t.fillColor = 0x43e829;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.left = 2;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.text = "一二三四五六六六";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 195;
		return t;
	};
	_proto.lbl_price_i = function () {
		var t = new eui.Label();
		this.lbl_price = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.text = "100000000";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 186;
		return t;
	};
	_proto.lbl_num_i = function () {
		var t = new eui.Label();
		this.lbl_num = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.right = 53;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.text = "111";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_up_i = function () {
		var t = new eui.Image();
		this.img_up = t;
		t.height = 30;
		t.source = "game_json.arrowup";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 362;
		return t;
	};
	return StoreItemSkin;
})(eui.Skin);