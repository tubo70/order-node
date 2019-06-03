import { OrderItem } from './OrderItem';

export class Order {
    id: string;
    totalAmount: number;
    paymentAmount: number;
    carriageFee: number;
    items: OrderItem[];

    constructor(id: string) {
        this.id = id;
        this.totalAmount = 0;
        this.paymentAmount = 0;
        this.items = [];
    }
    private getItemByGoodsId(goodsId: string) {
        let result = this.items.filter(item => item.goodsId == goodsId);
        if (!result || result.length == 0) {
            return null;
        }
        return result[0];
    }
    public addItm(goodsId: string, goodsName: string, goodsPrice: number, quantity: number) {
        let item = this.getItemByGoodsId(goodsId);
        if (item) {
            item.addQuantity(quantity);
        } else {
            item = new OrderItem('123', goodsId, goodsName, goodsPrice, quantity);
            this.items.push(item);
        }
    }

}