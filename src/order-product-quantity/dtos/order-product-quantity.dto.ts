import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, isBoolean } from 'class-validator';

export class OrderProductQuantityDto {

   @ApiProperty({
      type: String,
   })
   @IsString()
   orderProductId: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   orderProductQuantityProductId: string

   @ApiProperty({
      type: Number,
   })
   @IsNumber()
   productQuantity: number

}