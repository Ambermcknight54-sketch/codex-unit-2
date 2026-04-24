import { describe, it } from 'vitest'
import access from '../../lesson-04-js-objects/level-05/access.js'

describe('lesson-04 — level-05 access', () => {
  it('exports a primitive value (string or number) accessed via dot notation', () => {
    if (typeof access === 'undefined') {
      throw new Error('Helpful Hint: Level 05 should default-export a value demonstrating dot-notation access (e.g., obj.name).')
    }

    if (!(typeof access === 'string' || typeof access === 'number')) {
      throw new Error('Helpful Hint: Level 05 should export a simple string or number value accessed from an object.')
    }
  })
})
  });
});
