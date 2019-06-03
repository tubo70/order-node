import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name:'Orders'})
export class Order {

    @PrimaryColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}