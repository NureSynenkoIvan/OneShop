import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, isBoolean } from 'class-validator';

export class UsersProductQuantityDto {

   @ApiProperty({
      type: Number,
   })
   @IsNumber()
   productQuantity: number

   @ApiProperty({
      type: String,
   })
   @IsString()
   productId: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   userId: string

}