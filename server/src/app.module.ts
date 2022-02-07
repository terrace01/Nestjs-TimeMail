import {MailerModule} from '@nestjs-modules/mailer';
import {Module} from '@nestjs/common';
import {TypeOrmModule,TypeOrmModuleOptions } from '@nestjs/typeorm';
import {MailModule} from "./modules/mail/mail.module";
import {ConfigModule,ConfigService } from '@nestjs/config';

import configuration from './config';

@Module({
    imports: [ // 配置数据库连接2
        ConfigModule.forRoot({
            cache: true,
            load: [configuration],
            isGlobal: true,
        }),
        //配置数据库链接
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    type: 'mysql',
                    entities: ['dist/**/*.entity{.ts,.js}'],
                    keepConnectionAlive: true,
                    ...config.get('db.mysql'),
                } as TypeOrmModuleOptions;
            },
        }),

        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                transport: config.get('mail'),

            })
        })


    ],

})
export class AppModule {
}
