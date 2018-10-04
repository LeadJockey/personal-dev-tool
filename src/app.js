const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const config = require('./config');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('port', process.env.PORT || 4000);

config.passport.setup();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(session(config.session));
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
app.use(logger('dev'));
app.use(cors());
app.use('/', require('./router'));
app.use('/user', require('./router/user'));
app.use('/work', require('./router/work'));
app.use('*', (req, res) => res.status(404).json({ msg:'page not found' }));
// app.use('*', require('./router/user'));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(app.get('port'), () =>{
  console.log(`server started: listening on port : ${app.get('port')}`);
});



