import {IOrderRepository} from '../../domain/repository/IOrderRepository';
import {Order} from '../../domain/model/Order';
import {OrderItem} from '../../domain/model/OrderItem';
export class OrderRepository implements IOrderRepository{
    get(id: string): Order {
        throw new Error("Method not implemented.");
    }    add(order: Order): void {
        throw new Error("Method not implemented.");
    }
    update(order: Order): void {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }   
}