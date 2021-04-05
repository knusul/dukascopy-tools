import { TimeframeType } from '../config/timeframes';

export interface NormaliseInput {
  data: number[][];
  timeframe: TimeframeType;
  startTs: number;
  instrument: string;
  volumes: boolean;
}
