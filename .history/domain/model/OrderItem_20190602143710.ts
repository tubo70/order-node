import { IEntity } from "./IEntity";
import { Order } from "./Order";

export class OrderItem implements IEntity {
    /**
     * ID
     */
    id: string;
    /**
     * 商品ID
     */
    goodsId: string;
    /**
     * 商品名称
     */
    goodsName: string;
    /**
     * 商品单价
     */
    goodsPrice: number;
    /**
     * 数量
     */
    quantity: number;
    /**
     * 订单项构造函数
     * 
     * @param id Id
     * @param goodsId 商品ID
     * @param goodsPrice  商品单价
     * @param quantity 数量
     */
    constructor(id?: string,
        goodsId?: string,
        goodsName?: string,
        goodsPrice?: number,
        quantity?: number) {
        this.id = id;
        this.goodsId = goodsId;
        this.goodsName = goodsName;
        this.goodsPrice = goodsPrice;
        this.quantity = quantity;
    }
    get sum() {
        return this.goodsPrice * this.quantity;
    }
    addQuantity(quantity: number) {
        this.quantity += quantity;
    }

    static fill(id:string, goodsId:string, goodsName:string, goodsPrice:number, quantity:number): OrderItem {
        let orderItem = new OrderItem();
        orderItem.id = id;
        orderItem.goodsId = goodsId;
        orderItem.goodsName = goodsName;
        orderItem.goodsPrice = goodsPrice;
        orderItem.quantity = quantity;
        return orderItem;
    }
}