const DAYS_MAPPING = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const timestampToDate = timestamp =>
  new Date(timestamp * 1000)

const getDayOfTheWeek = timestamp => {
  const date = timestampToDate(timestamp)
  const dayOfTheWeek = DAYS_MAPPING[date.getDay()]
  return dayOfTheWeek
}

module.exports = {
  date: {
    getDayOfTheWeek,
    timestampToDate
  }
}
