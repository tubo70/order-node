import { EntityRepository, Repository } from "typeorm";
import { OrderEntity } from "../entity/OrderEntity";

@EntityRepository(OrderEntity)
export class UserRepository extends Repository<OrderEntity> {
    
}