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
import { CreateTankerDto } from 'src/dto/tankers/create-tankers.dto';
import { UpdateTankerDto } from 'src/dto/tankers/update-tankers.dto';
import { TankersService } from './tankers.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('tankers')
@ApiTags('tankers')
export class TankersController {
  constructor(private readonly service: TankersService) {}

  @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createTankerDto: CreateTankerDto) {
        return await this.service.create(createTankerDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTankerDto: UpdateTankerDto) {
        return await this.service.update(id, updateTankerDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
