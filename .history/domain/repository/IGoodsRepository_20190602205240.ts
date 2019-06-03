import { Goods } from '../model/Goods';
import { IRepository } from './IRepository';

export interface IGoodsRepository extends IRepository<Goods> {
    /**
     * 根据商品编码获取商品
     * 
     * @param code 商品编码
     */
    getByCode(code: string): Promise<Goods>;
}