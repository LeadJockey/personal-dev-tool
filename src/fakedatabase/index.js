const fakeDatabase = [
  {
    users:[
      {
        name:'shawn',
        pwd:'1234'
      }
    ]
  }
];
const users = fakeDatabase[0].users;

function isUser(){
  return users.filter((user)=>user.name === name).length === 0;
}

exports.createUser = (name, pwd) =>{
  if(isUser()){
    return false;
  }else{
    users.push({
      name:name,
      pwd:pwd
    });
    return true;
  }
};
exports.loginUser = (name, pwd) =>{
  return users.filter((user)=>(user.name === name && user.pwd === pwd)).length > 0;
};
