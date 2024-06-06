import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { OrderModule } from './order/order.module';
import { BasketModule } from './basket/basket.module';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';
import { OrderProductQuantityModule } from './order-product-quantity/order-product-quantity.module';
import { DeliveryModule } from './delivery/delivery.module';
import { UsersProductQuantityModule } from './users-product-quantity/users-product-quantity.module';
import { ProductShopModule } from './product-shop/product-shop.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { DownloadModule } from './download/download.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, OrderModule, BasketModule, ProductModule, ShopModule, OrderProductQuantityModule, DeliveryModule, UsersProductQuantityModule, ProductShopModule, CategoryModule, SubcategoryModule, DownloadModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
