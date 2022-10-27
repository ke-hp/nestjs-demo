import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { HiModule } from './modules/hi/hi.module';
import { CatModule } from './modules/cat/cat.module';
import { UserModule } from './modules/user/user.module';

import { DogModule } from './modules/dog/dog.module';
import { CompanyModule } from './modules/company/company.module';
import { TaskModule } from './task/task.module';

import { ProjectModule } from './modules/linked/project.module';
import { FileModule } from './modules/file/file.module';
import { DevZoneModule } from './modules/devZone/devZone.module';
import { MatterModule } from './modules/matter/matter.module';


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
      autoLoadEntities: true,
      synchronize: true,
    }),

    HiModule,
    CatModule,
    UserModule,
    DogModule,
    CompanyModule,
    ScheduleModule.forRoot(),
    TaskModule,
    ProjectModule,
    FileModule,
    DevZoneModule,
    MatterModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
