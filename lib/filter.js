const { config } = require('../config')

const getNextDays = ({
  days = config.DAYS_FUTURE_VERIFICATIONS,
  list = []
} = {}) => {
  return list.slice(0, days)
}

const filterByHumidity = ({
  greaterThan,
  list = []
}) => list.filter(({ main }) => {
  return main.humidity > greaterThan
})

module.exports = {
  filter: {
    getNextDays,
    filterByHumidity
  }
}
