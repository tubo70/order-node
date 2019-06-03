import { OrderItem } from './OrderItem';

export class Order {
    id: string;
    totalAmount:number;
    paymentAmount:number;
    carriageFee:number;
    items: OrderItem[];

    constructor(id: string) {
        this.id = id;
        this.totalAmount = 0;
        this.paymentAmount = 0;
        this.items = [];
    }
    private isGoodsIdIsExsited(goodsId: string) {
        let goodsIdIsExsited: boolean = false;
        this.items.forEach(item => {
            if (!goodsIdIsExsited) {
                goodsIdIsExsited = item.goodsId == goodsId;
            }
        });
        return goodsIdIsExsited;
    }
    private getItemByGoodsId(goodsId: string) {
        let item: OrderItem = null;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].goodsId == goodsId) {
                item = this.items[0];
            }
        }
        return item;
    }
    public addItm(goodsId: string, goodsName: string, quantity: number) {

    }

}