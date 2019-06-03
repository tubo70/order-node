import { Entity, PrimaryColumn, Column } from "typeorm";
import { IDaoEntity } from "./IDaoEntity";

@Entity({name:'OrderItem'})
export class OrderItemEntity implements IDaoEntity {
    /**
     * ID
     */
    @PrimaryColumn()
    id: string;
    @Column()
    orderId: string;
    /**
     * 商品ID
     */
    @Column()
    goodsId: string;
    /**
     * 商品名称
     */
    @Column()
    goodsName: string;
    /**
     * 商品单价
     */
    @Column()
    goodsPrice: number;
    /**
     * 数量
     */
    @Column()
    quantity: number;
}