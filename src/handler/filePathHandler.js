const path = require('path');
const fs = require('fs');
const {showErrorPage} = require('./ErrorPageHandler');

const filePathHandler = (req, res) => {
  //Get the file path from the request
  const filePath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //Get extension of the file
  const extName = path.extname(filePath);
  let contentType = 'text/html';

  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
    default:
      contentType = 'text/html';
      break;
  }

  //Render the public files into the server
  fs.readFile(filePath, (err, content) => {
    if (err) {
      showErrorPage(res);
    } else {
      res.writeHead(200, {'Content-Type': contentType});
      res.end(content, 'utf-8');
    }
  });
};
module.exports = {filePathHandler, showErrorPage};
