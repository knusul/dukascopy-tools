import metaData from '../utils/instrument-meta-data/generated/instrument-meta-data.json';
import { InstrumentInitMetaData } from '../utils/instrument-meta-data/generate-init-meta';
import { StartDates } from '../utils/instrument-meta-data/min-start-date';

export type InstrumentMetaData = InstrumentInitMetaData & StartDates;

export const instrumentMetaData: Record<string, InstrumentMetaData> = metaData;
