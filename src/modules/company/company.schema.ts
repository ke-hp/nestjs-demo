import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @Prop()
  name: string; // 企业名称

  @Prop()
  park: string; // 园区

  @Prop()
  regional: string; // 分区

  @Prop()
  industry: string; // 所属行业

  @Prop()
  operatingCondition: string; // 经营状况

  @Prop()
  emergencyContact: string; // 应急联系人

  @Prop()
  emergencyPhone: string; // 应急手机号

  @Prop()
  EPContact: string; // 环保联系人

  @Prop()
  EPPhone: string; // 环保手机号

  @Prop()
  companyCode: string; // 企业编号

  @Prop()
  priority: string; // 重点企业

  @Prop()
  province: string; // 省级行政区

  @Prop()
  shi: string; // 市

  @Prop()
  xian: string; // 县

  @Prop()
  type: string; // 企业类型

  @Prop()
  productionTime: string; // 投产时间

  @Prop()
  registrationTime: string; // 成立时间

  @Prop()
  ein: string; // 税号

  @Prop()
  legalPerson: string; // 法人

  @Prop()
  creditCode: string; // 信用代码

  @Prop()
  registeredCapital: string; // 注册资金

  @Prop()
  overview: string; // 概况

  @Prop()
  CompanyNum: number; // 企业人数

  @Prop()
  address: string; // 企业地址

  @Prop()
  centerLongitude: string; // 中心经度

  @Prop()
  centralLatitude: string; // 中心纬度

  @Prop()
  capital: string; // 注册资本

  @Prop()
  text: string; // 文本宣传材料

  @Prop()
  img: string; // 图片宣传材料

  @Prop()
  video: string; // 视频宣传材料
}

export const CompanySchema = SchemaFactory.createForClass(Company);


/*
todo

1. 企业总数量
2. 企业各类型及数量 以数量排序
 */

