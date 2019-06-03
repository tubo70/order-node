import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";

export interface IUnitOfWork {
    registerAdd(entity: any, unitOfWorkRepository: IUnitOfWorkRepository): void;
    registerUpdate(entity: any, unitOfWorkRepository: IUnitOfWorkRepository): void;
    registerDelete(entity: any, unitOfWorkRepository: IUnitOfWorkRepository): void;
    commit(): void;
}