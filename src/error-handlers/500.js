function errorHandler500(err, req, res, next) {
  console.error(err);
  res.status(500).send('Server Error');
}
  
module.exports = errorHandler500;

