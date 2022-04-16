import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tanker, TankerSchema } from 'src/schema/tankers.schema';
import { TankersService } from './tankers.service';
import { TankersController } from './tankers.controller';

@Module({
  controllers: [TankersController],
  providers: [TankersService],
  imports: [
    MongooseModule.forFeature([
      { name: Tanker.name, schema: TankerSchema },
    ]),
  ],
})
export class TankersModule {}
