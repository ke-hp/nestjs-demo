import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DevZoneDocument = DevZone & Document;

@Schema({ timestamps: true })
export class DevZone {
  @Prop()
  name: string;

  @Prop()
  text: string; // 文本

  @Prop()
  img: string; // 链接

  @Prop()
  video: string; // 链接

  @Prop()
  linked: string; // 外链
}

const schema = SchemaFactory.createForClass(DevZone);
schema.plugin(mongoosePaginate);
export const DevZoneSchema = schema;
