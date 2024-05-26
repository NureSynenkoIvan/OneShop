import { Module } from '@nestjs/common';
import { ProductShopController } from './product-shop.controller';
import { ProductShopService } from './product-shop.service';

@Module({
  controllers: [ProductShopController],
  providers: [ProductShopService]
})
export class ProductShopModule {}
