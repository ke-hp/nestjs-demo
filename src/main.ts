import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipe/validation.pipe';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局管道
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(3000);
}

bootstrap();
