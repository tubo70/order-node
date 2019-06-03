import { Order } from '../model/Order';
import { IRepository } from './IRepository';

export interface IOrderRepository extends IRepository<Order> {
    /**
     * 根据ID获取订单
     * 
     * @param id 订单ID
     */
    get(id: string): Order;

    /**
     * 修改订单
     * @param order 订单
     */
    update(order: Order): void;
    /**
     * 删除订单
     * 
     * @param id 订单ID
     */
    delete(id:string):void;
}