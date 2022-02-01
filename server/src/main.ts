import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import globals from "./globals";
import {HttpExecptionFilter} from './common/filters/http-execption.filter';
import {TransformInterceptor} from './common/interceptor/transform.interceptor';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {MailService} from "./modules/mail/mail.service";
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 全局使用拦截器
    app.useGlobalInterceptors(new TransformInterceptor())

    // 全局使用异常过滤器
    app.useGlobalFilters(new HttpExecptionFilter())

    app.setGlobalPrefix("api/v" + globals.API_VERSION); // 设置全局前缀


    // 使用 Swagger 文档
    const options = new DocumentBuilder()
        .setTitle('TimePost-serve')
        .setDescription('接口文档')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app,options);
    SwaggerModule.setup('doc',app,document);

    await app.listen(80);
    const mailService = app.get(MailService);

    const cronnjob = mailService.init()

}

bootstrap();
