import { TypeOrmRepository } from "./TypeOrmRepository";
import { IGoodsRepository } from "../../domain/repository/IGoodsRepository";
import { Goods } from "../../domain/model/Goods";
import { GoodsEntity } from "../../dao/entity/GoodsEntity";

export default class GoodsRepository extends TypeOrmRepository<Goods> implements IGoodsRepository {
    add(model: Goods): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(model: Goods): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(model: Goods): Promise<void> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<Goods> {
        throw new Error("Method not implemented.");
    }
    getByCode(code: string): Goods {
        throw new Error("Method not implemented.");
    }

    mapModel(source: GoodsEntity): Goods {
        return Goods.fill(source.id, source.code, source.name, source.price, source.stock);
    }
    mapEntity(source: Goods, target: GoodsEntity): GoodsEntity {
        let entity = target;
        if (!entity) {
            entity = new GoodsEntity();
        }
        entity.id = source.id;
        entity.code = source.code;
        entity.name = source.name;
        entity.price = source.price;
        entity.stock = source.stock;
    }
}