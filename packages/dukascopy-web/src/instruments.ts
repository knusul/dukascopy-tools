import { instrumentMetaData } from 'dukascopy-node';

export const instrumentList = Object.keys(instrumentMetaData).map(instrument => {
  const { name, description } = instrumentMetaData[instrument];

  return {
    id: instrument,
    name,
    description
  };
});
