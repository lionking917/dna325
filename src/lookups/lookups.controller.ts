import { Controller, Get, Delete, Param } from '@nestjs/common';
import { LookupsService } from './lookups.service';
import { Lookup } from './lookups.model';

@Controller('lookups')
export class LookupsController {
  constructor(private readonly lookupsService: LookupsService) {}

  @Get(':ip')
  findOneLookup(@Param('ip') ip): Promise<Lookup> {
    return this.lookupsService.findOneLookup(ip);
  }

  @Delete(':ip')
  deleteBook(@Param('ip') ip): Promise<Lookup> {
    return this.lookupsService.deleteLookup(ip);
  }
}
