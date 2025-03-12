import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('product_img', {
      storage: memoryStorage(), // Aqui definimos que o arquivo será armazenado em memória
    }),
  )
  async create(
    @Body() data: CreateProductDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      const result = await this.productService.create(data, file);
      return result;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list() {
    return this.productService.list();
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return this.productService.show(id);
  }

  @Get('category/:category_id')
  async showByCategory(
    @Param('category_id') category_id: string,
    @Query('page') page: number = 1,
  ) {
    return this.productService.showByCategory(category_id, page);
  }

  @Get('tag/:tag')
  async showByTag(@Param('tag') tag: string) {
    return this.productService.showByTag(tag);
  }
}
