const router = require('./router');

const {createServer} = require('http');

const PORT = process.env.PORT || 3000;
createServer(router).listen(PORT, () => console.log(`Server listening on port ${PORT}`));
