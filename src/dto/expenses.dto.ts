import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsEnum,
} from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsEnum(['Food', 'Transport', 'Shopping', 'Bills', 'Other'], {
    message: 'Category must be one of: Food, Transport, Shopping, Bills, Other',
  })
  category: string;
}
