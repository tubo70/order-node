import { IUnitOfWork } from "../../domain/repository/IUnitOfWork";
import {IUnitOfWorkRepository } from '../../domain/repository/IUnitOfWorkRepository';
import { IEntity } from "../../domain/model/IEntity";

export class MySqlUnitOfWork implements IUnitOfWork {
    registerAdd(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository<IEntity>): void {
        throw new Error("Method not implemented.");
    }
    registerUpdate(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository<IEntity>): void {
        throw new Error("Method not implemented.");
    }
    registerDelete(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository<IEntity>): void {
        throw new Error("Method not implemented.");
    }
    commit(): void {
        throw new Error("Method not implemented.");
    }


}