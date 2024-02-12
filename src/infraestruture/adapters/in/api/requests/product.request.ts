import { IsNotEmpty, IsNumber } from 'class-validator';

export default class ProductRequest {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: string;
}
