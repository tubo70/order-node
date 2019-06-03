import { IRepository } from "../../domain/repository/IRepository";
import { IEntity } from "../../domain/model/IEntity";
import { IDaoEntity } from "../../dao/entity/IDaoEntity";

export abstract class MySqlRepository implements IRepository<IEntity> {
    addEntities: { [key: string]: IDaoEntity };
    updateEntities: { [key: string]: IDaoEntity };
    deleteEntities: { [key: string]: IDaoEntity };

    constructor() {
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
    executeAdd(model: IEntity): void {
        throw new Error("Method not implemented.");
    }
    executeUpdate(model: IEntity): void {
        throw new Error("Method not implemented.");
    }
    executeDelete(model: IEntity): void {
        throw new Error("Method not implemented.");
    }
}