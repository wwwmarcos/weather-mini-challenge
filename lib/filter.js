const { date } = require('./date')

const DATE_PROPERTY = 'day'
const FIVE_DAYS = 5

const addDates = day => {
  const timestampDate = day.dt

  const finalDay = date
    .timestampToDate(timestampDate)
    .getDate()

  return {
    ...day,
    [DATE_PROPERTY]: finalDay
  }
}

const pickOneDateFromResults = (list, prop) => {
  const groupedByDay = list.reduce((grouped, item) => {
    const value = item[prop]
    grouped[value] = grouped[value] || {}
    grouped[value].selected = item
    return grouped
  }, {})

  return Object.keys(groupedByDay)
    .map(key => groupedByDay[key].selected)
}

const getNexFiveDays = ({
  list = []
} = {}) => {
  const listWithDates = list.map(addDates)

  const finalDates = pickOneDateFromResults(
    listWithDates,
    DATE_PROPERTY
  )

  return finalDates.slice(0, FIVE_DAYS)
}

const byHumidity = ({
  greaterThan,
  list = []
}) => list.filter(({ main }) => {
  return main.humidity > greaterThan
})

module.exports = {
  filter: {
    getNexFiveDays,
    byHumidity
  }
}
