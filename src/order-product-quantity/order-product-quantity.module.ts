import { Module } from '@nestjs/common';
import { OrderProductQuantityController } from './order-product-quantity.controller';
import { OrderProductQuantityService } from './order-product-quantity.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [OrderProductQuantityController],
  providers: [OrderProductQuantityService, PrismaService]
})
export class OrderProductQuantityModule {}
