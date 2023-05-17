function validator(req, res, next) {
  const name = req.query.name;
  if (!name) {
    res.status(500).send('Name is missing');
  } else {
    next();
  }
}
  
module.exports = validator;