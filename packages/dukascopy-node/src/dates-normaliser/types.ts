import { TimeframeType } from '../config/timeframes';

export interface NormaliseDatesInput {
  instrument: string;
  startDate: Date;
  endDate: Date;
  timeframe: TimeframeType;
  utcOffset: number;
}
