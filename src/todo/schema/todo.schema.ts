import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type TodoDocumet = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
