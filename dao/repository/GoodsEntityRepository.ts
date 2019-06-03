import { EntityRepository, Repository } from "typeorm";
import { GoodsEntity } from "../entity/GoodsEntity";

@EntityRepository(GoodsEntity)
export class GoodsEntityRepository extends Repository<GoodsEntity> {
    async findByCode(code:string){
        let results = await this.find({code:code});
        if(!results || results.length == 0){
            return null;
        }
        return results[0];
    }
}