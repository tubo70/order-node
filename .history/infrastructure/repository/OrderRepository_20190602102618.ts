import { IOrderRepository } from '../../domain/repository/IOrderRepository';
import { OrderEntity } from '../../dao/entity/OrderEntity';
import { Order } from '../../domain/model/Order';
import { OrderItem } from '../../domain/model/OrderItem';
import { OrderEntityRepository } from '../../dao/repository/OrderEntityRepository';
import { IUnitOfWorkRepository } from '../../domain/repository/IUnitOfWorkRepository';
import { MySqlRepository } from './MySqlRepository';
import { IUnitOfWork } from '../../domain/repository/IUnitOfWork';

export class OrderRepository extends MySqlRepository<Order> implements IOrderRepository {
    constructor(orderEntityRepository: OrderEntityRepository) {
        super();
    }
    get(id: string): Order {

        throw new Error("Method not implemented.");
    }
    add(order: Order): void {
        let entity = new OrderEntity();
        this.registerAddEntity(entity);
    }
    update(order: Order): void {
        throw new Error("Method not implemented.");
    }
    delete(order: Order): void {
        throw new Error("Method not implemented.");
    }

}