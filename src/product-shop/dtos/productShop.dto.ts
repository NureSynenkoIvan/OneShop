import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, isBoolean } from 'class-validator';

export class UsersProductQuantityDto {

   @ApiProperty({
      type: String,
   })
   @IsString()
   shopID: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   productID: string

   @ApiProperty({
      type: Number,
   })
   @IsNumber()
   productQuantity: number

}