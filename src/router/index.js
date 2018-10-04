const express = require('express');
const path = require('path');
const router = express.Router();
const Freemarker = require('freemarker.js');
const fm = new Freemarker({
  viewRoot:path.join(__dirname, '..', 'view'),
  options:{}
});

router.get('/', (req, res, next) =>{
  fm.render('/index.ftl', { msg:'work support tool' ,isLogin:req.isAuthenticated()}, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
});

module.exports = router;
