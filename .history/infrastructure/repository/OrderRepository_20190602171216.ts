import { IOrderRepository } from '../../domain/repository/IOrderRepository';
import OrderEntity  from '../../dao/entity/OrderEntity';
import { Order } from '../../domain/model/Order';
import { OrderItem } from '../../domain/model/OrderItem';
import { OrderEntityRepository } from '../../dao/repository/OrderEntityRepository';
import { TypeOrmRepository } from './TypeOrmRepository';
import { getCustomRepository } from 'typeorm';
import { OrderItemEntityRepository } from '../../dao/repository/OrderItemEntityRepository';
import { OrderItemEntity } from '../../dao/entity/OrderItemEntity';

export default class OrderRepository extends TypeOrmRepository<Order> implements IOrderRepository {

    orderEntityRepository: OrderEntityRepository;
    orderItemEntityRepository: OrderItemEntityRepository;

    constructor() {
        super();
        // this.orderEntityRepository = getCustomRepository(OrderEntityRepository);
        // this.orderItemEntityRepository = getCustomRepository(OrderItemEntityRepository);
    }
    async get(id: string): Promise<Order> {
        let entities = await this.orderEntityRepository.find({ id: id });
        if (!entities || entities.length == 0) {
            return null;
        }
        let entity = entities[0];
        let itemEntities = await this.orderItemEntityRepository.findByOrderId(id);
        let items: OrderItem[] = [];
        for (let i = 0; i < itemEntities.length; i++) {
            items.push(this.mapItemModel(itemEntities[i]));
        }
        return Order.fill(entity.id, entity.orderAmount, entity.carriageFee, items);
    }
    mapItemModel(source: OrderItemEntity): OrderItem {
        return OrderItem.fill(source.id, source.goodsId, source.goodsName, source.goodsPrice, source.quantity);
    }

    async add(order: Order): Promise<void> {
        if (!order) {
            return;
        }
        let entity = this.mapOrderEntity(order, null);
        let itemEntities: OrderItemEntity[] = [];
        for (let i = 0; i < order.items.length; i++) {
            let itemEntity = this.mapOrderItemEntity(order.items[i], null, order.id);
            this.registerAddEntity(itemEntity);
        }
        this.registerAddEntity(entity);

    }
    async update(model: Order): Promise<void> {
        let entities = await this.orderEntityRepository.find({ id: model.id });
        if (!entities || entities.length == 0) {
            return;
        }
        let entity = this.mapOrderEntity(model, entities[0]);
        let oldItemEntities = await this.orderItemEntityRepository.findByOrderId(model.id);
        for (let i = 0; i < model.items.length; i++) {
            let orderItem = model.items[i];
            let oldItems = await oldItemEntities.filter(item => item.id == orderItem.id);
            let oldItemEntity: OrderItemEntity = null;
            if (oldItems && oldItems.length > 0) {
                oldItemEntity = oldItems[0];
            }
            let itemEntity = this.mapOrderItemEntity(orderItem, oldItemEntity, model.id);
            this.registerAddEntity(itemEntity);
        }
        throw new Error("Method not implemented.");
    }
    async delete(model: Order): Promise<void> {
        let entities = await this.orderEntityRepository.find({ id: model.id });
        let itemEntities = await this.orderItemEntityRepository.findByOrderId(model.id);
        entities.forEach(entity=>{
            this.registerDleteEntity(entity);
        });
        itemEntities.forEach(entity=>{
            this.registerDleteEntity(entity);
        });
    }
    mapOrderEntity(source: Order, target: OrderEntity): OrderEntity {
        let entity = target;
        if (!entity) {
            entity = new OrderEntity();
        }
        entity.id = source.id;
        entity.carriageFee = source.carriageFee;
        entity.orderAmount = source.orderAmount;
        return entity;
    }
    mapOrderItemEntity(source: OrderItem, target: OrderItemEntity, orderId: string): OrderItemEntity {
        let entity = target;
        if (!entity) {
            entity = new OrderItemEntity();
        }
        entity.id = source.id;
        entity.goodsId = source.goodsId;
        entity.goodsName = source.goodsName;
        entity.goodsPrice = source.goodsPrice;
        entity.orderId = orderId;
        entity.quantity = source.quantity;
        return entity;
    }
}