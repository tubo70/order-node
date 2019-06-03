import { IRepository } from "../../domain/repository/IRepository";
import { IDaoEntity } from "../../dao/entity/IDaoEntity";
import { IAggregateRoot } from "../../domain/model/IAggregateRoot";

export abstract class TypeOrmRepository<TModel extends IAggregateRoot> implements IRepository<TModel> {
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
    // executeAdd(model: IEntity): void {
    //     throw new Error("Method not implemented.");
    // }
    // executeUpdate(model: IEntity): void {
    //     throw new Error("Method not implemented.");
    // }
    // executeDelete(model: IEntity): void {
    //     throw new Error("Method not implemented.");
    // }
    
    abstract add(model:TModel):void;
    abstract update(model:TModel):void;
    abstract delete(model:TModel):void;
    abstract get(id:string):TModel;
}