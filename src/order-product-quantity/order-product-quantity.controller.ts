import { Controller,  Body, Delete, Get, HttpCode, Param, Post, Put  } from '@nestjs/common';
import { OrderProductQuantityService } from './order-product-quantity.service';
import { OrderProductQuantityDto } from './dtos/order-product-quantity.dto';
import { UpdateOrderProductQuantityDto } from './dtos/updateOrder-product-quantity.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order-product-quantity')
@Controller('order-product-quantity')
export class OrderProductQuantityController {
    constructor(private readonly orderProductQuantityService: OrderProductQuantityService) { }

    @Get()
    @HttpCode(200)
    public async findAllOrderProductQuantity() {
      const result = await this.orderProductQuantityService.findAllOrderProductQuantity();
      return result
    }
  
  
    @Post()
    @HttpCode(201)
    public async createOrderProductQuantity(@Body() orderProductQuantity: OrderProductQuantityDto) {
     const result = await this.orderProductQuantityService.createOrderProductQuantity(orderProductQuantity);
    return result
    }
  
    @Put(':id')
    @HttpCode(201)
    public async updateOrderProductQuantity(@Body() orderProductQuantity: UpdateOrderProductQuantityDto, @Param('id') id: string) {
    const result = await this.orderProductQuantityService.updateOrderProductQuantity(orderProductQuantity, id);
    return result
    }
  
    @Delete(':id')
    @HttpCode(200)
    public async deleteOrderProductQuantity(@Param('id') id: string) {
      const result = await this.orderProductQuantityService.deleteOrderProductQuantity(id);
    return result
    }
}
