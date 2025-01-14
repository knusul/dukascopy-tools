const input = {
  instrument: 'eurusd',
  startDate: new Date('1970-01-01T00:00:00.000Z'),
  endDate: new Date('2019-02-02T00:00:00.000Z'),
  timeframe: 'tick'
};

const expectedOutput = [new Date('2007-01-01T00:00:05.163Z'), new Date('2019-02-02T00:00:00.000Z')];

export { input, expectedOutput };
