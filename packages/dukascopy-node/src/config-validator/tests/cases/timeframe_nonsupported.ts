const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'xxxyyyzzz',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: [
    {
      actual: 'xxxyyyzzz',
      expected: 'tick, m1, m15, m30, h1, d1, mn1',
      message: "The 'timeframe' field does not match any of the allowed values."
    }
  ]
};

export { config, expectedOutput };
