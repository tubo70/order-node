import { Goods } from '../model/Goods';

export interface IGoodsRepository {
    /**
     * 根据商品ID获取商品
     * 
     * @param id 商品ID
     * @returns 商品
     */
    get(id: string): Goods;
    add(goods: Goods): void;
    update(goods: Goods): void;
    delete(id: string): void;
    getByCode(code: string): Goods;
}