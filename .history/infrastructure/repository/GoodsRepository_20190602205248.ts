import { TypeOrmRepository } from "./TypeOrmRepository";
import { IGoodsRepository } from "../../domain/repository/IGoodsRepository";
import { Goods } from "../../domain/model/Goods";
import { GoodsEntity } from "../../dao/entity/GoodsEntity";
import { GoodsEntityRepository } from "../../dao/repository/GoodsEntityRepository";
import { getConnection } from "typeorm";

export default class GoodsRepository extends TypeOrmRepository<Goods> implements IGoodsRepository {
    goodsEntityRepository: GoodsEntityRepository;
    constructor() {
        super();
        this.goodsEntityRepository = getConnection().getCustomRepository(GoodsEntityRepository);
    }
    add(model: Goods): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(model: Goods): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(model: Goods): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async get(id: string): Promise<Goods> {
        let entities = await this.goodsEntityRepository.find({ id: id });
        if (!entities || entities.length == 0) {
            return null;
        }
        return this.mapModel(entities[0]);
    }
    async getByCode(code: string): Promise<Goods> {
        let entity = await this.goodsEntityRepository.findByCode(code);
        if (!entity) {
            return null;
        }
        return this.mapModel(entity);
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
        return entity;
    }
}