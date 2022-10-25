import { Controller, Get, Put, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import * as industryList from './industryList.json';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/company-create.dto';

import { UpdateCompanyPromotionalMaterialDto } from './dto/company-promotional-material-update.dto';

@ApiTags('企业')
@Controller('company')
export class CompanyController {
  constructor(private readonly CompanyS: CompanyService) {
  }

  // 企业类型列表
  @Post('')
  @ApiOperation({ summary: '新建企业' })
  async createC(@Body() dto: CreateCompanyDto): Promise<any> {
    return this.CompanyS.create(dto);
  }

  // 修改企业材料
  @Put(':id')
  @ApiOperation({ summary: '修改企业材料' })
  async updateC(@Param() id: string, @Body() dto: CreateCompanyDto): Promise<any> {
    return this.CompanyS.updateById(id, dto);
  }

  // 企业类型列表
  @Get('types')
  @ApiOperation({ summary: '行业类型' })
  async types(): Promise<any> {
    return industryList;
  }

  // 文本
  @Put('promotional-material/:id')
  @ApiOperation({ summary: '修改企业宣传材料' })
  async updatePromotionalMaterial(@Param('id') id: string, @Body() Dto: UpdateCompanyPromotionalMaterialDto): Promise<any> {
    return this.CompanyS.updateById(id, Dto);
  }
}
