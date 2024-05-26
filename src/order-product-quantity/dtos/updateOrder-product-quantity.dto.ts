import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateOrderProductQuantityDto {

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   orderProductId: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   orderProductQuantityProductId: string

   @ApiProperty({
      type: Number,
      required: false,
   })
   @IsNumber()
   @IsOptional()
   productQuantity: number

}