import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString, isBoolean } from 'class-validator';

export class CategoryDto {

   @ApiProperty({
      enum: CategoryType,
      type: CategoryType,
   })
   @IsEnum(CategoryType)
   @IsNotEmpty()
   category: CategoryType;

}