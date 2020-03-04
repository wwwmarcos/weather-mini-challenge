const { http, filter, date, message } = require('./lib')
const { config } = require('./config')

const fetchData = async () => {
  return http({
    method: 'GET',
    url: config.API_URL,
    params: {
      appid: config.APP_ID,
      q: config.CITY
    }
  })
}

const start = async () => {
  try {
    const { data: { list } } = await fetchData()

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
