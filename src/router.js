const {filePathHandler, showErrorPage} = require('./handler/filePathHandler');
const router = (req, res) => {
  if (req.statusCode === 404) {
    return showErrorPage(res);
  } else {
    return filePathHandler(req, res);
  }
};

module.exports = router;
