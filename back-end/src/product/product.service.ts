import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async create(data: CreateProductDTO, file: Express.Multer.File) {
    const upload = await this.cloudinary.uploadImage(file);
    const imageUrl = upload.url;

    const product = await this.prisma.product.create({
      data: {
        ...data,
        amount: Number(data.amount),
        rating: Number(data.rating),
        discount: data.discount ? Number(data.discount) : null,
        url_image: String(imageUrl)
      },
    });

    return product;
  }

  async list() {
    return await this.prisma.product.findMany();
  }

  async show(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) throw new NotFoundException(`O produto ${id} não existe.`);

    return product;
  }

  async showByCategory(category_id: string, page: number) {
    const limit = 9;

    if (page < 1) {
      throw new BadRequestException('O número da página deve ser maior que 0.');
    }

    const skip = (page - 1) * limit;
    const take = limit;

    const products = await this.prisma.product.findMany({
      where: { category_id },
      skip: skip,
      take: take,
      orderBy: {
        created_at: 'asc',
      },
    });

    if (!products.length) {
      throw new NotFoundException(
        `Não existem produtos na categoria ${category_id}.`,
      );
    }

    return products;
  }

  async showByTag(tag: string) {
    const products = await this.prisma.product.findMany({
      where: { tag },
      orderBy: {
        created_at: 'asc',
      },
    });

    if (!products.length) {
      throw new NotFoundException(`Não existem produtos com a tag ${tag}.`);
    }

    return products;
  }
}
