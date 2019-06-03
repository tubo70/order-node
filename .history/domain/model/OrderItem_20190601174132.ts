export class OrderItem {
    /**
     * ID
     */
    id: string;
    goodsId: string;
    goodsName: string;
    goodsPrice: number;
    quantity: number;
    /**
     * 订单项构造函数
     * 
     * @param id Id
     * @param goodsId 商品ID
     * @param goodsPrice  商品单价
     * @param quantity 数量
     */
    constructor(id: string, 
        goodsId: string, 
        goodsPrice: number, 
        quantity: number) {
        this.id = id;
        this.goodsId = goodsId;
        this.goodsPrice = goodsPrice;
        this.quantity = quantity;
    }
}