import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";
import { IEntity } from "../model/IEntity";
import { IAggregateRoot } from "../model/IAggregateRoot";

export interface IUnitOfWork {
    registerAdd(model: IAggregateRoot, unitOfWorkRepository: IUnitOfWorkRepository<IAggregateRoot>): void;
    registerUpdate(model: IAggregateRoot, unitOfWorkRepository: IUnitOfWorkRepository<IAggregateRoot>): void;
    registerDelete(model: IAggregateRoot, unitOfWorkRepository: IUnitOfWorkRepository<IAggregateRoot>): void;
    commit(): void;
}