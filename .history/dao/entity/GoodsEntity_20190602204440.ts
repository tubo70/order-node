import { Entity, PrimaryColumn, Column } from "typeorm";
import { IDaoEntity } from "./IDaoEntity";

@Entity({ name: 'Goods' })
export class GoodsEntity implements IDaoEntity {
    @PrimaryColumn()
    id: string;
    @Column()
    code: string;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    stock:number;
}