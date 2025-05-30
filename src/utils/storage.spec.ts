import { beforeAll, describe, expect, it } from 'vitest'
import Storage from './storage'

describe('# Storage', () => {
  let DATA = { foo: 'bar' }
  let KEY = 'key'

  let storage = new Storage<typeof DATA>(KEY)

  beforeAll(() => {
    storage.remove()
  })

  it('should be called with correct key', () => {
    expect(storage.get()).toBeNull()
  })

  it('should be set value correctly', () => {
    storage.set(DATA)

    expect(storage.get()).toEqual(DATA)
  })

  it('should be remove correctly', () => {
    storage.remove()

    expect(storage.get()).toBeNull()
  })
})
