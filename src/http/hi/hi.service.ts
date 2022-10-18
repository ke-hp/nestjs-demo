import { Injectable } from '@nestjs/common';

@Injectable()
export class HiService {
  getHello(): string {
    return 'Hello World!';
  }
}
