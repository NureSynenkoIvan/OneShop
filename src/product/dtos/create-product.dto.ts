import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ProductDto } from './product.dto';

export class CreateProductDto extends ProductDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   productId: string
}