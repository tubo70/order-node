import { OrderItem } from './OrderItem';
import { IAggregateRoot } from './IAggregateRoot';

export class Order implements IAggregateRoot {
    id: string;
    orderAmount: number;
    carriageFee: number;
    items: OrderItem[];

    constructor(id?: string) {
        if (id) {
            this.id = id;
        }
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
    private sum() {
        let sum = 0;
        this.items.forEach(item => sum += item.sum);
        this.orderAmount = sum;
    }
    addItm(goodsId: string, goodsName: string, goodsPrice: number, quantity: number) {
        let item = this.getItemByGoodsId(goodsId);
        if (item) {
            item.addQuantity(quantity);
        } else {
            item = new OrderItem('123', goodsId, goodsName, goodsPrice, quantity);
            this.items.push(item);
        }
        this.sum();
    }
    removeItem(goodsId: string) {
        let item = this.getItemByGoodsId(goodsId);
        if (!item) {
            return;
        }
        let index = this.items.indexOf(item);
        this.items.slice(index, 1);
        this.sum();
    }

    static fill(id: string, orderAmount: number, carriageFee: number, items: OrderItem[]):Order {
        let order = new Order();
        order.id = id;
        order.orderAmount = orderAmount;
        order.carriageFee = carriageFee;
        if (items) {
            order.items = items;
        }
        return order;
    }
}