import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// 审批节点
export type ApprovalNodeDocument = ApprovalNode & Document;

@Schema({ timestamps: true })
export class ApprovalNode {
  @Prop()
  matterName: string; // 行政审批事项名称

  @Prop()
  nodeName: string; // 节点名称

  @Prop()
  serialNumber: string; // 排列序号

  @Prop()
  settlesDays: number; // 办结天数

  @Prop()
  alertDays: number; // 预警天数

  @Prop()
  approvedSector: string; // 审批部门

  @Prop()
  days: number; // 间隔天数
}

const schema = SchemaFactory.createForClass(ApprovalNode);
schema.plugin(mongoosePaginate);

export const ApprovalNodeSchema = schema;

/*
todo

1. 项目总数量
2. 项目各类型及数量 以数量排序
3. 本月新增
4. 本年新增
 */

