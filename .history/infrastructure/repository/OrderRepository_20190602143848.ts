import { IOrderRepository } from '../../domain/repository/IOrderRepository';
import { OrderEntity } from '../../dao/entity/OrderEntity';
import { Order } from '../../domain/model/Order';
import { OrderItem } from '../../domain/model/OrderItem';
import { OrderEntityRepository } from '../../dao/repository/OrderEntityRepository';
import { IUnitOfWorkRepository } from '../../domain/repository/IUnitOfWorkRepository';
import { TypeOrmRepository } from './TypeOrmRepository';
import { IUnitOfWork } from '../../domain/repository/IUnitOfWork';
import { getCustomRepository } from 'typeorm';
import { OrderItemEntityRepository } from '../../dao/repository/OrderItemEntityRepository';
import { OrderItemEntity } from '../../dao/entity/OrderItemEntity';

export class OrderRepository extends TypeOrmRepository<Order> implements IOrderRepository {

    orderEntityRepository: OrderEntityRepository;
    orderItemEntityRepository: OrderItemEntityRepository;

    constructor() {
        super();
        this.orderEntityRepository = getCustomRepository(OrderEntityRepository);
        this.orderItemEntityRepository = getCustomRepository(OrderItemEntityRepository);
    }
    async get(id: string): Promise<Order> {
        let entity = await this.orderEntityRepository.find({ id: id });
        if (!entity || entity.length == 0) {
            return null;
        }
        let itemEntities = await this.orderItemEntityRepository.findByOrderId(id);
        let items: OrderItem[] = [];
        for (let i = 0; i < itemEntities.length; i++) {
            items.push(this.mapItemModel(itemEntities[i]));
        }
        return new Order('123');
    }
    mapItemModel(source: OrderItemEntity): OrderItem {
        return OrderItem.fill(source.id, source.goodsId, source.goodsName, source.goodsPrice, source.quantity);
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