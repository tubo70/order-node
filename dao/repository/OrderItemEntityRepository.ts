import { EntityRepository, Repository } from "typeorm";
import { OrderItemEntity } from "../entity/OrderItemEntity";

@EntityRepository(OrderItemEntity)
export class OrderItemEntityRepository extends Repository<OrderItemEntity> {
    async findByOrderId(orderId: string):Promise<OrderItemEntity[]> {
        return await this.find({ orderId: orderId });
    }
}