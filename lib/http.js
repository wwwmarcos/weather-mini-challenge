const { config } = require('../config')
const axios = require('axios')

const fetchData = async () => {
  return axios({
    method: 'GET',
    url: config.API_URL,
    params: {
      appid: config.APP_ID,
      q: config.CITY
    }
  })
}

module.exports = {
  http: {
    fetchData
  }
}
