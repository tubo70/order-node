export class OrderItem {
    /**
     * ID
     */
    private _id: string;
    private _goodsId: string;
    private _goodsName: string;
    private _goodsPrice: number;
    private _amount: number;

    public set id(id:string){
        this._id = id;
    }
    public get id() {
        return this._id;
    }
    public get goodsId() {
        return this._goodsId;
    }
    constructor(id: string, goodsId: string) {
        this.id = id;
        this._goodsId = goodsId;
        this._goodsPrice = 3;
    }
}