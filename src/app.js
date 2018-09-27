const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Freemarker = require('freemarker.js');
const logger = require('morgan');
const cors = require('cors');
const fm = new Freemarker({
  viewRoot:path.join(__dirname,'view'),
  options:{}
});

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(logger('dev'));
app.use(cors());

app.get('/', (req, res) => res.json({ msg:'hello rest api' }));

app.get('/free', (req, res) => {
  fm.render('/index.ftl', {msg:'hit'}, (err, result, errout) => {
    res.send(!!err ? errout + err : result);
  });
});

app.listen(app.get('port'), () =>{
  console.log(`server started: listening on port : ${app.get('port')}`);
});
