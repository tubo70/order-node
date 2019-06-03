import { IOrderRepository } from '../../domain/repository/IOrderRepository';
import { OrderEntity } from '../../dao/entity/OrderEntity';
import { Order } from '../../domain/model/Order';
import { OrderItem } from '../../domain/model/OrderItem';
import { OrderEntityRepository } from '../../dao/repository/OrderEntityRepository';

export class OrderRepository implements IOrderRepository {
    constructor(orderEntityRepository:OrderEntityRepository){

    }
    get(id: string): Order {
        
        throw new Error("Method not implemented.");
    }
    add(order: Order): void {
        throw new Error("Method not implemented.");
    }
    update(order: Order): void {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
}