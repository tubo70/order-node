import { EntityRepository, Repository } from "typeorm";
import { OrderItemEntity } from "../entity/OrderItemEntity";

@EntityRepository(OrderItemEntity)
export class OrderItemEntityRepository extends Repository<OrderItemEntity> {
    async findByOrderId(orderId: string) {
        let results = await this.find({ orderId: orderId });
        if (!results || results.length == 0) {
            return null;
        }
        return results[0];
    }
}