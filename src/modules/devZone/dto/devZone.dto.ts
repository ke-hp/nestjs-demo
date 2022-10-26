import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DevZoneDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '文字宣传材料', required: true })
  text: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '图片宣传材料', required: true })
  img: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '视频宣传材料', required: true })
  video: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '其他网站链接材料', required: true })
  linked: string;
}
