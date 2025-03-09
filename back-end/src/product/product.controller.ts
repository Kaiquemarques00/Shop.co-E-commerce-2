import { 
  Body, 
  Controller, 
  Get, 
  Param, 
  Post, 
  UploadedFiles, 
  UseInterceptors 
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/create-product.dto";
import { ImgInterceptor } from "src/interceptors/img.interceptor";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(ImgInterceptor()) // Permite upload de múltiplas imagens
  async create(
      @Body() data: CreateProductDTO,
      @UploadedFiles() files: Express.Multer.File[]
  ) {
      const imagePaths = files.map(file => file.filename); // Captura os nomes das imagens
      return this.productService.create(data, imagePaths);
  }

  @Get()
  async list() {
      return this.productService.list();
  }

  @Get(":id")
  async show(@Param("id") id: string) {
      return this.productService.show(id);
  }

  @Get("category/:category_id")
  async showByCategory(@Param("category_id") category_id: string) {
      return this.productService.showByCategory(category_id);
  }

  @Get("tag/:tag")
  async showByTag(@Param("tag") tag: string) {
      return this.productService.showByTag(tag);
  }
}
