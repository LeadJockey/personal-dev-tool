const express    = require('express');
const path       = require('path');
const router     = express.Router();
const Freemarker = require('freemarker.js');
const fm = new Freemarker({
  viewRoot:path.join(__dirname, '..','view'),
  options:{}
});

router.get('/', (req, res) =>{
  fm.render('/index.ftl', { msg:'hello freemarker' }, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
});

module.exports = router;
