import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Biblioteca {
    @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
    id: number;
    @Column({ type: 'varchar', length: 50 })
    titulo: string;
    @Column({ type: 'varchar', length: 50 })
    autor: string;
    @Column({ type: 'varchar', length: 15 })
    tema: string;
    @Column({ type: 'varchar', length: 50 })
    editorial: string;
    @Column()
    stock: number;
    @Column("decimal",{precision:6,scale:2})
    precio: number;
}
