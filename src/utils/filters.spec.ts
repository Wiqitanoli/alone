import { describe, expect, it } from 'vitest'
import { dateFilter } from 'src/utils/filters'

describe('# Date filters', () => {
  it('should format date correctly', () => {
    let dateString = '2019-01-01 00:00:00'
    let result = dateFilter(dateString)

    expect(result).toBe('January 1')
  })
})
