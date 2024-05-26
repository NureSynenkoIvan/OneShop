import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateProductDto {

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   productName: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   productDescription?: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   productBrand: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   subcategoryId: string



}