import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipe/validation.pipe';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局管道
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // 静态文件
  const rootDir = join(__dirname, '..');
  app.use('/public', express.static(join(rootDir, 'public')));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-starter api document')
    .setDescription('nest starter project api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}

bootstrap();
