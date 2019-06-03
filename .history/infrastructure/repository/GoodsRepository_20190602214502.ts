import { TypeOrmRepository } from "./TypeOrmRepository";
import { IGoodsRepository } from "../../domain/repository/IGoodsRepository";
import { Goods } from "../../domain/model/Goods";
import { GoodsEntity } from "../../dao/entity/GoodsEntity";
import { GoodsEntityRepository } from "../../dao/repository/GoodsEntityRepository";
import { getConnection } from 'typeorm';

export default class GoodsRepository extends TypeOrmRepository<Goods> implements IGoodsRepository {
    goodsEntityRepository: GoodsEntityRepository;
    constructor() {
        super();
        
    }
    async add(model: Goods): Promise<void> {
        let entity = this.mapEntity(model, null);
        this.registerAddEntity(entity);
    }
    async update(model: Goods): Promise<void> {
        let oldEntity = await this.getGoodsEntityById(model.id);
        let entity = this.mapEntity(model, oldEntity);
        this.registerUpdateEntity(entity);
    }
    async delete(model: Goods): Promise<void> {
        let entity = await this.getGoodsEntityById(model.id);
        this.registerDleteEntity(entity);
    }
    private async getGoodsEntityById(id: string): Promise<GoodsEntity> {
        let entities = await this.goodsEntityRepository.find({ id: id });
        if (!entities || entities.length == 0) {
            return null;
        }
        return entities[0];

    }
    async get(id: string): Promise<Goods> {
        this.goodsEntityRepository = getConnection().getCustomRepository(GoodsEntityRepository);
        return this.mapModel(await this.getGoodsEntityById(id));
    }
    async getByCode(code: string): Promise<Goods> {
        this.goodsEntityRepository = getConnection().getCustomRepository(GoodsEntityRepository);
        let entity = await this.goodsEntityRepository.findByCode(code);
        if (!entity) {
            return null;
        }
        return this.mapModel(entity);
    }

    mapModel(source: GoodsEntity): Goods {
        if (!source) {
            return null;
        }
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