import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipe/validation.pipe';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局管道
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

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
