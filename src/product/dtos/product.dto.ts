import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, isBoolean } from 'class-validator';

export class ProductDto {

   @ApiProperty({
      type: String,
   })
   @IsString()
   productName: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   productDescription?: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   productBrand: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   subcategoryId: string
}