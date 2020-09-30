var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();


const User = require('../api/users/users.model');


module.exports = function (passport) {
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5050/api/v1/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const user = await User.query().findById('google_id');
        // If user exists in database
        if (user) {
          done(null, user);
        } else {
          const createdUser = await User.query().insert({
            google_id: profile.id,
            display_name: profile.displayName,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
          });
          done(null, createdUser);
        }
        return cb(user);
      } catch (error) {
        console.log(error);
      }
    }),
    passport.serializeUser((user, done) => {
      done(null, user.id);
    }),
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => done(err, user));
    }),
  );
};


