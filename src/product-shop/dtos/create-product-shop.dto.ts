import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UsersProductQuantityDto } from './productShop.dto';


export class CreateUsersProductQuantityDto extends UsersProductQuantityDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   usersProductQuantityId: string
}