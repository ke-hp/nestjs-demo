import { Controller, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { MatterService } from './matter.service';
import { MatterDto } from './dto/matter.dto';
import { PagingDto } from '../../common/dto/paginate';

@ApiTags('事项')
@Controller('matter')
export class MatterController {
  constructor(private readonly MatterS: MatterService) {
  }

  @ApiOperation({ summary: '分页' })
  @Post('paging')
  async types(@Body() dto: PagingDto): Promise<any> {
    return this.MatterS.paginate(dto.query, dto.options);
  }

  @Post()
  @ApiOperation({ summary: '新增' })
  async create(@Body() Dto: MatterDto): Promise<any> {
    return this.MatterS.create(Dto);
  }

  @Put(':id')
  @ApiOperation({ summary: '修改' })
  async put(@Param('id') id: string, @Body() Dto: MatterDto): Promise<any> {
    return this.MatterS.update(id, Dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除' })
  async delete(@Param('id') id: string) {
    return this.MatterS.delete(id);
  }
}
