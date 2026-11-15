import { sum } from '../sum';

describe('sum with globals', () => {
  test('supports global test, expect and vi', () => {
    const add = vi.fn(sum);

    expect(add(4, 6)).toBe(10);
    expect(add).toHaveBeenCalledExactlyOnceWith(4, 6);
  });
});
