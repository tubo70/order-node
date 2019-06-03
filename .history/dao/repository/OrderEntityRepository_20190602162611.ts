import { EntityRepository, Repository } from "typeorm";
import { default as OrderEntity } from "../entity/OrderEntity";

@EntityRepository(OrderEntity)
export class OrderEntityRepository extends Repository<OrderEntity> {

}