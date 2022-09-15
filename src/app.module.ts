import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TodoModule,
    BlogModule,
    MongooseModule.forRoot('mongodb://localhost:27017/todo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
