import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from './config/keys';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
