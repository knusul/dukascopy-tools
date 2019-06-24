const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'timeframe' field is required!"]
};

const testName = 'Should return false when timeframe key does not exist';

const testGroup = 'Timeframe';

export { testName, testGroup, config, expectedOutput };
