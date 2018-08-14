import { shortenNumber  } from './SumOutput.Container';

describe('SumOutput', () => {
  it('should shorten numbers', () => {
    expect(shortenNumber(1)).toEqual('1');
    expect(shortenNumber(1e3)).toEqual('1K');
    expect(shortenNumber(1e6)).toEqual('1M');
    expect(shortenNumber(1e9)).toEqual('1G');
    expect(shortenNumber(1e12)).toEqual('1T');
  
    expect(shortenNumber(1.1e3)).toEqual('1.1K');
    expect(shortenNumber(1.156e6)).toEqual('1.16M');
    expect(shortenNumber(1.996e9)).toEqual('2G');
    expect(shortenNumber(1.151e12)).toEqual('1.15T');
  });
});