require('dotenv').config()

const config = {
  APP_ID: process.env.APP_ID,
  API_URL: 'http://api.openweathermap.org/data/2.5/forecast',
  CITY: 'Ribeirão Preto',
  DAYS_FUTURE_VERIFICATIONS: process.env.DAYS_FUTURE_VERIFICATIONS || 5
}

module.exports = {
  config
}
