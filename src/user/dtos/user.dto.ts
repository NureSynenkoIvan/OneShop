import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsString, isBoolean } from 'class-validator';

export class UserDto {

   @ApiProperty({
      type: String,
   })
   @IsEmail()
   userEmail: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   userName: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   userPassword: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   userPhoneNumber: string

   @ApiProperty({
      type: String,
   })
   @IsString()
   userBonusAccount: string;

   @ApiProperty({
      type: String,
   })
   @IsString()
   userPhoto: string

   @ApiProperty({
      type: Boolean,
   })
   @IsBoolean()
   userInterfaceLanguage: boolean

   @ApiProperty({
      type: Boolean,
   })
   @IsBoolean()
   userNotification: boolean

   @ApiProperty({
      enum: Role,
      type: Role,
   })
   @IsEnum(Role)
   @IsNotEmpty()
   userRole: Role;
}