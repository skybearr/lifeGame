class AchieveVO {
	public constructor() {
	}

	public id:string;
	public type:number;
	public content:string;
	public need:{id:number,value:number}[];
	/** 0未达成 1已达成 2可购买  */
	public state:number;
	public have:number;
}