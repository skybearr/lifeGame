class DataBase {
	public constructor() {
	}

	public static gameState:number;
	public static gamePackage:number;

	public static money:number;//Int64;
	/**债务 */
	public static debt:number;
	/**存款 */
	public static deposit:number;//Int64;
	public static pow:number;
	public static times:number;
	public static maxStoreNum:number;
	/**声望 */
	public static fame:number;

	public static marketGoods:varGoods[];
	public static storeGoods:varGoods[];
	public static events:string[];

}