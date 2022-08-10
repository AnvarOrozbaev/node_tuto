import { printPrimeNumbers } from '../color-number';

describe('printPrimeNumbers', () => {
  it('return', () => {
    expect(
      new printPrimeNumbers(['first', 'second', '5', '10']).init(),
    ).toEqual([5, 7]);
  });
  it('getRange', () => {
    expect(new printPrimeNumbers().getRange(['5', '10'])).toEqual([5, 10]);
  });
  it('checkRangeLength', () => {
    expect(new printPrimeNumbers().checkRangeLength([5, 10])).toEqual([5, 10]);
  });
  it('checkRangeLength', () => {
    expect(new printPrimeNumbers().checkRangeLength([5, 10])).toEqual([5, 10]);
  });
});
