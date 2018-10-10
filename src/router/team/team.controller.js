const path = require('path');
const fakeDatabase = require(path.join(__dirname, '..', '..', 'fakedatabase'));
const Freemarker = require('freemarker.js');
const fm = new Freemarker({
  viewRoot:path.join(__dirname, '..', '..', 'view', 'team'),
  options:{}
});

exports.addForm = (req, res, next) =>{
  const data = {userList:fakeDatabase.getUserList()};
  fm.render('/addForm.ftl', data, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
};
exports.add = (req, res, next) =>{
  const memberList = Object.entries(req.body).map(member=>member[1]);
  fakeDatabase.addTeamMember(memberList);
  res.redirect('/team/list');
};

exports.teamList = (req, res, next)=>{
  const data = {memberList:fakeDatabase.getTeamList()};
  fm.render('/teamList.ftl', data, (err, result, errout) =>{
    res.send(!!err ? errout + err:result);
  });
};
