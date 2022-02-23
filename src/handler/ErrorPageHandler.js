function showErrorPage(response) {
  response.writeHead(404, {'Content-Type': 'text/html'});
  response.end('<h1>Server Error, Contact the Administrator</h1>');
}

module.exports = {showErrorPage};
