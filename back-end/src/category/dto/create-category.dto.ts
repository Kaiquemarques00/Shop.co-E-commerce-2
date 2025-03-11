import { IsString } from 'class-validator';

export class CreateCategoryDTO {
  @IsString()
  name_category: string;
}
