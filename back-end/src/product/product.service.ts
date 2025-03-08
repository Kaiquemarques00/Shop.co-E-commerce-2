import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "./dto/create-product.dto";

@Injectable()
export class ProductService {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateProductDTO) {

        return await this.prisma.product.create({
            data
        });
    }

    async list() {
        return await this.prisma.product.findMany();
    }

    async show(id: string) {

        const products = await this.prisma.product.findUnique({
            where: {
                id
            }
        });

        if (!products) return new NotFoundException(`O produto ${id} não existe.`);

        return products;
    }

    async showByCategory(category_id: string) {

        const products = await this.prisma.product.findMany({
            where: {
                category_id
            }
        });

        if (!products || products.length === 0) {
            throw new NotFoundException(`Não existe produtos na categoria ${category_id}.`);
        }

        return products;
    }

    async showByTag(tag: string) {

        const products = await this.prisma.product.findMany({
            where: {
                tag: tag
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        if (!products || products.length === 0) return new NotFoundException(`Não existe produtos na tag ${tag}.`);

        return products;
    }

    async exists(id: string) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`O produto ${id} não existe.`);
        }
    }
}