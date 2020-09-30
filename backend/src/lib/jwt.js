const jwt = require('jsonwebtoken');

function sign(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d',
    }, (error, token) => { // Accepts a callback
      if (error) return reject(error);
      return resolve(token); // If no error resolve generated token
    });
  });
}

module.exports = {
  sign,
};
