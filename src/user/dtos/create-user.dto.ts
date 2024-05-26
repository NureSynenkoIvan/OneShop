import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto extends UserDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   userId: string
}