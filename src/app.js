const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const router = require('./router');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(logger('dev'));
app.use(cors());

app.use('/', router);

app.listen(app.get('port'), () =>{
  console.log(`server started: listening on port : ${app.get('port')}`);
});
