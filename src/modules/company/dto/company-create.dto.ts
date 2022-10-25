import { IsInt, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  readonly name: string; // 企业名称

  @IsInt()
  readonly industry: string; // 所属行业

  @IsInt()
  readonly capital: number; // 注册资本

  @IsString()
  readonly businessType: string; // 企业类型

  @IsString()
  readonly legalPerson: string; // 法人
}
