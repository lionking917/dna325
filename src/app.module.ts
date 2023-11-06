import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LookupsModule } from './lookups/lookups.module';
import { MongooseModule } from '@nestjs/mongoose';
import { dbConnection } from './config';

@Module({
  imports: [LookupsModule, MongooseModule.forRoot(dbConnection)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
