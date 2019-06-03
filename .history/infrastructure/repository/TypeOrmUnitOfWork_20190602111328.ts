import { IUnitOfWork } from "../../domain/repository/IUnitOfWork";
import { IRepository } from "../../domain/repository/IRepository";
import { IAggregateRoot } from "../../domain/model/IAggregateRoot";
import { TypeOrmRepository } from "./TypeOrmRepository";

export class TypeOrmUnitOfWork implements IUnitOfWork {
    repositories:{[key:string]:TypeOrmRepository<IAggregateRoot>}
    registerAdd(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void {
        let typeOrmRepository = repository as unknown as TypeOrmRepository<IAggregateRoot>;
        typeOrmRepository.add(model);
        this.repositories[typeOrmRepository.uuid] = typeOrmRepository;
    }
    registerUpdate(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void {
        let typeOrmRepository = repository as unknown as TypeOrmRepository<IAggregateRoot>;
        typeOrmRepository.update(model);
        this.repositories[typeOrmRepository.uuid] = typeOrmRepository;
    }
    registerDelete(model: IAggregateRoot, repository: IRepository<IAggregateRoot>): void {
        let typeOrmRepository = repository as unknown as TypeOrmRepository<IAggregateRoot>;
        typeOrmRepository.delete(model);
        this.repositories[typeOrmRepository.uuid] = typeOrmRepository;
    }
    commit(): void {
        throw new Error("Method not implemented.");
    }


}