import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'socio' })
export class Socio {
  @PrimaryGeneratedColumn()
  ID_socio!: number;

  @Column({ type: 'varchar' })
  razon_social!: string;
}
