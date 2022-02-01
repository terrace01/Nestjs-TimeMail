import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
    time_start: Date;

    @Column()
    time_end: Date;

    @Column()
    type: number;
}
