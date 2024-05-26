import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { CategoryDto } from './dtos/category.dto';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}
    
  async findAllCategory(): Promise<CategoryDto[]> {
    const result = await this.prisma.category.findMany();
    return result;
  }

  async createCategory(category: CategoryDto): Promise<CreateCategoryDto> {
    const result = await this.prisma.category.create({ data: { ...category } });
    return result;
  }

  async updateCategory(category: UpdateCategoryDto, id: string): Promise<CreateCategoryDto> {
    const result = await this.prisma.category.update({ data: { ...category }, where: { categoryId: id } });
    return result;
  }

   async findAllCategorysByParam(paramName: string, paramValue: string): Promise<CategoryDto[]> {
    // console.log(paramName)
    // console.log(paramValue)

    const result = await this.prisma.category.findMany({ where: { categoryId: paramValue } });
    // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
    //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
    // )
    return result
  }

  async deleteCategory(id: string): Promise<CreateCategoryDto> {
    const result = await this.prisma.category.delete({ where: { categoryId: id } });
    return result;
  }
}
