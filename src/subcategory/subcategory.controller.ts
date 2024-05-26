import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubcategoryDto } from './dtos/subcategory.dto';
import { UpdateSubcategoryDto } from './dtos/updateSubcategory.dto';
import { SubcategoryService } from './subcategory.service';

@ApiTags('subcategory')
@Controller('subcategory')
export class SubcategoryController {
    constructor(private readonly subcategoryService: SubcategoryService) { }

    @Get()
    @HttpCode(200)
    public async findAllSubcategory() {
        const result = await this.subcategoryService.findAllSubcategory();
        return result
    }


    @Post()
    @HttpCode(201)
    public async createSubcategory(@Body() subcategory: SubcategoryDto) {
        const result = await this.subcategoryService.createSubcategory(subcategory);
        return result
    }

    @Put(':id')
    @HttpCode(201)
    public async updateSubcategory(@Body() subcategory: UpdateSubcategoryDto, @Param('id') id: string) {
        const result = await this.subcategoryService.updateSubcategory(subcategory, id);
        return result
    }

    @Delete(':id')
    @HttpCode(200)
    public async deleteSubcategory(@Param('id') id: string) {
        const result = await this.subcategoryService.deleteSubcategory(id);
        return result
    }
}
