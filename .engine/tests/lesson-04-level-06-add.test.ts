import { describe, it } from 'vitest'
import added from '../../lesson-04-js-objects/level-06/add.js'

describe('lesson-04 — level-06 add properties', () => {
  it('exports an object with at least one own property added', () => {
    if (added === null || typeof added !== 'object') {
      throw new Error('Helpful Hint: Level 06 should default-export an object showing added properties (use dot notation to add).')
    }

    const keys = Object.keys(added)
    if (keys.length === 0) {
      throw new Error('Helpful Hint: Level 06 should add at least one property to the exported object (e.g., obj.age = 30).')
    }
  })
})
  });
});
