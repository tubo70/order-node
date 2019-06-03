import { IRepository } from "../../domain/repository/IRepository";
import { IEntity } from "../../domain/model/IEntity";
import { IDaoEntity } from "../../dao/entity/IDaoEntity";

export abstract class MySqlRepository implements IRepository<IEntity> {
    addEntities: IDaoEntity[];
    updateEntities: IDaoEntity[];
    deleteEntities: IDaoEntity[];

    constructor() {
        this.addEntities = [];
        this.updateEntities = [];
        this.deleteEntities = [];
    }
    registerAddEntity(entity:IDaoEntity){

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