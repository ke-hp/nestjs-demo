import { Injectable, Inject, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import * as xlsx from 'node-xlsx';

import { CompanyService } from '../modules/company/company.service';


@Injectable()
export class TaskService {
  constructor(private  compserve: CompanyService) {
  }

  // @Inject()
  // private readonly companyService: CompanyService;
  private readonly logger = new Logger(TaskService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('每分钟第45秒执行一次');
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug('每10秒执行一次');
  }

  // 初始化企业数据
  @Timeout(5000)
  async handleTimeout() {
    const excelFilePath = `${__dirname}/../../public/init/companyInfo.xlsx`;
    const sheets = xlsx.parse(excelFilePath);
    const sheet = sheets[0];
    await this.compserve.init(sheet.data);
    this.logger.debug('启动后5秒仅执行一次');
  }
}
