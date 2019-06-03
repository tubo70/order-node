import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: 'Goods' })
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