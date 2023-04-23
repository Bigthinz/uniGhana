import { add } from './sample';

describe('add test', () => {
  it('should return 2', () => {
    const actual = add(1, 1);
    expect(actual).toBe(2);
  });
});
