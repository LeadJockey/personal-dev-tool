const path = require('path');
const passport = require('passport');
const fakeDatabase = require(path.join(__dirname, '..', '..', 'fakedatabase'));
const Freemarker = require('freemarker.js');
const fm = new Freemarker({
  viewRoot:path.join(__dirname, '..', '..', 'view', 'user'),
  options:{}
});

exports.loginForm = (req, res, next) =>{
  const data = {
    msg:req.query.error || '',
    id:'John9000',
    pwd:"********"
  };
  fm.render('/loginForm.ftl', data, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
};
exports.signUpForm = (req, res, next)=>{
  fm.render('/signUpForm.ftl', {}, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
};
exports.signUp = (req, res, next)=>{
  console.log(req.body.username, req.body.password);
  console.log('sign in ',fakeDatabase.createUser(req.body.username, req.body.password));
  if(fakeDatabase.createUser(req.body.username, req.body.password)){
    res.redirect('/');
  }else{
    res.redirect('/user');
  }
};
exports.login = passport.authenticate('local', {
  successRedirect:'/work',
  failureRedirect:'/user?error=denied'
});
exports.logout = (req, res, next) =>{
  req.logout();
  res.redirect('/');
};
