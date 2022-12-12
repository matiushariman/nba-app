import { convertDateToEt } from '../dateUtils';

describe('utils/dateUtils', () => {
  it('should return date in ET', () => {
    expect(convertDateToEt({ date: '2022-12-11T01:30:00Z' })).toEqual(
      'December 10, 2022 8:30 PM'
    );
  });
});
