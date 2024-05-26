import { Module } from '@nestjs/common';
import { UsersProductQuantityController } from './users-product-quantity.controller';
import { UsersProductQuantityService } from './users-product-quantity.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UsersProductQuantityController],
  providers: [UsersProductQuantityService, PrismaService]
})
export class UsersProductQuantityModule {}
