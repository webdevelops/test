const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, config.secretKey);
    next();
    
  } catch (err) {
    res.status(401).json({
      message: 'Auth failed!'
    })
  }
}