const config = {
  instrument: 'eurusd',
  dates: { from: '2019-02-16', to: '2019-02-18' },
  timeframe: 'h1',
  volumes: true,
  utcOffset: 0,
  filterFlats: false,
  priceType: 'bid'
};

const expectedOutput = [
  [1550275200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550278800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550282400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550286000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550289600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550293200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550296800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550300400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550304000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550307600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550311200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550314800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550318400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550322000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550325600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550329200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550332800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550336400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550340000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550343600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550347200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550350800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550354400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550358000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550361600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550365200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550368800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550372400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550376000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550379600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550383200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550386800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550390400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550394000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550397600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550401200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550404800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550408400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550412000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550415600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550419200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550422800000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550426400000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550430000000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550433600000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550437200000, 1.12925, 1.12925, 1.12925, 1.12925, 0],
  [1550440800000, 1.12906, 1.12938, 1.12889, 1.12902, 2848.45],
  [1550444400000, 1.12904, 1.12959, 1.12893, 1.12948, 5216.6499]
];

export { config, expectedOutput };
