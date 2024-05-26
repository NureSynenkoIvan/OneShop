import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeliveryService } from './delivery.service';
import { DeliveryDto } from './dtos/delivery.dto';
import { UpdateDeliveryDto } from './dtos/updateDelivery.dto';

@ApiTags('delivery')
@Controller('delivery')
export class DeliveryController {
    constructor(private readonly deliveryService: DeliveryService){}

    @Get()
    @HttpCode(200)
  
    public async findAllDelivery() {
      const result = await this.deliveryService.findAllDelivery();
      return result
    }
  
  //   @Get('/:paramName/:paramValue')
  //   @HttpCode(200)
  //   public async findAllDeliveryByParam(@Param('paramName') paramName: string, @Param('paramValue') paramValue: string) {
  //     const result = await this.deliveryService.findAllDeliveryyParam(paramName, paramValue);
  //     return result
  //   }
  
    @Post()
    @HttpCode(201)
    public async createDelivery(@Body() delivery: DeliveryDto) {
     const result = await this.deliveryService.createDelivery(delivery);
    return result
    }
  
    @Put(':id')
    @HttpCode(201)
    public async updateDelivery(@Body() delivery: UpdateDeliveryDto, @Param('id') id: string) {
    const result = await this.deliveryService.updateDelivery(delivery, id);
    return result
    }
  
    @Delete(':id')
    @HttpCode(200)
    public async deleteDelivery(@Param('') id: string) {
      const result = await this.deliveryService.deleteDelivery(id);
    return result
    }
}
