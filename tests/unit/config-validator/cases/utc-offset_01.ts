const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'utcOffset' field is required!"]
};

const testName = 'Should return false when utcOffset key does not exist';

const testGroup = 'UTC Offset';

export { testName, testGroup, config, expectedOutput };
