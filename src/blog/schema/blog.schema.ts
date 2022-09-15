import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface IBlog {
  name: string;
  description: string;
}
export type BlogDocument = Blog & Document;
@Schema()
export class Blog {
  @Prop({ required: true })
  name: string;
  @Prop()
  description: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
