import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsEmail, IsEnum, IsNotEmpty, IsString, isBoolean } from 'class-validator';
// import { ShopTypeEnum } from '../enums/ShopType.enum';
import {
   ShopType,
} from '@prisma/client';

export class ShopDto {

   @ApiProperty({
      type: String,
   })
   @IsString()
   shopAdress: string

   @ApiProperty({
      type: Date,
   })
   @IsDate()
   shopOpen: Date

   @ApiProperty({
      type: Date,
   })
   @IsDate()
   shopClose: Date

   @ApiProperty({
      enum: ShopType,
      type: ShopType,
   })
   @IsEnum(ShopType)
   @IsNotEmpty()
   shopType: ShopType;

   // @ApiProperty({
   //    enum: ShopTypeEnum,
   // })
   // @IsEnum(ShopTypeEnum)
   // shopType: ShopTypeEnum
   // @ApiProperty({
   //    type: ShopTypeEnum,
   // })
   // @IsEnum(ShopType, {
   //    message:
   //      'OTP Type must be one of these values: ' +
   //      Object.values(ShopType).join(', '),
   //  })
   //  @IsString()
   //  type: ShopType;

   // @ApiProperty({
   //    type: String,
   // })
   // @IsString()
   // shopType: string
}