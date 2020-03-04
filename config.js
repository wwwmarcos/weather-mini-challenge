require('dotenv').config()

const config = {
  APP_ID: process.env.APP_ID,
  API_URL: 'http://api.openweathermap.org/data/2.5/forecast',
  CITY: process.env.CITY || 'Ribeirão Preto',
  DAYS_FUTURE_VERIFICATIONS: process.env.DAYS_FUTURE_VERIFICATIONS || 5,
  HUMIDITY_LIMIT: process.env.HUMIDITY_LIMIT || 70
}

module.exports = {
  config
}
