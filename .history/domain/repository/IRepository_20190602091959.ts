import { IAggregateRoot } from "../model/IAggregateRoot";

export interface IRepository<T extends IAggregateRoot> {
    add(model: T): void;
}