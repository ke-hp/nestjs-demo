import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { HiModule } from './http/hi/hi.module';
import { CatModule } from './http/cat/cat.module';

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

    HiModule,
    CatModule,
  ],
})
export class AppModule {
}
