import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('每分钟第45秒执行一次');
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug('每10秒执行一次');
  }

  @Timeout(5000)
  handleTimeout() {
    this.logger.debug('启动后5秒仅执行一次');
  }
}
