const express = require('express');
const path = require('path');
const router = express.Router();
const Freemarker = require('freemarker.js');
const fm = new Freemarker({
  viewRoot:path.join(__dirname, '..', '..', 'view'),
  options:{}
});

router.get('/', (req, res, next) =>{
  const session = req.session;
  res.locals.login = req.isAuthenticated();
  if(req.isAuthenticated()){
    fm.render('/test.ftl', { msg:'work service', name:session.passport.user.name }, (err, result, errout) =>{
      res.send(!!err ? errout + err:result);
    });
  }else{
    res.status(401).json({msg:'auth denied'})
  }
});

module.exports = router;
