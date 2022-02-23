const env = require('env2')('./src/env.json');

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  APP_ID: process.env.APP_ID,
  API_KEY: process.env.API_KEY,
  BASE_URL: 'https://api.adzuna.com/v1/api/jobs',
  BASE_PARAMS: 'search/1?&results_per_page=20&content-type=application/json',
};

module.exports = config;
