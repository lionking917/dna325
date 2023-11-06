import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LookupsController } from './lookups.controller';
import { LookupsService } from './lookups.service';
import { LookupSchema } from './lookup.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Lookup', schema: LookupSchema }]),
  ],
  controllers: [LookupsController],
  providers: [LookupsService],
  exports: [LookupsService],
})
export class LookupsModule {}
