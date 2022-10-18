import { Controller, Get, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HiService } from './hi.service';

@Controller('hi')
export class HiController {
  constructor(
    private readonly appService: HiService,
    // private configService: ConfigService,
  ) {
  }

  @Get('123')
  getHello(@Query() q): string {
    // console.log('ConfigService', this.configService.get<string>('DATABASE_URL'));
    return this.appService.getHello();
  }
}
