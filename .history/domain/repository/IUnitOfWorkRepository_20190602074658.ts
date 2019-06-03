export interface IUnitOfWorkRepository{
    executeAdd(entity:any):void;
    executeUpdate(entity:any):void;
    executeDelete(entity:any):void;
} 