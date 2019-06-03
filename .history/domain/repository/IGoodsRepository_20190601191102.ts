import { Goods } from '../model/Goods';

export interface IGoodsRepository {
    /**
     * 根据商品ID获取商品
     * 
     * @param id 商品ID
     * @returns 商品
     */
    get(id: string): Goods;
    /**
     * 添加商品
     * 
     * @param goods 商品
     */
    add(goods: Goods): void;
    /**
     * 修改商品
     * 
     * @param goods 商品
     */
    update(goods: Goods): void;
    /**
     * 删除商品
     * 
     * @param id 商品ID
     */
    delete(id: string): void;
    /**
     * 根据商品编码获取商品
     * 
     * @param code 商品编码
     */
    getByCode(code: string): Goods;
}