import { Controller,  Body, Delete, Get, HttpCode, Param, Post, Put  } from '@nestjs/common';
import { UsersProductQuantityService } from './users-product-quantity.service';
import { UsersProductQuantityDto } from './dtos/users-product-quantity.dto';
import { UpdateUsersProductQuantityDto } from './dtos/updateUsers-product-quantity.dto';
// import { UpdateUsersProductQuantityDto } from 'src/product-shop/dtos/updateUsers-product-quantity.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users-product-quantity')
@Controller('users-product-quantity')
export class UsersProductQuantityController {
    constructor(private readonly usersProductQuantityService: UsersProductQuantityService) { }

    @Get()
    @HttpCode(200)
    public async findAllUsersProductQuantity() {
      const result = await this.usersProductQuantityService.findAllUsersProductQuantity();
      return result
    }
  
  
    @Post()
    @HttpCode(201)
    public async createUsersProductQuantity(@Body() usersProductQuantity: UsersProductQuantityDto) {
     const result = await this.usersProductQuantityService.createUsersProductQuantity(usersProductQuantity);
    return result
    }
  
    @Put(':id')
    @HttpCode(201)
    public async updateUsersProductQuantity(@Body() usersProductQuantity: UpdateUsersProductQuantityDto, @Param('id') id: string) {
    const result = await this.usersProductQuantityService.updateUsersProductQuantity(usersProductQuantity, id);
    return result
    }
  
    @Delete(':id')
    @HttpCode(200)
    public async deleteUsersProductQuantity(@Param('id') id: string) {
      const result = await this.usersProductQuantityService.deleteUsersProductQuantity(id);
    return result
    }
}
