import { Injectable } from '@nestjs/common';
import { OrderProductQuantityDto } from './dtos/order-product-quantity.dto';
import { CreateOrderProductQuantityDto } from './dtos/create-order-product-quantity.dto';
import { UpdateOrderProductQuantityDto } from './dtos/updateOrder-product-quantity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderProductQuantityService {
    constructor(private prisma: PrismaService) {}
    
    async findAllOrderProductQuantity(): Promise<OrderProductQuantityDto[]> {
        const result = await this.prisma.orderProductQuantity.findMany();
        return result;
      }
    
      async createOrderProductQuantity(orderProductQuantity: OrderProductQuantityDto): Promise<CreateOrderProductQuantityDto> {
        const result = await this.prisma.orderProductQuantity.create({ data: { ...orderProductQuantity } });
        return result;
      }
    
      async updateOrderProductQuantity(orderProductQuantity: UpdateOrderProductQuantityDto, id: string): Promise<CreateOrderProductQuantityDto> {
        const result = await this.prisma.orderProductQuantity.update({ data: { ...orderProductQuantity }, where: { orderProductQuantityId: id } });
        return result;
      }
    
       async findAllOrderProductQuantitysByParam(paramName: string, paramValue: string): Promise<OrderProductQuantityDto[]> {
        // console.log(paramName)
        // console.log(paramValue)
    
        const result = await this.prisma.orderProductQuantity.findMany({ where: { orderProductQuantityId: paramValue } });
        // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
        //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
        // )
        return result
      }
    
      async deleteOrderProductQuantity(id: string): Promise<CreateOrderProductQuantityDto> {
        const result = await this.prisma.orderProductQuantity.delete({ where: { orderProductQuantityId: id } });
        return result;
      }
}
