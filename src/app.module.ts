import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { HiModule } from './http/hi/hi.module';
import { CatModule } from './http/cat/cat.module';
import { UserModule } from './http/user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    // 配置
    ConfigModule.forRoot({}),

    // mongo
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [],
      synchronize: true,
    }),

    HiModule,
    CatModule,
    UserModule,
    ScheduleModule.forRoot(),
    TaskModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
