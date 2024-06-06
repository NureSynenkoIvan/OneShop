import { ApiProperty } from '@nestjs/swagger';
import { DeliveryMethod } from '@prisma/client';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsString, isBoolean } from 'class-validator';

export class DeliveryDto {

   @ApiProperty({
      enum: DeliveryMethod,
      type: DeliveryMethod,
   })
   @IsEnum(DeliveryMethod)
   @IsNotEmpty()
   deliveryMethod: DeliveryMethod;

   @ApiProperty({
      type: String,
   })
   @IsString()
   deliveryAddress: string

   // @ApiProperty({
   //    type: String,
   // })
   // @IsString()
   // deliveryCity: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   deliveryPrice: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   deliveryOrderId: string

}