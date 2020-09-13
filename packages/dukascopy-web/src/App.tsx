import React, { useState, useRef } from 'react';
import { instrumentList } from './instruments';
import { decompress, Timeframe, Config } from 'dukascopy-node';
import { AutoComplete, DatePicker, Select, Space, Layout } from 'antd';

const { Option } = AutoComplete;
const { RangePicker } = DatePicker;
const { Content } = Layout;

function toBuffer(ab: ArrayBuffer): Buffer {
  let buf = Buffer.alloc(ab.byteLength);
  let view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
}

const Complete: React.FC = () => {
  const [result, setResult] = useState(instrumentList);
  const handleSearch = (value: string) => {
    setResult(instrumentList.filter(({ id }) => id.indexOf(value) >= 0));
  };
  return (
    <AutoComplete
      style={{ width: 250 }}
      onSearch={handleSearch}
      placeholder="Instrument (eurusd, btcusd, etc.)"
      autoFocus
    >
      {result.map(({ id, name, description }) => (
        <Option key={id} value={description} title={description}>
          {description} <span style={{ color: 'gray', fontSize: 10 }}>{name}</span>
        </Option>
      ))}
    </AutoComplete>
  );
};

function App() {
  return (
    <Layout>
      <Content>
        <Space size={8} align="center">
          <Complete />
          <RangePicker />
          <Select style={{ width: 120 }} placeholder="Timeframe" showAction={['focus', 'click']}>
            <Option value={Timeframe.tick}>every tick</Option>
            <Option value={Timeframe.m1}>1 minute</Option>
            <Option value={Timeframe.m15}>15 minute</Option>
            <Option value={Timeframe.m30}>30 minutes</Option>
            <Option value={Timeframe.h1}>1 hour</Option>
            <Option value={Timeframe.d1}>1 day</Option>
            <Option value={Timeframe.mn1}>1 month</Option>
          </Select>
          <div
            onClick={() => {
              fetch('/api/historical')
                .then(d => d.json())
                .then(console.log);
              // fetch('./BID_candles_hour_1.bi5')
              //   .then(data => data.arrayBuffer())
              //   .then(res => {
              //     // const result = decompress({ buffer: res as Buffer, timeframe: 'h1' });
              //     // console.log(result);
              //     const buf = toBuffer(res);
              //     // console.log(buf);
              //     const result = decompress({ buffer: buf, timeframe: 'h1' });
              //     console.log(result);
              //   });
            }}
          >
            Test
          </div>
        </Space>
      </Content>
    </Layout>
  );
}

export default App;
