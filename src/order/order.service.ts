import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './dtos/order.dto';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/updateOrder.dto';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) {}

    // async findAllOrder(): Promise<OrderDto[]> {
    //     return this.prisma.order.findMany();
    //   }
    
    //   async createOrder(order: CreateOrderDto): Promise<OrderDto> {
    //     return this.prisma.order.create({
    //       data: {
    //         orderDate: order.orderDate,
    //         userOrderId: order.userOrderId,
    //         receiver: order.receiver,
    //         receiverPhone: order.receiverPhone,
    //         paymentMethod: order.paymentMethod,
    //       },
    //     });
    //   }
    
    //   async updateOrder(order: UpdateOrderDto, id: string): Promise<OrderDto> {
    //     return this.prisma.order.update({
    //       where: { orderId: id  },
    //       data: {
    //         orderDate: order.orderDate,
    //         receiver: order.receiver,
    //         receiverPhone: order.receiverPhone,
    //         paymentMethod: order.paymentMethod,
    //       },
    //     });
    //   }
    
    //   async deleteOrder(id: string): Promise<OrderDto> {
    //     return this.prisma.order.delete({
    //       where: { orderId: id  },
    //     });
    //   }
  async findAllOrder(): Promise<OrderDto[]> {
    const result = await this.prisma.order.findMany();
    return result;
  }

  async createOrder(order: OrderDto): Promise<CreateOrderDto> {
    const result = await this.prisma.order.create({ data: { ...order } });
    return result;
  }

  async updateOrder(order: UpdateOrderDto, id: string): Promise<CreateOrderDto> {
    const result = await this.prisma.order.update({ data: { ...order }, where: { orderId: id } });
    return result;
  }

   async findAllOrdersByParam(paramName: string, paramValue: string): Promise<OrderDto[]> {
    // console.log(paramName)
    // console.log(paramValue)

    const result = await this.prisma.order.findMany({ where: { orderId: paramValue } });
    // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
    //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
    // )
    return result
  }

  async deleteOrder(id: string): Promise<CreateOrderDto> {
    const result = await this.prisma.order.delete({ where: { orderId: id } });
    return result;
  }
}
