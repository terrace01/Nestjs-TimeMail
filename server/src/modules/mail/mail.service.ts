import {Injectable, Logger} from '@nestjs/common';
import {Mail} from "../../shared/entities/mail.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {SchedulerRegistry} from '@nestjs/schedule';
import {CronJob} from 'cron';
import {MailerService} from '@nestjs-modules/mailer';
import {timetrans} from "../../utils/time"
@Injectable()
export class MailService {
    constructor(
        @InjectRepository(Mail)
        private MailRepository: Repository<Mail>,
        private schedulerRegistry: SchedulerRegistry,
        private mailerService: MailerService
    ) {
    }


    async getAllBySkip(skip) {

        const [result, total] = await this.MailRepository.findAndCount(
            {
                where: {is_public:1 }, order: { time_start: "DESC" },
                take: 2,
                skip: skip
            }
        );
        return {result, total}
    }

    async getAll() {


        return await this.MailRepository.find(
            {order: { time_start: "DESC" },

            }
        );
    }
    // async getAll() {
    //
    //
    //
    //
    //
    //     return this.MailRepository.find(
    //             {
    //                 where: {is_public:1 }, order: { time_start: "DESC" },
    //             }
    //         );
    // }

    createMail(dto) {
        const {email, content, time_end} = dto

        const date = new Date(timetrans(time_end))
        const job = new CronJob(date, () => {
            this.mailerService.sendMail({
                to: email,
                from: "raseluxun@163.com",
                subject: content,
                text: "222"
            })
                .then(() => {
                    Logger.log("邮件id:" + dto.id + " 状态:发送成功")
                    this.MailRepository.update(dto.id, {type: 1})
                })
                .catch((err) => {
                    Logger.log("邮件id:" + dto.id + " 状态:发送失败" + " 原因" + err)
                    this.MailRepository.update(dto.id, {type: 2})
                })
        })



        this.schedulerRegistry.addCronJob(Math.floor(Math.random()*10) + '', job);
        job.start();


        return this.MailRepository.save(dto)
    }

    deleteMailById(id) {
        return this.MailRepository.delete(id)
    }

    updateMailByMailId(dto) {
        return this.MailRepository.save(dto)
    }

    getMailByMailId(id) {
        return this.MailRepository.findByIds(id)
    }

    async init() {
        const res = await this.MailRepository.find({type: 0})
        for (const i in res) {
            this.createMail(res[i])
        }
    }

}
