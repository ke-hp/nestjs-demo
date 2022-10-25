import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyPromotionalMaterialDto {
  @IsString()
  @ApiProperty({ description: '企业文本宣传材料', required: true })
  readonly text: string; // 文本

  @IsString()
  @ApiProperty({ description: '企业图片宣传材料', required: true })
  readonly video: string; //

  @IsString()
  @ApiProperty({ description: '企业视频宣传材料', required: true })
  readonly img: number; // 注册资本
}
