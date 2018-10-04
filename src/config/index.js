exports.passport = require('./passport');
exports.session = {
  secret:"my-secret-session-id",
  resave:false,
  saveUninitialized:false,
  maxAge:1000 * 60 * 60
};
