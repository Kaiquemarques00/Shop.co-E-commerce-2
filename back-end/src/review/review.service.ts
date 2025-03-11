import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDTO } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReviewDTO) {
    return await this.prisma.review.create({
      data,
    });
  }

  async list() {
    return await this.prisma.review.findMany();
  }

  async show(id: string) {
    const reviews = await this.prisma.review.findUnique({
      where: {
        id,
      },
    });

    if (!reviews) return new NotFoundException(`A review ${id} não existe.`);

    return reviews;
  }

  async exists(id: string) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`A review ${id} não existe.`);
    }
  }
}
