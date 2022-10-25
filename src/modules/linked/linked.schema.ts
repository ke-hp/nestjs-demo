import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LinkedDocument = Linked & Document;

@Schema({ timestamps: true })
export class Linked {
  @Prop()
  name: string; // 外链平台名称

  @Prop()
  url: string; // 链接
}

const schema = SchemaFactory.createForClass(Linked);
schema.plugin(mongoosePaginate);
export const LinkedSchema = schema;
