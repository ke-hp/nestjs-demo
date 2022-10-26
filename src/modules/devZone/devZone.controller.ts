import { Controller, Put, Post, Delete, Get, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { DevZoneService } from './devZone.service';
import { DevZoneDto } from './dto/devZone.dto';

@ApiTags('开发区宣传材料')
@Controller('dev-zone')
export class DevZoneController {
  constructor(private readonly LinkedS: DevZoneService) {
  }

  // 企业类型列表
  @ApiOperation({ summary: '获取材料' })
  @Get()
  async types(): Promise<any> {
    return this.LinkedS.get();
  }

  // 创建外链详细
  @Put()
  @ApiOperation({ summary: '编辑' })
  async create(@Body() Dto: DevZoneDto): Promise<any> {
    return this.LinkedS.update(Dto);
  }
}
