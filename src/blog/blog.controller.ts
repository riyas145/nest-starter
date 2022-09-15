import { Controller, Body, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { IBlog } from './schema/blog.schema';

@Controller('blog')
export class BlogController {
  constructor(private service: BlogService) {}
  @Post()
  async postData(@Body() data: IBlog) {
    return await this.service.postBlog(data);
  }
}
