export interface IUnitOfWork{
    registerAdd(entity:any):void;
    registerUpdate(entity:any):void;
    registerDelete(entity:any):void;
    commit():void;
}