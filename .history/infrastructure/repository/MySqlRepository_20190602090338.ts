import { IRepository } from "../../domain/repository/IRepository";

export abstract class MySqlRepository implements IRepository {
    addEntities: any[];
    updateEntities: any[];
    deleteEntities: any[];

    constructor() {
        this.addEntities = [];
        this.updateEntities = [];
        this.deleteEntities = [];
    }
    registerAddEntity(entity:any){
        
    }
    executeAdd(model: any): void {
        throw new Error("Method not implemented.");
    }
    executeUpdate(model: any): void {
        throw new Error("Method not implemented.");
    }
    executeDelete(model: any): void {
        throw new Error("Method not implemented.");
    }
}