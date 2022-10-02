import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initDB } from './main/db/init.mongo';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  await initDB();

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Canvas API')
    .setDescription('The canvas API description')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  app.use(cookieParser());
  await app.listen(5006);
}
bootstrap();
