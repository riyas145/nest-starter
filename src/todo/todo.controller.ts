import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTodo } from './dto/create.tdo';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}
  @Get()
  todoGet() {
    return 'This is from todo get';
  }
  @Post()
  async create(@Body() createTodo: CreateTodo): Promise<any> {
    return await this.service.create(createTodo);
  }
}
