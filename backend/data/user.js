const bcrypt = require("bcrypt")

const Users = [
    {name:"hello",email:"hello@gmail.com",password:bcrypt.hashSync("152545454", 10),isAdmin:true},
    {name:"yellow",email:"yellow@gmail.com",password:bcrypt.hashSync("152545454", 10)},
    {name:"red",email:"red@gmail.com",password:bcrypt.hashSync("454551",10)}

];


module.exports = Users;
