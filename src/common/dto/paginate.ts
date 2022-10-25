import { IsInt, IsString, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class QueryDto {
}

class OptionsDto {
  @ApiProperty({ description: '一页数量', required: true })
  @IsInt()
  limit: number;

  @ApiProperty({ description: '页数', required: true })
  @IsInt()
  page: number;
}

export class PagingDto {

  @ApiProperty({ description: '查询参数', required: true })
  @IsObject()
  @Type(() => QueryDto)
  query: QueryDto;

  @ApiProperty()
  @IsObject()
  @Type(() => OptionsDto)
  options: OptionsDto;
}
