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

function isUser(name){
  return users.filter((user)=>(user.name === name)).length > 0;
}

exports.createUser = (name, pwd) =>{
  console.log(fakeDatabase);
  if(!isUser(name)){
    users.push({
      name:name,
      pwd:pwd
    });
    console.log(users.length);
  }
  return isUser(name);
};

exports.loginUser = (name, pwd) =>{
  return users.filter((user)=>(user.name === name && user.pwd === pwd)).length > 0;
};
