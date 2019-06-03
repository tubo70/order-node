import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";

export interface IUnitOfWork {
    registerAdd(model: any, unitOfWorkRepository: IUnitOfWorkRepository): void;
    registerUpdate(model: any, unitOfWorkRepository: IUnitOfWorkRepository): void;
    registerDelete(model: any, unitOfWorkRepository: IUnitOfWorkRepository): void;
    commit(): void;
}