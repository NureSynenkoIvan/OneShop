import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod } from '@prisma/client';
import { IsBoolean, IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateOrderDto {

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   orderId: string

   @ApiProperty({
      type: Date,
      required: false,
   })
   @IsDate()
   @IsOptional()
   orderDate: Date

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   receiver: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   receiverPhone: string;

   // @ApiProperty({
   //    type: String,
   //    required: false,
   // })
   // @IsString()
   // @IsOptional()
   // paymentMethod: string

   @ApiProperty({
      enum: PaymentMethod,
      type: PaymentMethod,
      // required: false,
    })
   @IsEnum(PaymentMethod)
   @IsNotEmpty()
   // @IsOptional()
   paymentMethod: PaymentMethod;
}