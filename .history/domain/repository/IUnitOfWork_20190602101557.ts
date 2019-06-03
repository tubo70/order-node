import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";
import { IEntity } from "../model/IEntity";
import { IAggregateRoot } from "../model/IAggregateRoot";
import { IRepository } from "./IRepository";

export interface IUnitOfWork {
    registerAdd(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void;
    registerUpdate(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void;
    registerDelete(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void;
    commit(): void;
}