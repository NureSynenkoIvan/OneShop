import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, isBoolean } from 'class-validator';

export class UpdateUserDto {

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsEmail()
   @IsOptional()
   userEmail: string


   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   userName: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   userPassword: string

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   userPhoneNumber: string



   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   userBonusAccount: string;

   @ApiProperty({
      type: String,
      required: false,
   })
   @IsString()
   @IsOptional()
   userPhoto: string


   @ApiProperty({
      type: Boolean,
      required: false,
   })
   @IsBoolean()
   @IsOptional()
   userInterfaceLanguage: boolean

   @ApiProperty({
      type: Boolean,
      required: false,
   })
   @IsBoolean()
   @IsOptional()
   userNotification: boolean

   @ApiProperty({
      enum: Role,
      type: Role,
   })
   @IsEnum(Role)
   @IsNotEmpty()
   @IsOptional()
   userRole: Role;

}