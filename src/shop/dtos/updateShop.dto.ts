import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';
// import { ShopTypeEnum } from '../enums/ShopType.enum';
import { ShopType } from '@prisma/client';
import { ShopDto } from './shop.dto';

export class UpdateShopDto {

   @ApiProperty({
      type: String,
   })
   @IsString()
   @IsOptional()
   shopAdress: string;

   @ApiProperty({
      type: Date,
   })
   @IsDate()
   @IsOptional()
   shopOpen: Date;

   @ApiProperty({
      type: Date,
   })
   @IsDate()
   @IsOptional()
   shopClose: Date;

   @ApiProperty({
      enum: ShopType,
      type: ShopType,
   })
   @IsEnum(ShopType)
   @IsNotEmpty()
   @IsOptional()
   shopType: ShopType;

   //  @ApiProperty({
   //    enum: ShopTypeEnum,
   //  })
   //  @IsEnum(ShopTypeEnum)
   //  @IsOptional()
   //  shopType?: ShopTypeEnum;

   //  @ApiProperty({
   //    type: ShopTypeEnum,
   // })

   // @IsEnum(ShopType, {
   //    message:
   //      'OTP Type must be one of these values: ' +
   //      Object.values(ShopType).join(', '),
   //  })

   //  @IsString()
   //  @IsOptional()
   //  shopType: ShopType;



   // @ApiProperty({
   //    type: String,
   //  })
   //  @IsString()
   //  @IsOptional()
   //  shopType?: string;
}