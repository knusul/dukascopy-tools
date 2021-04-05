const config = {
  instrument: null,
  dates: { from: '2019-01-151', to: '2019-0122' },
  timeframe: 'd1z',
  volumes: 'true',
  utcOffset: '-1440'
};

const expectedOutput = [
  {
    actual: null,
    expected: undefined,
    message: "The 'instrument' field is required."
  },
  {
    actual: '2019-01-151',
    expected: undefined,
    message: "The 'dates.from' field must be a Date."
  },
  {
    actual: '2019-0122',
    expected: undefined,
    message: "The 'dates.to' field must be a Date."
  },
  {
    actual: 'd1z',
    expected: 'tick, m1, m15, m30, h1, d1, mn1',
    message: "The 'timeframe' field does not match any of the allowed values."
  },
  {
    actual: '-1440',
    expected: undefined,
    message: "The 'utcOffset' field must be a number."
  },
  {
    actual: 'true',
    expected: undefined,
    message: "The 'volumes' field must be a boolean."
  }
];

export { config, expectedOutput };
