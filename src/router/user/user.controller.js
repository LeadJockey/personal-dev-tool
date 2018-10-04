const path = require('path');
const passport = require('passport');
const Freemarker = require('freemarker.js');
const fm = new Freemarker({
  viewRoot:path.join(__dirname, '..', '..', 'view', 'user'),
  options:{}
});

exports.loginFormat = (req, res, next) =>{
  const data = {
    msg:req.query.error || '',
    id:'John9000',
    pwd:"********"
  };
  fm.render('/loginForm.ftl', data, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
};
exports.login = passport.authenticate('local', {
  successRedirect:'/work',
  failureRedirect:'/user/login?error=denied'
});
exports.logout = (req, res, next) =>{
  req.logout();
  res.redirect('/');
};

// exports.loginCheck = passport.authenticate('local', {
//   successRedirect: '/user/login',
//   failureRedirect: '/user/login?error=denied'
// });

