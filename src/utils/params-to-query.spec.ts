import { describe, expect, it } from 'vitest'
import params2query from './params-to-query'

describe('# params2query', () => {
  it('should return query string given an object', () => {
    let params = {
      foo: 'bar',
      foo2: 'bar2',
    }

    let result = params2query(params)

    expect(result).toEqual('foo=bar&foo2=bar2')
  })
})
