/**
 * 数值公式
 * 
 */

class Formula {
	public constructor() {
	}

	/**每天结算----债务 */
	public static getDebt(old:number):number{
		return Math.floor(old * 1.15);
	}

	/**每天结算----银行利息 */
	public static getDeposit(old:number):number{
		return Math.floor(DataBase.deposit * 1.04);
	}
	

	/**每日其他事件几率 */
	public static getOtherEvent():Object{
		let o:Object;
		let b = Math.random() < 0.1;
		if (b) {
			o = {};
			let a = Math.floor(Math.random() * 4) + 1;
			let b = Math.random() < 0.5 ? 1 : 2;
			let c = Math.floor(Math.random() * 3) + 1;
			o['a'] = a;
			o['b'] = b;
			o['c'] = c;
		}
		return o;
	}

	public static diss1: number[] = [0.3, 3, 8];
	/**market商品的价格第一次随机概率 ：上下限浮动概率 */
	public static getRandom1(): number {
		let r = Math.random();
		if (r < 0.1) {
			let i = Math.floor(Math.random() * 3);
			return Formula.diss1[i];
		}
		else {
			return 1;
		}
	}
	/**market商品的价格第二次随机概率正负 ：后续价格比正常价格是否增加 */
	public static isAdd():boolean{
		return Math.random() < 0.5;
	}

	/**market商品的价格第二次随机概率 ：上下浮动offset */
	public static getRandom2():number{
		return Math.random() * 0.2;
	}

	/**market商品的价格第三次次随机是否出现特殊事件 */
	public static apperEvent():boolean{
		return Math.random() < 0.05;
	}

	public static diss2: number[] = [0.1, 0.2, 5, 10];
	/**market商品的价格第三次次随机出现特殊事件的翻倍数 */
	public static getRandom3():number{
		let i = Math.floor(Math.random() * 4);
		return Formula.diss2[i];
	}
}