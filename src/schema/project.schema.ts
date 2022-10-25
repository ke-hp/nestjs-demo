import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @Prop()
  name: string; // 企业名称

  @Prop()
  industry: string; // 所属行业

  @Prop()
  capital: string; // 注册资本

  @Prop()
  businessType: string; // 企业类型

  @Prop()
  legalPerson: string; // 法人
}

export const CompanySchema = SchemaFactory.createForClass(Company);


/*
todo

1. 企业总数量
2. 企业各类型及数量 以数量排序
 */

