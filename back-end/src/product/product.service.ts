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

    async showByCategory(category: string) {

        const products = await this.prisma.product.findMany({
            where: {
                category_id: category
            }
        });

        if (!products) return new NotFoundException(`Não existe produtos na categoria ${category}.`);

        return products;
    }

    async exists(id: string) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`O produto ${id} não existe.`);
        }
    }
}