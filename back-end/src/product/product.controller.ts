import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
  } from "@nestjs/common";
  import { ProductService } from "./product.service";
  import { CreateProductDTO } from "./dto/create-product.dto";
import { ImgInterceptor } from "src/interceptors/img.interceptor";
  
  @Controller("products")
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Post()
    @UseInterceptors(ImgInterceptor())
    async create(
      @Body() data: CreateProductDTO,
      @UploadedFile() file: Express.Multer.File
    ) {
      // Convertendo 'amount' e 'rating' para números antes da validação
      const productData = {
        ...data,
        amount: Number(data.amount),  // Converte para número
        rating: Number(data.rating), // Converte para número
        product_img: file.filename,
      };
  
      return this.productService.create(productData);
    }
  
    @Get()
    async list() {
      return this.productService.list();
    }
  
    @Get(":id")
    async show(@Param("id") id: string) {
      return this.productService.show(id);
    }

    @Get("")
    async showByCategory(@Query() category: string) {
      return this.productService.showByCategory(category);
    }
  }
  