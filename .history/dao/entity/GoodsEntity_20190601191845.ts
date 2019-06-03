import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class GoodsEntity {
    @PrimaryColumn()
    id: string;
    @Column()
    code: string;
    @Column()
    name: string;
    @Column()
    price: number;
}