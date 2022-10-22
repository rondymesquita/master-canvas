import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initDB } from './main/db/init.mongo';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { COOKIE_NAME } from './config/constants';
import { Env } from './config/env';
import * as express from 'express';

import { PassportSerializer, PassportModule } from '@nestjs/passport';

class CustomPassportSerializer extends PassportSerializer {
  serializeUser(user: any, done: Function) {
    throw new Error('Method not implemented.');
  }
  deserializeUser(payload: any, done: Function) {
    throw new Error('Method not implemented.');
  }
}

async function bootstrap() {
  try {
    initDB();
  } catch (err) {
    console.log({ err });
  }

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Canvas API')
    .setDescription('The canvas API description')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    credentials: true,
    origin: Env().CLIENT_HOST.replace('/#/', ''),
  });

  app.use(
    session({
      secret: 'secret',
      name: COOKIE_NAME,
      resave: true,
      saveUninitialized: false,
      cookie: {
        httpOnly: false,
        // domain: 'localhost:5005',
      },
    }),
  );
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(5006);
}
bootstrap();
