import { Module } from '@nestjs/common';
import { HiController } from './hi.controller';
import { HiService } from './hi.service';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule.forRoot({})
  ],
  controllers: [HiController],
  providers: [HiService],
})
export class HiModule {
}
