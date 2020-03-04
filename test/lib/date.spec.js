const { date } = require('../../lib')

describe('date operations', () => {
  it('should get day of the week', () => {
    const dates = {
      wednesday: 1583290800
    }

    const expectedWednesday = date.getDayOfTheWeek(dates.wednesday)
    expect(expectedWednesday).toEqual('Wednesday')
  })
})
