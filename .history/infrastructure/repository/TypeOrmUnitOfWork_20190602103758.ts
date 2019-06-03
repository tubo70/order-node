import { IUnitOfWork } from "../../domain/repository/IUnitOfWork";
import { IRepository } from "../../domain/repository/IRepository";
import { IAggregateRoot } from "../../domain/model/IAggregateRoot";
import { TypeOrmRepository } from "./TypeOrmRepository";

export class TypeOrmUnitOfWork implements IUnitOfWork {
    registerAdd(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void {
        let typeOrmRepository = repository as unknown as TypeOrmRepository<IAggregateRoot>;
        typeOrmRepository.add(model);
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