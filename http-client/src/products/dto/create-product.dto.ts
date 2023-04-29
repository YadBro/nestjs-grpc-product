import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  stock: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;
}

