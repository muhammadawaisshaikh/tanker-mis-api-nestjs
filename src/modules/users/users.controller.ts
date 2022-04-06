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
import { CreateUsersDto } from 'src/dto/users/create-users.dto';
import { UpdateUsersDto } from 'src/dto/users/update-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post('/signup')
    async create(@Body() createUsersDto: CreateUsersDto) {
        return await this.service.create(createUsersDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
        return await this.service.update(id, updateUsersDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
