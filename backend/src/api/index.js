const express = require('express');
const passpost = require('passport');

// Top level API routes
const states = require('./states/states.routes');
const users = require('./users/users.routes');
const auth = require('./auth/auth.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'This is the root of your API!',
  });
});

router.use('/states', states);
router.use('/users', users);
router.use('/auth', auth);


module.exports = router;
