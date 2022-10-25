import { Controller, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { LinkedService } from './linked.service';
import { LinkedDto } from './dto/linked.dto';
import { PagingDto } from '../../common/dto/paginate';

@ApiTags('外链')
@Controller('linked')
export class LinkedController {
  constructor(private readonly LinkedS: LinkedService) {
  }

  // 企业类型列表
  @ApiOperation({ summary: '分页' })
  @Post('paging')
  async types(@Body() dto: PagingDto): Promise<any> {
    console.log('PagingDto', dto);
    return this.LinkedS.paginate(dto.query, dto.options);
  }

  // 创建外链详细
  @Post()
  @ApiOperation({ summary: '新增' })
  async create(@Body() Dto: LinkedDto): Promise<any> {
    return this.LinkedS.create(Dto);
  }

  // 修改
  @Put(':id')
  @ApiOperation({ summary: '修改' })
  async put(@Param('id') id: string, @Body() Dto: LinkedDto): Promise<any> {
    return this.LinkedS.update(id, Dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除' })
  async delete(@Param('id') id: string) {
    return this.LinkedS.delete(id);
  }
}
