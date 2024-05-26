import { ApiProperty } from '@nestjs/swagger';
import { DeliveryMethod } from '@prisma/client';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateDeliveryDto {

   @ApiProperty({
      type: DeliveryMethod,
      enum: DeliveryMethod,
   })
   @IsEnum(DeliveryMethod)
   @IsNotEmpty()
   @IsOptional()
   deliveryMethod: DeliveryMethod;

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   deliveryAddress: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   deliveryCity: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   deliveryPrice: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   deliveryOrderId: string;
}