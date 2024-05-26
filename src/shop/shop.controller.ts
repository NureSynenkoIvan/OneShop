import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShopService } from './shop.service';
import { UpdateShopDto } from './dtos/updateShop.dto';
import { ShopDto } from './dtos/shop.dto';

@ApiTags('shop')
@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService){}

  @Get()
  @HttpCode(200)

  public async findAllShop() {
    const result = await this.shopService.findAllShop();
    return result
  }

//   @Get('/:paramName/:paramValue')
//   @HttpCode(200)
//   public async findAllShopByParam(@Param('paramName') paramName: string, @Param('paramValue') paramValue: string) {
//     const result = await this.shopService.findAllShopyParam(paramName, paramValue);
//     return result
//   }

  @Post()
  @HttpCode(201)
  public async createShop(@Body() shop: ShopDto) {
   const result = await this.shopService.createShop(shop);
  return result
  }

  @Put(':id')
  @HttpCode(201)
  public async updateShop(@Body() shop: UpdateShopDto, @Param('id') id: string) {
  const result = await this.shopService.updateShop(shop, id);
  return result
  }

  @Delete(':id')
  @HttpCode(200)
  public async deleteShop(@Param('') id: string) {
    const result = await this.shopService.deleteShop(id);
  return result
  }
}
