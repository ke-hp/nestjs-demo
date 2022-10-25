import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop()
  enterpriseName: string; // 企业名称

  @Prop()
  projectName: string; // 项目名称

  @Prop()
  industryCategory: string; // 行业类别  化工

  @Prop()
  progress: string; // 进度或者进展
}

export const ProjectSchema = SchemaFactory.createForClass(Project);


/*
todo

1. 项目总数量
2. 项目各类型及数量 以数量排序
3. 本月新增
4. 本年新增
 */

