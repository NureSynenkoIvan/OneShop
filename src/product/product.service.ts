import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dtos/product.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async findAllProduct(): Promise<ProductDto[]> {
      const result = await this.prisma.product.findMany();
      return result;
    }
  
    async createProduct(product: ProductDto): Promise<CreateProductDto> {
      const result = await this.prisma.product.create({ data: { ...product } });
      return result;
    }
  
    async updateProduct(product: UpdateProductDto, id: string): Promise<CreateProductDto> {
      const result = await this.prisma.product.update({ data: { ...product }, where: { productId: id } });
      return result;
    }
  
     async findAllProductsByParam(paramName: string, paramValue: string): Promise<ProductDto[]> {
      // console.log(paramName)
      // console.log(paramValue)
  
      const result = await this.prisma.product.findMany({ where: { productId: paramValue } });
      // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
      //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
      // )
      return result
    }
  
    async deleteProduct(id: string): Promise<CreateProductDto> {
      const result = await this.prisma.product.delete({ where: { productId: id } });
      return result;
    }
}
