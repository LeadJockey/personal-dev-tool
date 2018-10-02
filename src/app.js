const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');

const fakeDatabase = [];
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(__dirname));
app.use(session({
  secret: "some secret",
  resave: false,
  saveUninitialized: false
}));
app.use(logger('dev'));
app.use(cors());
app.use('/', require('./router'));
io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(app.get('port'), () =>{
  console.log(`server started: listening on port : ${app.get('port')}`);
});



