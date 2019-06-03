import { IOrderRepository } from '../../domain/repository/IOrderRepository';
import { OrderEntity } from '../../dao/entity/OrderEntity';
import { Order } from '../../domain/model/Order';
import { OrderItem } from '../../domain/model/OrderItem';
import { OrderEntityRepository } from '../../dao/repository/OrderEntityRepository';
import { IUnitOfWorkRepository } from '../../domain/repository/IUnitOfWorkRepository';
import { TypeOrmRepository } from './TypeOrmRepository';
import { IUnitOfWork } from '../../domain/repository/IUnitOfWork';
import { getCustomRepository } from 'typeorm';

export class OrderRepository extends TypeOrmRepository<Order> implements IOrderRepository {

    orderEntityRepository:OrderEntityRepository;
    
    constructor() {
        super();
        this.orderEntityRepository = getCustomRepository(OrderEntityRepository);
    }
    async get(id: string): Promise<Order> {
        await this.orderEntityRepository.find({id:id});
        return new Order('123');
    }

    async add(order: Order): Promise<void> {
        let entity = new OrderEntity();
        this.registerAddEntity(entity);

    }
    async update(model: Order): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(model: Order): Promise<void> {
        throw new Error("Method not implemented.");
    }
}