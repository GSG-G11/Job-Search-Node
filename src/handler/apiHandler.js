const url = require('url');
const axios = require('axios');
const config = require('./../config');
const decodeParams = require('./DecodeParams');

const getAPI = (req, res) => {
  const requestURL = url.parse(req.url);
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const {search, location, country = 'gb'} = decodedParams;

  const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${
    config.BASE_PARAMS
  }&app_id=${config.APP_ID}&app_key=${config.API_KEY}&what=${search}&where=${location}`;
  if (req.method === 'GET') {
    console.log('Get request to', targetURL);
    axios
      .get(targetURL)
      .then(response => {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(response.data));
        res.end();
      })
      .catch(error => {
        console.log(error);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(error));
        res.end();
      });
  }
};

module.exports = {getAPI};
