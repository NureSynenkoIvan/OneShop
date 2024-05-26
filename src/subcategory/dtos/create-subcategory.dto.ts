import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { SubcategoryDto } from './subcategory.dto';


export class CreateSubcategoryDto extends SubcategoryDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   subcategoryId: string
}