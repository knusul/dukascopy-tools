import { TimeframeType } from '../config/timeframes';
import { PriceType } from '../config/price-types';

export interface GenerateUrlsInput {
  instrument: string;
  timeframe: TimeframeType;
  startDate: Date;
  endDate: Date;
  priceType: PriceType;
}
