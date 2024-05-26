import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateUsersProductQuantityDto {

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   productId: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   userId: string

   @ApiProperty({
      type: Number,
      required: false,
   })
   @IsNumber()
   @IsOptional()
   productQuantity: number

}