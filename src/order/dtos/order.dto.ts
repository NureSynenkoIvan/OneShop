import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod } from '@prisma/client';
import { IsBoolean, IsDate, IsEmail, IsEnum, IsNotEmpty, IsString, isBoolean } from 'class-validator';

export class OrderDto {

   @ApiProperty({
      type: Date,
   })
   @IsDate()
   orderDate: Date

   @ApiProperty({
      type: String,
   })
   @IsString()
   userOrderId: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   receiver: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   receiverPhone: string

   // @ApiProperty({
   //    type: String,
   // })
   // @IsString()
   // paymentMethod: string;

   // @ApiProperty({
   //    type: PaymentMethod,
   //  })
   // @IsEnum(PaymentMethod)
   // @IsNotEmpty()
   // paymentMethod: PaymentMethod;

   @ApiProperty({
      enum: PaymentMethod,
      // enumName: 'PaymentMethod',
      type: PaymentMethod,
    })
    @IsEnum(PaymentMethod)
    @IsNotEmpty()
    paymentMethod: PaymentMethod
}