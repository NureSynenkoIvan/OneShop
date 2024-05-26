import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryDto } from './dtos/category.dto';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

  @Get()
  @HttpCode(200)

  public async findAllCategory() {
    const result = await this.categoryService.findAllCategory();
    return result
  }

//   @Get('/:paramName/:paramValue')
//   @HttpCode(200)
//   public async findAllCategoryByParam(@Param('paramName') paramName: string, @Param('paramValue') paramValue: string) {
//     const result = await this.categoryService.findAllCategoryyParam(paramName, paramValue);
//     return result
//   }

  @Post()
  @HttpCode(201)
  public async createCategory(@Body() category: CategoryDto) {
   const result = await this.categoryService.createCategory(category);
  return result
  }

  @Put(':id')
  @HttpCode(201)
  public async updateCategory(@Body() category: UpdateCategoryDto, @Param('id') id: string) {
  const result = await this.categoryService.updateCategory(category, id);
  return result
  }

  @Delete(':id')
  @HttpCode(200)
  public async deleteCategory(@Param('') id: string) {
    const result = await this.categoryService.deleteCategory(id);
  return result
  }
}
