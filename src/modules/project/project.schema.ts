import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop()
  name: string; // 项目名称

  @Prop()
  industry: string; // 项目的行业类别

  @Prop()
  investment: string; // 项目总投资

  @Prop()
  matters: {};

  @Prop() // 产品项
  products: { product: string; scale: string, state: string }[];

  @Prop()
  centerLongitude: string; // 中心经度

  @Prop()
  centralLatitude: string; // 中心纬度

  @Prop()
  regional: string; // 分区

  @Prop()
  company: string; // 企业
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

/*
1. 项目总数量
2. 项目各类型及数量 以数量排序
3. 本月新增
4. 本年新增
 */

