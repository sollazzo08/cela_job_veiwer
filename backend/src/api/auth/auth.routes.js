const express = require('express');
const yup = require('yup');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('../../lib/jwt');
const User = require('../users/users.model');


const router = express.Router();

const schema = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .required(),
  email: yup
    .string()
    .trim()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .max(100)
    .matches(/[^A-za-z0-9]/)
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    .matches(/[0-9]/)
    .required(),
});


router.post('/signup', async (req, res, next) => {
  // Get the users input.
  const { username, email, password } = req.body;
  try {
    const createUser = { username, email, password };
    await schema.validate(createUser, { abortEarly: false });
    // Query existing users email address from database.
    const existingUser = await User.query().where({ email }).first();
    // Check email against the database.
    if (existingUser) {
      const error = new Error('Email in use.');
      res.status(403);
      throw error;
    }
    // TODO: get rounds from config
    // Bcrypt is asyncronous, we want to await the hash because it takes compute cycles
    const hashedPassword = await bcrypt.hash(password, 12);
    const insertedUser = await User.query().insert({
      username,
      email,
      password: hashedPassword,
    });
    delete insertedUser.password;
    const payload = {
      id: insertedUser.id,
      username,
      email,
    };
    const token = await jwt.sign(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/signin', async (req, res, next) => {
  // Get the users input.
  const { username, email, password } = req.body;
  try {
    await schema.validate({
      username,
      email,
      password,
    }, { abortEarly: false });
    // Query existing users email address from database.
    const user = await User.query().where({ email }).first();
    // If user doesnt exists then invalid login
    if (!user) {
      const error = new Error('User not found');
      res.status(403);
      throw error;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      const error = new Error('Invalid Login.');
      res.status(401);
      throw error;
    }
    // If the user is in database and has valid password their logged in.
    // In this case we generate a token.
    const payload = {
      id: user.id,
      name: user.name,
      email,
    };
    const token = await jwt.sign(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
