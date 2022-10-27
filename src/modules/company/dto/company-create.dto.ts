import { IsInt, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @IsString()
  @IsOptional()
  name: string; // 企业名称
  @ApiProperty({ description: '企业名称', required: true })

  @IsString()
  @IsOptional()
  park: string; // 园区
  @ApiProperty({ description: '园区', required: true })

  @IsString()
  @IsOptional()
  regional: string; // 分区
  @ApiProperty({ description: '分区', required: true })

  @IsString()
  @IsOptional()
  industry: string; // 所属行业
  @ApiProperty({ description: '所属行业', required: true })

  @IsString()
  @IsOptional()
  operatingCondition: string; // 经营状况
  @ApiProperty({ description: '经营状况', required: true })

  @IsString()
  @IsOptional()
  emergencyContact: string; // 应急联系人
  @ApiProperty({ description: '应急联系人', required: true })

  @IsString()
  @IsOptional()
  emergencyPhone: string; // 应急手机号
  @ApiProperty({ description: '应急手机号', required: true })

  @IsString()
  @IsOptional()
  EPContact: string; // 环保联系人
  @ApiProperty({ description: '环保联系人', required: true })

  @IsString()
  @IsOptional()
  EPPhone: string; // 环保手机号
  @ApiProperty({ description: '环保手机号', required: true })

  @IsString()
  @IsOptional()
  companyCode: string; // 企业编号
  @ApiProperty({ description: '企业编号', required: true })

  @IsString()
  @IsOptional()
  priority: string; // 重点企业
  @ApiProperty({ description: '重点企业', required: true })

  @IsString()
  @IsOptional()
  province: string; // 省级行政区
  @ApiProperty({ description: '省', required: true })

  @IsString()
  @IsOptional()
  shi: string; // 市
  @ApiProperty({ description: '市', required: true })

  @IsString()
  @IsOptional()
  xian: string; // 县
  @ApiProperty({ description: '县', required: true })

  @IsString()
  @IsOptional()
  type: string; // 企业类型
  @ApiProperty({ description: '企业类型', required: true })

  @IsString()
  @IsOptional()
  productionTime: string; // 投产时间
  @ApiProperty({ description: '投产时间', required: true })

  @IsString()
  @IsOptional()
  registrationTime: string; // 成立时间
  @ApiProperty({ description: '成立时间', required: true })

  @IsString()
  @IsOptional()
  ein: string; // 税号
  @ApiProperty({ description: '税号', required: true })

  @IsString()
  @IsOptional()
  legalPerson: string; // 法人
  @ApiProperty({ description: '法人', required: true })

  @IsString()
  @IsOptional()
  creditCode: string; // 信用代码
  @ApiProperty({ description: '信用代码', required: true })

  @IsString()
  @IsOptional()
  registeredCapital: string; // 注册资金
  @ApiProperty({ description: '注册资金', required: true })

  @IsString()
  @IsOptional()
  overview: string; // 概况
  @ApiProperty({ description: '概况', required: true })

  @IsInt()
  @IsOptional()
  CompanyNum: number; // 企业人数
  @ApiProperty({ description: '企业人数', required: true })

  @IsString()
  @IsOptional()
  address: string; // 企业地址
  @ApiProperty({ description: '企业地址', required: true })

  @IsString()
  @IsOptional()
  centerLongitude: string; // 中心经度
  @ApiProperty({ description: '中心经度', required: true })

  @IsString()
  @IsOptional()
  centralLatitude: string; // 中心纬度
  @ApiProperty({ description: '中心纬度', required: true })

  @IsString()
  @IsOptional()
  capital: string; // 注册资本
  @ApiProperty({ description: '注册资本', required: true })

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '企业文本宣传材料', required: true })
  text: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '企业图片宣传材料', required: true })
  video: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '企业视频宣传材料', required: true })
  img: number;
}
