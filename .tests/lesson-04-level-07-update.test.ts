import { describe, it } from 'vitest'
import updated from '../lesson-04-js-objects/level-07/update.js'

describe('lesson-04 — level-07 update properties', () => {
  it('exports an object', () => {
    expect(updated).toBeDefined();
    expect(typeof updated).toBe('object');
  });

  it('has numeric age property', () => {
    expect(typeof updated.age).toBe('number');
  });

  it('age is not zero', () => {
    expect(updated.age).not.toBe(0);
  })
})
  });
});
