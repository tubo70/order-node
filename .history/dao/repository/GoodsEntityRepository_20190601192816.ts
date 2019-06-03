import { EntityRepository, Repository } from "typeorm";
import { GoodsEntity } from "../entity/GoodsEntity";

@EntityRepository(GoodsEntity)
export class GoodsEntityRepository extends Repository<GoodsEntity> {
    
}