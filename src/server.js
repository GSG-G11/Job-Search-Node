const router = require('./router');
const config = require('./config');

const {createServer} = require('http');

createServer(router).listen(config.PORT, () =>
  console.log(`Server listening on port ${config.PORT}`)
);
