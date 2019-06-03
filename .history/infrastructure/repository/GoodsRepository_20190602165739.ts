import { TypeOrmRepository } from "./TypeOrmRepository";
import { IGoodsRepository } from "../../domain/repository/IGoodsRepository";
import { Goods } from "../../domain/model/Goods";

export default class GoodsRepository extends TypeOrmRepository<Goods> implements IGoodsRepository{
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

}