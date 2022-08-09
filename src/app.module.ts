import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from './config/keys';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { TankersModule } from './modules/tankers/tankers.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI,{
      dbName: config.db
    }),
    UsersModule,
    CompaniesModule,
    TankersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
