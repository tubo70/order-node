import { IAggregateRoot } from "../model/IAggregateRoot";
import { IUnitOfWorkRepository } from "./IUnitOfWorkRepository";
import { IUnitOfWork } from "./IUnitOfWork";

export interface IRepository<T extends IAggregateRoot> {//extends IUnitOfWorkRepository<T> {
    add(model: T, unitOfWork:IUnitOfWork): void;
}