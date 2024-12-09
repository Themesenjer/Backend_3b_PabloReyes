import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Producto } from "../../producto/entities/producto.entity";

@Entity('pedido_producto')
export class PedidoProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pedidoid: number;

    @Column()
    prouctoid: number;

    @Column()
    cantidad: number;

    @ManyToOne(()=>Pedido,(ped)=>ped.pedidoProducto)
    pedido:Pedido

    @ManyToOne(()=>Producto,(pro)=>pro.pedidoProducto)
    producto:Producto
}