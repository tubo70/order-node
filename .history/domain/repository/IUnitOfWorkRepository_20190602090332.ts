import { IEntity } from "../model/IEntity";

export interface IUnitOfWorkRepository{
    executeAdd(entity:IEntity):void;
    executeUpdate(entity:IEntity):void;
    executeDelete(entity:IEntity):void;
} 