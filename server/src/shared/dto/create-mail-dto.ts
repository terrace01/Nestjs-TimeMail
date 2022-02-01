import {ApiProperty} from "@nestjs/swagger";


export class CreateMailDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    time_start: Date;S

    @ApiProperty()
    time_end: Date;

    @ApiProperty()
    type: number;
}
