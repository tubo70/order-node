import { IAggregateRoot } from "../model/IAggregateRoot";
import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";

export interface IRepository<T extends IAggregateRoot> extends IUnitOfWorkRepository<T> {
    add(model: T): void;
}