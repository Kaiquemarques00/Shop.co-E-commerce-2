import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCategoryDTO } from "./dto/create-category.dto";

@Injectable()
export class CategoryService {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateCategoryDTO) {

        return await this.prisma.category.create({
            data
        });
    }

    async list() {
        return await this.prisma.category.findMany();
    }

    async show(id: string) {

        const categories = await this.prisma.category.findUnique({
            where: {
                id
            }
        });

        if (!categories) return new NotFoundException(`A categoria ${id} não existe.`);

        return categories;
    }

    async exists(id: string) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`A categoria ${id} não existe.`);
        }
    }
}