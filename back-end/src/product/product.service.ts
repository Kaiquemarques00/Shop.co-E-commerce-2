import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "./dto/create-product.dto";

@Injectable()
export class ProductService {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateProductDTO, imagePaths: string[]) {
        const product = await this.prisma.product.create({
            data: {
                ...data,
                amount: Number(data.amount),
                rating: Number(data.rating),
                discount: data.discount ? Number(data.discount) : null,
            }
        });

        if (imagePaths.length > 0) {
            await this.prisma.image.createMany({
                data: imagePaths.map((url) => ({
                    url: `/products/${url}`, // Caminho da imagem
                    productId: product.id,
                })),
            });
        }

        return product;
    }

    async list() {
        return await this.prisma.product.findMany({
            include: { images: true }, // Inclui imagens nos resultados
        });
    }

    async show(id: string) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: { images: true }, // Inclui imagens no produto
        });

        if (!product) throw new NotFoundException(`O produto ${id} não existe.`);

        return product;
    }

    async showByCategory(category_id: string) {
        const products = await this.prisma.product.findMany({
            where: { category_id },
            include: { images: true },
        });

        if (!products.length) {
            throw new NotFoundException(`Não existem produtos na categoria ${category_id}.`);
        }

        return products;
    }

    async showByTag(tag: string) {
        const products = await this.prisma.product.findMany({
            where: { tag },
            include: { images: true },
        });

        if (!products.length) {
            throw new NotFoundException(`Não existem produtos com a tag ${tag}.`);
        }

        return products;
    }
}
