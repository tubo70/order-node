import { OrderItem } from './OrderItem';
export class Order {
    id: string;
    
    items: OrderItem[];

    constructor(id:string){
        this.id = id;
    }

    
    
}