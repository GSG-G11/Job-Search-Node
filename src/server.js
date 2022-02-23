const router = require('./router');
const config = require('./config');

console.log(config.NODE_ENV, config.HOST);
const {createServer} = require('http');

createServer(router).listen(config.PORT, config.HOST, () =>
  console.log(`Server listening on port ${config.PORT}`)
);
