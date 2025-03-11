import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDTO {
  @IsString()
  name_person: string;
  comment: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;
}
