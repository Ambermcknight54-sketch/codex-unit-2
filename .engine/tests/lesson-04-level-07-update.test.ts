import { describe, it } from 'vitest'
import updated from '../../lesson-04-js-objects/level-07/update.js'

describe('lesson-04 — level-07 update properties', () => {
  it('exports an object with an updated `age` property (number and changed)', () => {
    if (updated === null || typeof updated !== 'object') {
      throw new Error('Helpful Hint: Level 07 should default-export an object after updating properties (use dot notation to update).')
    }

    if (typeof updated.age !== 'number') {
      throw new Error('Helpful Hint: Level 07 should export an object with a numeric `age` property (e.g., obj.age = 1).')
    }

    if (updated.age === 0) {
      throw new Error('Helpful Hint: Ensure you update the initial `age` value (do not leave it as 0).')
    }
  })
})
  });
});
