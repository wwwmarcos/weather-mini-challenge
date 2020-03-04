const { filter } = require('../../lib')
const { data } = require('./sampleData')

const FIVE_DAYS = 5
const SEVENTY_PER_CENT = 70

describe('should filter data', () => {
  it('should filter the next n first days', () => {
    const { list } = data

    const nextFiveDays = filter.getNexFivetDays({
      list
    })

    const expectedFiveDays = [
      list[0][4],
      list[1][4],
      list[2][4],
      list[3][4],
      list[4][4]
    ]

    expect(nextFiveDays.length).toEqual(FIVE_DAYS)
    expect(nextFiveDays).toMatchObject(expectedFiveDays)
  })

  it('should filter by humidity', () => {
    const days = [
      { main: { humidity: 94 } },
      { main: { humidity: 70 } },
      { main: { humidity: 71 } },
      { main: { humidity: 21 } }
    ]

    const result = filter.filterByHumidity({
      greaterThan: SEVENTY_PER_CENT,
      list: days
    })

    expect(result.length).toEqual(2)

    expect(result).toMatchObject([
      { main: { humidity: 94 } },
      { main: { humidity: 71 } }
    ])

    expect(result).not.toMatchObject([
      { main: { humidity: 70 } },
      { main: { humidity: 21 } }
    ])
  })
})
