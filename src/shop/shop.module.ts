import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  imports: [],
  controllers: [ShopController],
  providers: [ShopService, PrismaService]
})
export class ShopModule {}
