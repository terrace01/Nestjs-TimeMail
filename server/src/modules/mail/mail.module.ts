import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Mail} from "../../shared/entities/mail.entity";
import {ScheduleModule} from "@nestjs/schedule";

@Module({
  imports:[
      TypeOrmModule.forFeature([Mail]),
      ScheduleModule.forRoot()
  ],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
