import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,} from "typeorm";

@Entity()
export class Mail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    content: string;

    @Column()
    time_start: number;

    @Column()
    time_end: number;

    @Column()
    type: number;
}
