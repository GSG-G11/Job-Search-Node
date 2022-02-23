const {filePathHandler, showErrorPage} = require('./handler/filePathHandler');
const {getAPI} = require('./handler/apiHandler');
const router = (req, res) => {
  if (req.statusCode === 404) {
    return showErrorPage(res);
  } else if (req.url.includes('search') && req.url.includes('location')) {
    return getAPI(req, res);
  } else {
    return filePathHandler(req, res);
  }
};

module.exports = router;
