function errorHandler404(req, res) {
  res.status(404).send('Not Found');
}
  
module.exports = errorHandler404;