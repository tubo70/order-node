import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";
import { IEntity } from "../model/IEntity";

export interface IUnitOfWork {
    registerAdd(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository): void;
    registerUpdate(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository): void;
    registerDelete(model: IEntity, unitOfWorkRepository: IUnitOfWorkRepository): void;
    commit(): void;
}