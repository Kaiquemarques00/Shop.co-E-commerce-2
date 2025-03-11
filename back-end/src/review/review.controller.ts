import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDTO } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() data: CreateReviewDTO) {
    return this.reviewService.create(data);
  }

  @Get()
  async list() {
    return this.reviewService.list();
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return this.reviewService.show(id);
  }
}
