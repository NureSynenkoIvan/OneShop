import { Controller } from '@nestjs/common';
import { Body, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { OrderDto } from './dtos/order.dto';
import { UpdateOrderDto } from './dtos/updateOrder.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Get()
    @HttpCode(200)
    public async findAllOrder() {
      const result = await this.orderService.findAllOrder();
      return result
    }
  
  
    @Post()
    @HttpCode(201)
    public async createOrder(@Body() order: OrderDto) {
     const result = await this.orderService.createOrder(order);
    return result
    }
  
    @Put(':id')
    @HttpCode(201)
    public async updateOrder(@Body() order: UpdateOrderDto, @Param('id') id: string) {
    const result = await this.orderService.updateOrder(order, id);
    return result
    }
  
    @Delete(':id')
    @HttpCode(200)
    public async deleteOrder(@Param('id') id: string) {
      const result = await this.orderService.deleteOrder(id);
    return result
    }
}
