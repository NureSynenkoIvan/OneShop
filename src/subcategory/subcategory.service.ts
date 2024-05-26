import { Injectable } from '@nestjs/common';
import { SubcategoryDto } from './dtos/subcategory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSubcategoryDto } from './dtos/updateSubcategory.dto';
import { CreateSubcategoryDto } from './dtos/create-subcategory.dto';

@Injectable()
export class SubcategoryService {
    constructor(private prisma: PrismaService) {}

    async findAllSubcategory(): Promise<SubcategoryDto[]> {
      const result = await this.prisma.subcategory.findMany();
      return result;
    }
  
    async createSubcategory(subcategory: SubcategoryDto): Promise<CreateSubcategoryDto> {
      const result = await this.prisma.subcategory.create({ data: { ...subcategory } });
      return result;
    }
  
    async updateSubcategory(subcategory: UpdateSubcategoryDto, id: string): Promise<CreateSubcategoryDto> {
      const result = await this.prisma.subcategory.update({ data: { ...subcategory }, where: { subcategoryId: id } });
      return result;
    }
  
     async findAllSubcategorysByParam(paramName: string, paramValue: string): Promise<SubcategoryDto[]> {
      // console.log(paramName)
      // console.log(paramValue)
  
      const result = await this.prisma.subcategory.findMany({ where: { subcategoryId: paramValue } });
      // const result = await this.prisma.$queryRaw<VacanciesDto[]>(
      //   Prisma.sql`SELECT * FROM Vacancies WHERE ${paramName} = ${paramValue}`
      // )
      return result
    }
  
    async deleteSubcategory(id: string): Promise<CreateSubcategoryDto> {
      const result = await this.prisma.subcategory.delete({ where: { subcategoryId: id } });
      return result;
    }
}
