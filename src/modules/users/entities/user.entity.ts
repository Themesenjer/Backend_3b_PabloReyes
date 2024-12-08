import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    mail:string;

    @Column()
    password:string;
}
