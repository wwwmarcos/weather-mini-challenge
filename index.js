const { http, filter, date, message } = require('./lib')
const { config } = require('./config')

const start = async () => {
  try {
    const { data: { list } } = await http.fetchData()

    const nextFiveDays = filter.getNexFiveDays({ list })

    const umbrellaDays = filter.byHumidity({
      greaterThan: config.HUMIDITY_LIMIT,
      list: nextFiveDays
    })

    const daysOfWeek = umbrellaDays
      .map(day => day.dt)
      .map(date.getDayOfTheWeek)

    const output = message.buildMessage(daysOfWeek)

    console.log(output)
  } catch (error) {
    console.log('Fail executing script :|', error)
  }
}

start()
