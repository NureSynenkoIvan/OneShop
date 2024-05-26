import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString, isBoolean } from 'class-validator';

export class SubcategoryDto {

   @ApiProperty({
      type: String,
   })
   @IsString()
   subcategoryName: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   categorySubcategoryId: string
}