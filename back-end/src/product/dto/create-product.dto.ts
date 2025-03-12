import {
  IsNumber,
  IsString,
  IsUUID,
  Max,
  Min,
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductDTO {
  @IsString()
  name_product: string;

  url_image: string;

  @IsString()
  description: string;

  @IsString()
  price: string;

  @IsString()
  color: string[];

  @IsString()
  size: string[];

  @IsOptional()
  @IsString()
  tag?: string;

  @IsOptional()
  @IsString()
  price_discount?: string;

  @IsUUID()
  category_id: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  amount: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  @Transform(({ value }) => Number(value))
  rating: number;

  @IsOptional()
  @IsNumber()
  discount?: number;
}
