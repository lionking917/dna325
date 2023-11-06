import { Injectable } from '@nestjs/common';
import { Lookup } from './lookups.model';
import { Model } from 'mongoose';
import fetch from 'node-fetch';
import { InjectModel } from '@nestjs/mongoose';
import { ipWhoIs } from '../config';

@Injectable()
export class LookupsService {
  constructor(
    @InjectModel('Lookup') private readonly lookupModel: Model<Lookup>,
  ) {}

  async findOneLookup(ip: string): Promise<Lookup> {
    const lookup = await this.lookupModel.findOne({ ip });

    if (lookup) {
      return lookup;
    } else {
      const response = await fetch(`${ipWhoIs}/${ip}`);

      if (response.ok) {
        const json = await response.json();

        return await new this.lookupModel(json).save();
      } else {
        return null;
      }
    }
  }

  async deleteLookup(ip: string): Promise<Lookup> {
    return await this.lookupModel.findOneAndDelete({ ip });
  }
}
