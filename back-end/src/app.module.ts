import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewModule } from './review/review.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ReviewModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
