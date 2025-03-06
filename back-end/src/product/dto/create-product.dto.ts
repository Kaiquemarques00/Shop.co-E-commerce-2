import { IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductDTO {
    @IsString()
    name_product: string;
    description: string;
    price: string;
    color: string;
    size: string;
    
    product_img: any;

    @IsUUID()
    category_id: string;

    @IsNumber()
    @Transform(({ value }) => Number(value)) // Converte o valor para número
    amount: number;

    @IsNumber()
    @Min(0)
    @Max(5)
    @Transform(({ value }) => Number(value)) // Converte o valor para número
    rating: number;
}
