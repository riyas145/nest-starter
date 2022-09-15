import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodo } from './dto/create.tdo';
import { Todo, TodoDocumet } from './schema/todo.schema';
export interface SuccessResponse {
  message: string;
  data: CreateTodo;
  status: number;
}

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private model: Model<TodoDocumet>) {}
  async findAll(): Promise<Todo[]> {
    return this.model.find().exec();
  }
  async create(createTodo: CreateTodo): Promise<SuccessResponse> {
    const data = await new this.model({
      ...createTodo,
    }).save();
    return {
      message: 'Toda Added Successfuly',
      data: data,
      status: HttpStatus.CREATED,
    };
  }
}
