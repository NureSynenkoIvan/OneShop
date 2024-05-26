import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class LoginUserDto extends UserDto{
    @ApiProperty({
        type: String,
        nullable: true
    })
    @IsString()
    userId: string


    // @ApiProperty({
    //     enum: Role,
    //     type: Role,
    //     required: true,
    // })
    // @IsEnum(Role)
    // @IsNotEmpty()
    // userRole: Role;

}