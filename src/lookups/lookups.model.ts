import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Lookup extends Document {
  @Prop()
  ip: string;

  @Prop()
  success: boolean;

  @Prop()
  type: string;

  @Prop()
  continent: string;

  @Prop()
  continent_code: string;

  @Prop()
  country: string;

  @Prop()
  country_code: string;

  @Prop()
  region: string;

  @Prop()
  region_code: string;

  @Prop()
  city: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  is_eu: boolean;

  @Prop()
  postal: string;

  @Prop()
  calling_code: string;

  @Prop()
  capital: string;

  @Prop()
  borders: string;

  @Prop({ type: Object })
  flag: {
    img: string;
    emoji: string;
    emoji_unicode: string;
  };

  @Prop({ type: Object })
  connection: {
    asn: number;
    org: string;
    isp: string;
    domain: string;
  };

  @Prop({ type: Object })
  timezone: {
    id: string;
    abbr: string;
    is_dst: boolean;
    offset: number;
    utc: string;
    current_time: string;
  };

  @Prop({ type: Object })
  currency: {
    name: string;
    code: string;
    symbol: string;
    plural: string;
    exchange_rate: number;
  };

  @Prop({ type: Object })
  security: {
    anonymous: boolean;
    proxy: boolean;
    vpn: boolean;
    tor: boolean;
    hosting: boolean;
  };
}

export const UserModel = SchemaFactory.createForClass(Lookup);
