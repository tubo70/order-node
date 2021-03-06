import {Entity, PrimaryColumn, Column} from "typeorm";
import { IDaoEntity } from "./IDaoEntity";

@Entity({name:'Orders'})
export default class OrderEntity implements IDaoEntity {

    @PrimaryColumn()
    id: string;
    @Column()
    orderAmount: number;
    @Column()
    carriageFee: number;

}