const jwt = require('jsonwebtoken');
let secret = process.env.SECRET_KEY;
const auth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

    if (!token) {
    res.status(401).json({status: 'Error', result: 'No token provided'});
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).json({status: 'Error', result: 'No token provided'});
      } else {
        next();
      }
    });
  }
}
module.exports = auth;