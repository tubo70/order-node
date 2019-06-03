import { Order } from '../model/Order';

export interface IOrderRepository {
    /**
     * 根据ID获取订单
     * 
     * @param id ID
     */
    get(id: string): Order;
    /**
     * 添加订单
     * 
     * @param order 订单
     */
    add(order: Order): void;
    /**
     * 修改订单
     * @param order 订单
     */
    update(order: Order): void;
}