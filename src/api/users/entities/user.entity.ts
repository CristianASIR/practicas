import { Post } from "src/api/post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
}
