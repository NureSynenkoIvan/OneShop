import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '@prisma/client';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateCategoryDto {

   @ApiProperty({
      enum: CategoryType,
      type: CategoryType,
   })
   @IsEnum(CategoryType)
   @IsNotEmpty()
   @IsOptional()
   category: CategoryType;
}