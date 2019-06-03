import { IAggregateRoot } from "../model/IAggregateRoot";
import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";
import { IUnitOfWork } from "./IUnitOfWork";

export interface IRepository<TModel extends IAggregateRoot> {//extends IUnitOfWorkRepository<T> {
    add(model: TModel): void;
    update(model: TModel): void;
    delete(model: TModel): void;
    get(id: string): TModel;
}