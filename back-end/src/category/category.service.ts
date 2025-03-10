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

    async show(category: string) {

        const categories = await this.prisma.category.findMany({
            where: {
                name_category: category
            }
        });

        if (!categories) return new NotFoundException(`A categoria ${category} não existe.`);

        return categories;
    }

    async exists(category: string) {
        if (!(await this.show(category))) {
            throw new NotFoundException(`A categoria ${category} não existe.`);
        }
    }
}