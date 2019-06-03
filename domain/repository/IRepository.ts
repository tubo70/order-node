import { IAggregateRoot } from "../model/IAggregateRoot";
import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";
import { IUnitOfWork } from "./IUnitOfWork";

export interface IRepository<TModel extends IAggregateRoot> {//extends IUnitOfWorkRepository<T> {
    add(model: TModel): Promise<void>;
    update(model: TModel): Promise<void>;
    delete(model: TModel): Promise<void>;
    get(id: string): Promise<TModel>;
}