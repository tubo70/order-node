import { Goods } from '../model/Goods';

export interface IGoodsRepository {
    get(id: string): Goods;
    add(goods: Goods): void;
    update(goods: Goods): void;
    delete(id: string): void;
    getByCode(code: string): Goods;
}