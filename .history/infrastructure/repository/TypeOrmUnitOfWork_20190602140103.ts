import { IUnitOfWork } from "../../domain/repository/IUnitOfWork";
import { IRepository } from "../../domain/repository/IRepository";
import { IAggregateRoot } from "../../domain/model/IAggregateRoot";
import { TypeOrmRepository } from "./TypeOrmRepository";
import { getConnection } from "typeorm";
import { IDaoEntity } from "../../dao/entity/IDaoEntity";
import { OrderEntity } from "../../dao/entity/OrderEntity";

export class TypeOrmUnitOfWork implements IUnitOfWork {
    repositories: { [key: string]: TypeOrmRepository<IAggregateRoot> }
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
        let addEntities: IDaoEntity[] = [];
        let updateEntities: IDaoEntity[] = [];
        let deleteEntities: IDaoEntity[] = [];
        for (let key in this.repositories) {

        }
        getConnection().transaction(async manager => {
            await manager.getRepository('').insert(addEntities);//.save(addEntities);
        });
    }


}