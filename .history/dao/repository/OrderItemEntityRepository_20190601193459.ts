import { EntityRepository, Repository } from "typeorm";
import { OrderItemEntity } from "../entity/OrderItemEntity";

@EntityRepository(OrderItemEntity)
export class OrderItemEntityRepository extends Repository<OrderItemEntity> {
    
}