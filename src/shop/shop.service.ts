import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShopDto } from './dtos/shop.dto';
import { UpdateShopDto } from './dtos/updateShop.dto';
import { CreateShopDto } from './dtos/create-shop.dto';
// import { ShopTypeEnum } from './enums/ShopType.enum';

@Injectable()
export class ShopService {
    constructor(private prisma: PrismaService) {}
    
  async findAllShop(): Promise<ShopDto[]> {
    const result = await this.prisma.shop.findMany();
    return result;
  }

  async createShop(shop: ShopDto): Promise<CreateShopDto> {
    const result = await this.prisma.shop.create({ data: { ...shop } });
    return result;
  }

  async updateShop(shop: UpdateShopDto, id: string): Promise<CreateShopDto> {
    const result = await this.prisma.shop.update({ data: { ...shop }, where: { shopId: id } });
    return result;
  }

   async findAllShopsByParam(paramName: string, paramValue: string): Promise<ShopDto[]> {
    // console.log(paramName)
    // console.log(paramValue)

    const result = await this.prisma.shop.findMany({ where: { shopId: paramValue } });
    // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
    //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
    // )
    return result
  }

  async deleteShop(id: string): Promise<CreateShopDto> {
    const result = await this.prisma.shop.delete({ where: { shopId: id } });
    return result;
  }

  ///////////////////////////////////////


  // async findAllShop(): Promise<ShopDto[]> {
  //   const result = await this.prisma.shop.findMany();
  //   return result.map(shop => ({
  //     ...shop,
  //     shopType: shop.shopType as ShopTypeEnum,
  //   }));
  // }

  // async createShop(shop: CreateShopDto): Promise<ShopDto> {
  //   const result = await this.prisma.shop.create({
  //     data: {
  //       shopAdress: shop.shopAdress,
  //       shopOpen: shop.shopOpen,
  //       shopClose: shop.shopClose,
  //       shopType: shop.shopType,
  //       shopId: shop.shopId,
  //     },
  //   });
  //   return { ...result, shopType: result.shopType as ShopTypeEnum };
  // }

  // async updateShop(shop: UpdateShopDto, id: string): Promise<ShopDto> {
  //   const result = await this.prisma.shop.update({
  //     data: {
  //       shopAdress: shop.shopAdress,
  //       shopOpen: shop.shopOpen,
  //       shopClose: shop.shopClose,
  //       shopType: shop.shopType,
  //     },
  //     where: { shopId: id },
  //   });
  //   return { ...result, shopType: result.shopType as ShopTypeEnum };
  // }

  // async findAllShopsByParam(paramName: string, paramValue: string): Promise<ShopDto[]> {
  //   const result = await this.prisma.shop.findMany({
  //     where: { [paramName]: paramValue },
  //   });
  //   return result.map(shop => ({
  //     ...shop,
  //     shopType: shop.shopType as ShopTypeEnum,
  //   }));
  // }

  // async deleteShop(id: string): Promise<ShopDto> {
  //   const result = await this.prisma.shop.delete({
  //     where: { shopId: id },
  //   });
  //   return { ...result, shopType: result.shopType as ShopTypeEnum };
  // }
}

