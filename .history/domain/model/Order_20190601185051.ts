import { OrderItem } from './OrderItem';

export class Order {
    id: string;
    orderAmount: number;
    carriageFee: number;
    items: OrderItem[];

    constructor(id: string) {
        this.id = id;
        this.orderAmount = 0;
        this.carriageFee = 0;
        this.items = [];
    }
    get paymentAmount() {
        return this.orderAmount + this.carriageFee;
    }
    private getItemByGoodsId(goodsId: string) {
        let result = this.items.filter(item => item.goodsId == goodsId);
        if (!result || result.length == 0) {
            return null;
        }
        return result[0];
    }
    addItm(goodsId: string, goodsName: string, goodsPrice: number, quantity: number) {
        let item = this.getItemByGoodsId(goodsId);
        if (item) {
            item.addQuantity(quantity);
        } else {
            item = new OrderItem('123', goodsId, goodsName, goodsPrice, quantity);
            this.items.push(item);
        }
        let sum = 0;
        this.items.forEach(item => sum += item.sum);
        this.orderAmount = sum;
    }

}