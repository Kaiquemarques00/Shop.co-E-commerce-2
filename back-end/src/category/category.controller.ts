import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() data: CreateCategoryDTO) {
    return this.categoryService.create(data);
  }

  @Get()
  async list() {
    return this.categoryService.list();
  }

  @Get(':category')
  async show(@Param('category') category: string) {
    return this.categoryService.show(
      `${category.charAt(0).toUpperCase()}${category.slice(1).toLowerCase()}`,
    );
  }
}
