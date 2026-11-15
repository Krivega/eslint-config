import { describe, expect, it, vi } from 'vitest';

import { sum } from './sum';

describe('sum', () => {
  it.each([
    [1, 2, 3],
    [-2, 1, -1],
    [0, 0, 0],
  ])('adds %i and %i to get %i', (left, right, expected) => {
    expect(sum(left, right)).toBe(expected);
  });

  it('records calls with vi.fn', () => {
    const add = vi.fn(sum);

    expect(add(2, 3)).toBe(5);
    expect(add).toHaveBeenCalledExactlyOnceWith(2, 3);
  });
});
