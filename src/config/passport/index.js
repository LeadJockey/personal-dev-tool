const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const fakeDatabase = require(path.join(__dirname, '..', '..', 'fakedatabase'));

const localStrategyConfig = {
  usernameField:'username',
  passwordField:'password',
  session:true
};

function userCheck(name, pwd, done){
  if(fakeDatabase.loginUser(name, pwd)){
    return done(null, { name:name });
  }else{
    return done(null, false, { message:'denied' });
  }
}

exports.setup = () =>{
  // serializeUser : 첫 로그인 요청때만 작동합니다.
  passport.serializeUser((user, done) =>{ // Strategy 성공 시 호출됨
    console.log('passport:serializeUser');
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  // deserializeUser : 모든 로그인 요청때에 작동합니다.
  passport.deserializeUser((user, done) =>{ // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    console.log('passport:deserializeUser');
    done(null, user); // 여기의 user가 req.user가 됨
  });
  passport.use('local', new LocalStrategy(localStrategyConfig, userCheck));
};
