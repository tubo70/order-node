import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";
import { IEntity } from "../model/IEntity";

export interface IUnitOfWork {
    registerAdd(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository<IEntity>): void;
    registerUpdate(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository<IEntity>): void;
    registerDelete(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository<IEntity>): void;
    commit(): void;
}