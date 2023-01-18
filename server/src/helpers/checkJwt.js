const ApiError = require("../errors/ApiError");

module.exports = function (req) {
  const jwtToken = req.headers.authorization;

  if (!jwtToken) {
    throw ApiError.unauthorized();
  }
};