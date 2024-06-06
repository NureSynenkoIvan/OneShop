import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersProductQuantityDto } from './dtos/create-users-product-quantity.dto';
import { UpdateUsersProductQuantityDto } from './dtos/updateUsers-product-quantity.dto';
import { UsersProductQuantityDto } from './dtos/users-product-quantity.dto';

@Injectable()
export class UsersProductQuantityService {
    constructor(private prisma: PrismaService) {}
    
    async findAllUsersProductQuantity(): Promise<UsersProductQuantityDto[]> {
        const result = await this.prisma.usersProductQuantity.findMany();
        return result;
      }
    
      async createUsersProductQuantity(usersProductQuantity: UsersProductQuantityDto): Promise<CreateUsersProductQuantityDto> {
        const result = await this.prisma.usersProductQuantity.create({ data: { ...usersProductQuantity } });
        return result;
      }
    
      async updateUsersProductQuantity(usersProductQuantity: UpdateUsersProductQuantityDto, id: string): Promise<CreateUsersProductQuantityDto> {
        const result = await this.prisma.usersProductQuantity.update({ data: { ...usersProductQuantity }, where: { usersProductQuantityId: id } });
        return result;
      }
    
       async findAllUsersProductQuantitysByParam(paramName: string, paramValue: string): Promise<UsersProductQuantityDto[]> {
        // console.log(paramName)
        // console.log(paramValue)
    
        const result = await this.prisma.usersProductQuantity.findMany({ where: { usersProductQuantityId: paramValue } });
        // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
        //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
        // )
        return result
      }
    
      async deleteUsersProductQuantity(id: string): Promise<CreateUsersProductQuantityDto> {
        const result = await this.prisma.usersProductQuantity.delete({ where: { usersProductQuantityId: id } });
        return result;
      }
}
