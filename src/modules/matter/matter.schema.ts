import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Document } from 'mongoose';

export type MatterDocument = Matter & Document;

@Schema({ timestamps: true })
export class Matter {
  @Prop()
  name: string; // 事项名称

  @Prop() // 节点
  nodes: {
    name: string; // 节点名称
    days: number, // 天数
    sector: [string], // 部门
    code: string, // 编号
    intervalDays: number // 间隔天数
  }[];
}


const schema = SchemaFactory.createForClass(Matter);
schema.plugin(mongoosePaginate);
export const MatterSchema = schema;
