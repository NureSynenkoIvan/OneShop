import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductDto } from './dtos/product.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

  @Get()
  @HttpCode(200)
  public async findAllProduct() {
    const result = await this.productService.findAllProduct();
    return result
  }


  @Post()
  @HttpCode(201)
  public async createProduct(@Body() product: ProductDto) {
   const result = await this.productService.createProduct(product);
  return result
  }

  @Put(':id')
  @HttpCode(201)
  public async updateProduct(@Body() product: UpdateProductDto, @Param('id') id: string) {
  const result = await this.productService.updateProduct(product, id);
  return result
  }

  @Delete(':id')
  @HttpCode(200)
  public async deleteProduct(@Param('id') id: string) {
    const result = await this.productService.deleteProduct(id);
  return result
  }
}
