import { IUnitOfWork } from "../../domain/repository/IUnitOfWork";
import { IRepository } from "../../domain/repository/IRepository";
import { IAggregateRoot } from "../../domain/model/IAggregateRoot";
import { MySqlRepository } from "./MySqlRepository";

export class MySqlUnitOfWork implements IUnitOfWork {
    registerAdd(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void {
        let mySqlReporitory = repository as unknown as MySqlRepository<IAggregateRoot>;
        mySqlReporitory.add(model);
        throw new Error("Method not implemented.");
    }
    registerUpdate(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void {
        throw new Error("Method not implemented.");
    }
    registerDelete(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void {
        throw new Error("Method not implemented.");
    }
    commit(): void {
        throw new Error("Method not implemented.");
    }


}