import { Injectable } from '@nestjs/common';
import { UpdateDeliveryDto } from './dtos/updateDelivery.dto';
import { DeliveryDto } from './dtos/delivery.dto';
import { CreateDeliveryDto } from './dtos/create-delivery.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeliveryService {
    constructor(private prisma: PrismaService) {}
    
  async findAllDelivery(): Promise<DeliveryDto[]> {
    const result = await this.prisma.delivery.findMany();
    return result;
  }

  async createDelivery(delivery: DeliveryDto): Promise<CreateDeliveryDto> {
    const result = await this.prisma.delivery.create({ data: { ...delivery } });
    return result;
  }

  async updateDelivery(delivery: UpdateDeliveryDto, id: string): Promise<CreateDeliveryDto> {
    const result = await this.prisma.delivery.update({ data: { ...delivery }, where: { deliveryId: id } });
    return result;
  }

   async findAllDeliverysByParam(paramName: string, paramValue: string): Promise<DeliveryDto[]> {
    // console.log(paramName)
    // console.log(paramValue)

    const result = await this.prisma.delivery.findMany({ where: { deliveryId: paramValue } });
    // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
    //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
    // )
    return result
  }

  async deleteDelivery(id: string): Promise<CreateDeliveryDto> {
    const result = await this.prisma.delivery.delete({ where: { deliveryId: id } });
    return result;
  }
}
