import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Tanker, TankerDocument } from 'src/schema/tankers.schema';
import { CreateTankerDto } from 'src/dto/tankers/create-tankers.dto';
import { UpdateTankerDto } from 'src/dto/tankers/update-tankers.dto';

@Injectable()
export class TankersService {
  constructor(@InjectModel(Tanker.name) private readonly model: Model<TankerDocument>) {
  }

  async findAll(): Promise<Tanker[]> {
      return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Tanker> {
      return await this.model.findById(id).exec();
  }

  async create(createTankerDto: CreateTankerDto): Promise<Tanker> {
      return await new this.model({
          ...createTankerDto,
          createdAt: new Date(),
      }).save();
  }

  async update(id: string, updateTankerDto: UpdateTankerDto): Promise<Tanker> {
      return await this.model.findByIdAndUpdate(id, updateTankerDto).exec();
  }

  async delete(id: string): Promise<Tanker> {
      return await this.model.findByIdAndDelete(id).exec();
  }
}
