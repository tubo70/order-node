import { IAggregateRoot } from "./IAggregateRoot";

export class Goods implements IAggregateRoot {
    id: string;
    code: string;
    name: string;
    price: number;
    stock: number;
    private constructor(id?: string, code?: string, name?: string, price?: number, stock?: number) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    static create(id: string, code: string, name: string, price: number, stock: number): Goods {
        return new Goods(id, code, name, price, stock);
    }
    changePrice(price: number) {
        this.price = price;
    }

    static fill(id: string, code: string, name: string, price: number, stock: number): Goods {
        let goods = new Goods();
        goods.id = id;
        goods.code = code;
        goods.name = name;
        goods.price = price;
        goods.stock = stock;
        return goods;
    }
}