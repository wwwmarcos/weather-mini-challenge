const { message } = require('../../lib')

describe('message builder', () => {
  it('should build message without days', () => {
    const expected = 'You don\'t need an umbrella'
    const result = message.buildMessage([])
    expect(result).toEqual(expected)
  })

  it('should build message with one day', () => {
    const expected = 'You need an umbrella just on: Sunday'
    const result = message.buildMessage(['Sunday'])
    expect(result).toEqual(expected)
  })

  it('should build message with two days', () => {
    const expected = 'You should take an umbrella in these days: Saturday and Sunday'
    const result = message.buildMessage(['Saturday', 'Sunday'])
    expect(result).toEqual(expected)
  })

  it('should build message with multiple days', () => {
    const expected = 'You should take an umbrella in these days: Friday, Saturday and Sunday'
    const result = message.buildMessage(['Friday', 'Saturday', 'Sunday'])
    expect(result).toEqual(expected)
  })
})
