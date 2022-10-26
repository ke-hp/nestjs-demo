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

    console.log('__dirname', __dirname);
    // excel文件类径
    const excelFilePath = `${__dirname}/../../public/init/companyInfo.xlsx`;

    console.log('__dirname', excelFilePath);

//解析excel, 获取到所有sheets
    const sheets = xlsx.parse(excelFilePath);

// 查看页面数
    console.log(sheets.length);

// 打印页面信息..
    const sheet = sheets[0];
    console.log(sheet);

// 打印页面数据
    console.log(sheet.data);

    await this.compserve.init(sheet.data);
// 输出每行内容
//     sheet.data.forEach(row => {

    // });


    this.logger.debug('启动后5秒仅执行一次');
  }
}
