import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { CategoryDto } from './category.dto';


export class CreateCategoryDto extends CategoryDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   categoryId: string
}