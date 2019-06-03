import { Order } from '../model/Order';

export interface IOrderRepository {
    /**
     * 根据ID获取订单
     * 
     * @param id ID
     */
    get(id: string): Order;
}