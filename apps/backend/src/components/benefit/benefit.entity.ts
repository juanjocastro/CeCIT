import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "benefit"})

export class Benefit {
    @PrimaryGeneratedColumn()
    ID_benefit !: number;

    @Column({type: 'varchar', length: 100})
    title !: string;

}