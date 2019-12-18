const jsonwebToken = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'unAuthorized' });
  try {
    const decode = jsonwebToken.decode(token, config.get('security'));
    req.user = decode.user;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ msg: 'token not valid' });
  }
};
