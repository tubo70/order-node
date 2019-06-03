import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name:'Orders'})
export class OrderEntity {

    @PrimaryColumn()
    id: string;
    @Column()
    orderAmount: number;
    @Column()
    carriageFee: number;

}