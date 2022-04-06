import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersSchema } from 'src/schema/users.schema';

@Module({
  providers: [
    UsersService
  ],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  exports: [
    UsersService
  ],
})
export class UsersModule {}
