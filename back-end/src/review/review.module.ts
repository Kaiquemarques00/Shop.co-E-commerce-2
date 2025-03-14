import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports: [PrismaModule],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [],
})
export class ReviewModule {}
