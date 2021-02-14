/**
 * Takes auth token from the request header and verifies the token using jsonwebtoken
 * Note ** auth token is automatically sent in the requst via local storage **
 *
 * @param {request} req request being modified by the middleware
 * @param {response} res response being modified by the middleware
 * @param {middleware} next next middleware to be invoked on the request/response
 */
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  try {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) throw new Error();
    
    else {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded.user;
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: 'Token is not valid'
    });
  }
}

module.exports = authMiddleware;