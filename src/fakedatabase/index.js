const fakeDatabase = [
  {
    users:[
      {
        name:'shawn',
        pwd:'1234'
      },
      {
        name:'lukas',
        pwd:'1234'
      },
      {
        name:'levi',
        pwd:'1234'
      },
      {
        name:'kerry',
        pwd:'1234'
      },
      {
        name:'hue',
        pwd:'1234'
      },
      {
        name:'rich',
        pwd:'1234'
      },
      {
        name:'seahon',
        pwd:'1234'
      },
      {
        name:'shari',
        pwd:'1234'
      }
    ],
    teams:[]
  }
];
const users = fakeDatabase[0].users;
const teams = fakeDatabase[0].teams;

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

exports.getUserList = ()=>{
  return users.filter((user)=>user.name).map((user)=>({name:user.name}));
};

exports.addTeamMember = (members)=>{
  members.forEach((member)=>{teams.push(member)});
};

exports.getTeamList = ()=>{
  return teams;
};
