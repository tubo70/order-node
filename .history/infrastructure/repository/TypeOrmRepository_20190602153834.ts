import { IRepository } from "../../domain/repository/IRepository";
import { IDaoEntity } from "../../dao/entity/IDaoEntity";
import { IAggregateRoot } from "../../domain/model/IAggregateRoot";
import { uuidv4 } from "uuid/v4";
export abstract class TypeOrmRepository<TModel extends IAggregateRoot> implements IRepository<TModel> {
    uuid: string;
    addEntities: { [key: string]: IDaoEntity };
    updateEntities: { [key: string]: IDaoEntity };
    deleteEntities: { [key: string]: IDaoEntity };

    constructor() {
        this.uuid = uuidv4();
        this.addEntities = {};
        this.updateEntities = {};
        this.deleteEntities = {};
    }
    registerAddEntity(entity: IDaoEntity) {
        this.addEntities[entity.id] = entity;
        
    }
    registerUpdateEntity(entity: IDaoEntity) {
        this.updateEntities[entity.id] = entity;
    }
    registerDleteEntity(entity: IDaoEntity) {
        this.deleteEntities[entity.id] = entity;
    }
    // executeAdd(model: IEntity): void {
    //     throw new Error("Method not implemented.");
    // }
    // executeUpdate(model: IEntity): void {
    //     throw new Error("Method not implemented.");
    // }
    // executeDelete(model: IEntity): void {
    //     throw new Error("Method not implemented.");
    // }

    abstract async add(model: TModel): Promise<void>;
    abstract async update(model: TModel): Promise<void>;
    abstract async delete(model: TModel): Promise<void>;
    abstract async get(id: string): Promise<TModel>;
}