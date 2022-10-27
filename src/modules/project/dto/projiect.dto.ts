import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProjiectDto {
  @IsString()
  @ApiProperty({ description: '企业名称', required: true })
  name: string;

  @IsString()
  @ApiProperty({ description: '链接', required: true })
  url: string;
}
