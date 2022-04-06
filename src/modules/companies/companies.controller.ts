import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { CreateCompanyDto } from 'src/dto/companies/create-companies.dto';
import { UpdateCompanyDto } from 'src/dto/companies/update-companies.dto';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly service: CompaniesService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createCompanyDto: CreateCompanyDto) {
        return await this.service.create(createCompanyDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
        return await this.service.update(id, updateCompanyDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
