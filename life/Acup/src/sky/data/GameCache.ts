class GameCache {
	public constructor() {
	}

	public static points:Object;
	public static points_names:Object;

	public static mers:Object;

	public static illness:Object;


	public static initData(){
		let data = RES.getRes("acup_data_json");
		this.points = data['gdAcup'];
		this.mers = data['gdMeridian'];
		this.illness = data['gdIllness'];

		this.points_names = {};
		for(let id in this.points){
			let o = this.points[id];
			this.points_names[o['nam']] = id;
		}
	}
}