import { Controller, Get, Post, Body } from '@nestjs/common';

import * as industryList from './industryList.json';

import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/company-create.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly CompanyS: CompanyService) {
  }

  // 企业类型列表
  @Get('types')
  async types(): Promise<any> {
    return industryList;
  }


  //
  @Post()
  async create(@Body() Dto: CreateCompanyDto ): Promise<any> {
    return null;
  }

  //
}
