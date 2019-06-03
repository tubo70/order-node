import { IUnitOfWork } from "../../domain/repository/IUnitOfWork";

export class MySqlUnitOfWork implements IUnitOfWork {
    registerAdd(entity: any, unitOfWorkRepository: import("../../domain/repository/IUnitOfWorkRepository").IUnitOfWorkRepository): void {
        throw new Error("Method not implemented.");
    }
    registerUpdate(entity: any, unitOfWorkRepository: import("../../domain/repository/IUnitOfWorkRepository").IUnitOfWorkRepository): void {
        throw new Error("Method not implemented.");
    }
    registerDelete(entity: any, unitOfWorkRepository: import("../../domain/repository/IUnitOfWorkRepository").IUnitOfWorkRepository): void {
        throw new Error("Method not implemented.");
    }
    commit(): void {
        throw new Error("Method not implemented.");
    }


}