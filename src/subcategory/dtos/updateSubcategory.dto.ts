import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '@prisma/client';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateSubcategoryDto {

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   categorySubcategoryId: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   subcategoryName: string
}