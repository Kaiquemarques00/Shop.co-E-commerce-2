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
<<<<<<< HEAD
      @UploadedFile() file: Express.Multer.File
    ) {
      // Convertendo 'amount' e 'rating' para números antes da validação
      const productData = {
        ...data,
        amount: Number(data.amount),
        rating: Number(data.rating),
        discount: Number(data.discount),
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

    @Get("category/:category_id")
    async showByCategory(@Param('category_id') category_id: string) {
      return this.productService.showByCategory(category_id);
    }

    @Get("tag/:tag")
    async showByTag(@Param('tag') tag: string) {
      return this.productService.showByTag(tag);
    }
=======
      @UploadedFiles() files: Express.Multer.File[]
  ) {
      const imagePaths = files.map(file => file.filename); // Captura os nomes das imagens
      return this.productService.create(data, imagePaths);
>>>>>>> features/back_end
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
