import { IUnitOfWork } from "../../domain/repository/IUnitOfWork";
import {IUnitOfWorkRepository } from '../../domain/repository/IUnitOfWorkRepository';

export class MySqlUnitOfWork implements IUnitOfWork {
    registerAdd(entity: any, unitOfWorkRepository: IUnitOfWorkRepository): void {
        throw new Error("Method not implemented.");
    }
    registerUpdate(entity: any, unitOfWorkRepository: IUnitOfWorkRepository): void {
        throw new Error("Method not implemented.");
    }
    registerDelete(entity: any, unitOfWorkRepository: IUnitOfWorkRepository): void {
        throw new Error("Method not implemented.");
    }
    commit(): void {
        throw new Error("Method not implemented.");
    }


}