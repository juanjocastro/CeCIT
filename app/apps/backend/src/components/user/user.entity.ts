import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'user'})
export class User{
    @PrimaryGeneratedColumn()
    ID_user !: number;

    @Column({type: "int", unique: true})
    dni!: number;
}