import {MailerModule} from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import {Module} from '@nestjs/common';
import {TypeOrmModule,TypeOrmModuleOptions } from '@nestjs/typeorm';
import {MailModule} from "./modules/mail/mail.module";
import {ConfigModule,ConfigService } from '@nestjs/config';
import { join } from 'path';
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
                template:{
                    dir: process.cwd() + '/template/',
                    adapter: new EjsAdapter(),
                    options: {
                        strict: false //严格模式
                    }

                }
            })
        }),
        MailModule

    ],

})
export class AppModule {
}
