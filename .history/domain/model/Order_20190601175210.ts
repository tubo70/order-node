import { OrderItem } from './OrderItem';
export class Order {
    id: string;

    items: OrderItem[];

    constructor(id: string) {
        this.id = id;
    }

    addItm(goodsId: string, goodsName: string, quantity: number) {
        let goodsIdIsExsited: boolean = false;
        this.items.forEach(item => {
            if (!goodsIdIsExsited) {
                goodsIdIsExsited = item.goodsId == goodsId;
            }
        });
    }

}