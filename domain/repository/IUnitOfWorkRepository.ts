import { IEntity } from "../model/IEntity";

export interface IUnitOfWorkRepository<TModel extends IEntity>{
    executeAdd(model:TModel):void;
    executeUpdate(model:TModel):void;
    executeDelete(model:TModel):void;
} 