import {MailerModule} from '@nestjs-modules/mailer';
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MailModule} from "./modules/mail/mail.module";

@Module({
    imports: [ // 配置数据库连接2
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'timepost',
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
        }),
        MailerModule.forRoot({
            transport: {
                host: "smtp.163.com",
                port: 25,
                ignoreTLS: true,
                secure: false,
                auth: {
                    user: "raseluxun@163.com",
                    pass: "VKUOWCQYLBCURDQQ"
                },
                from:'"鲁迅" <raseluxun@163.com>',
            }
        }),

        MailModule,
    ],

})
export class AppModule {
}
