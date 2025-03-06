import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dto/create-category.dto";


@Controller("categories")
export class CategoryController {
    
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    async create(@Body() data: CreateCategoryDTO) {
        return this.categoryService.create(data)
    }

    @Get()
    async list() {
        return this.categoryService.list();
    }

    @Get(":id")
    async show(@Param('id') id: string) {
        return this.categoryService.show(id);
    }
}