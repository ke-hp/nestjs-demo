import { Controller, Get, Put, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import * as industryList from './industryList.json';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/company-create.dto';

import { PagingDto } from '../../common/dto/paginate';

@ApiTags('企业')
@Controller('company')
export class CompanyController {
  constructor(private readonly CompanyS: CompanyService) {
  }

  @Get('types')
  @ApiOperation({ summary: '行业类型' })
  async types(): Promise<any> {
    return industryList;
  }

  @Post('paging')
  @ApiOperation({ summary: '企业分页' })
  async paging(@Body() dto: PagingDto): Promise<any> {
    return this.CompanyS.paginate(dto.query, dto.options);
  }

  @Post('')
  @ApiOperation({ summary: '新建企业' })
  async createC(@Body() dto: CreateCompanyDto): Promise<any> {
    return this.CompanyS.create(dto);
  }

  // 修改企业材料
  @Put(':id')
  @ApiOperation({ summary: '修改企业材料' })
  async updateC(@Param('id') id: string, @Body() dto: CreateCompanyDto): Promise<any> {
    return this.CompanyS.updateById(id, dto);
  }

  // 修改企业材料
  @Delete(':id')
  @ApiOperation({ summary: '删除企业' })
  async deletet(@Param('id') id: string): Promise<any> {
    return this.CompanyS.deleteById(id);
  }

  // 文本
  @Put('promotional-material/:id')
  @ApiOperation({ summary: '修改企业宣传材料' })
  async updatePromotionalMaterial(@Param('id') id: string, @Body() Dto: CreateCompanyDto): Promise<any> {
    return this.CompanyS.updateById(id, Dto);
  }
}
