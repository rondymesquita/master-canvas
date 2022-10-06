import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initDB } from './main/db/init.mongo';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { COOKIE_NAME } from './config/constants';

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
  app.use(
    session({
      secret: 'secret',
      name: COOKIE_NAME,
      cookie: {
        httpOnly: false,
        // domain: 'localhost:5005',
      },
    }),
  );
  app.use(passport.session());
  await app.listen(5006);
}
bootstrap();
