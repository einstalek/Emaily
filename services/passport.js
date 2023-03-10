const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require(__dirname + '/../config/keys');

const mongoose = require("mongoose");
const { use } = require('passport');
const User = mongoose.model('users');

passport.serializeUser( async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleID: profile.id});
    if (existingUser) {
      done(null, existingUser);
    } else {
      const user = await User({googleID: profile.id, 
        fullName: profile.displayName, 
        photoURL: profile.photos[0].value}).save();
      done(null, user);
    }
  }));