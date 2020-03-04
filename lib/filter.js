const { date } = require('./date')

const DATE_PROPERTY = 'date'

const addDates = day => {
  const timestampDate = day.dt

  const finalDate = date
    .timestampToDate(timestampDate)
    .toLocaleDateString('pt-BR')

  return {
    ...day,
    [DATE_PROPERTY]: finalDate
  }
}

const pickOneDateFromResults = (list, prop) => list.reduce((grouped, item) => {
  const value = item[prop]
  grouped[value] = grouped[value] || {}
  grouped[value].selected = item
  return grouped
}, {})

const getNexFivetDays = ({
  list = []
} = {}) => {
  const listWithDates = list.map(addDates)
  const groupedByDay = pickOneDateFromResults(
    listWithDates,
    DATE_PROPERTY
  )

  return Object.keys(groupedByDay)
    .map(date => date.selected)
}

const filterByHumidity = ({
  greaterThan,
  list = []
}) => list.filter(({ main }) => {
  return main.humidity > greaterThan
})

module.exports = {
  filter: {
    getNexFivetDays,
    filterByHumidity
  }
}
