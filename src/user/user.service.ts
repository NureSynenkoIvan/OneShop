import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UserDto } from './dtos/user.dto';
import { LoginUserDto } from './dtos/loginUser.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

  async findAllUser(): Promise<UserDto[]> {
    const result = await this.prisma.user.findMany();
    return result;
  }

  async login(data): Promise<LoginUserDto> {
      const result = await this.prisma.user.findUnique({ where: { userEmail: data } });
      if (result ) { //&& result.userPassword === data.userPassword
        return result//{ userId: result.userId, userRole: result.userRole}
      } else throw new NotFoundException('email not found');
  }

  async createUser(user: UserDto): Promise<CreateUserDto> {
    const result = await this.prisma.user.create({ data: { ...user } });
    return result;
  }

  async updateUser(user: UpdateUserDto, email: string): Promise<CreateUserDto> {
    const result = await this.prisma.user.update({ data: { ...user }, where: { userEmail: email } });
    return result;
  }

   async findAllUsersByParam(paramName: string, paramValue: string): Promise<UserDto[]> {
    // console.log(paramName)
    // console.log(paramValue)

    const result = await this.prisma.user.findMany({ where: { userId: paramValue } });
    // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
    //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
    // )
    return result
  }

  async deleteUser(id: string): Promise<CreateUserDto> {
    const result = await this.prisma.user.delete({ where: { userId: id } });
    return result;
  }

}
