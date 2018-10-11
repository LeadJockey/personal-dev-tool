const express = require('express');
const path = require('path');
const router = express.Router();
const Freemarker = require('freemarker.js');
const fm = new Freemarker({
  viewRoot:path.join(__dirname, '..', '..', 'view'),
  options:{}
});

router.get('/', (req, res, next) =>{
  fm.render('/service/index.ftl', { msg:'service page', name:req.session.passport.user.name }, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
});

module.exports = router;
