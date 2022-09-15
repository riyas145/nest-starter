import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument, IBlog } from './schema/blog.schema';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private model: Model<BlogDocument>) {}
  async postBlog(blogData: IBlog) {
    try {
      const result = await new this.model({
        ...blogData,
      }).save();
      return {
        message: 'Blog Added',
        data: result,
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      return {
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
      };
    }
  }
}
