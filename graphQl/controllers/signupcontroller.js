var db=require("../../db.js");
var crypto = require('crypto')
require('dotenv').load();
const algorithm = process.env.algorithm;
const password = process.env.password;
const from = process.env.from;
var colors = require('colors');

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}


// List all users
exports.listUsers = async (root, {limit}) => {

  limit= limit || 30;

  let user = await db.User.find().skip(0).limit(parseInt(limit));
  return user;
}

// Find user by Id
exports.getUserById = async(root,{_id}) =>{
var updatedUser = await db.User.findById({_id:_id})
updatedUser.message = 'User Details found'
updatedUser.error = false
return Promise.resolve(updatedUser);
}

//signUp
exports.signUp = async (root,{firstName,lastName,userName,email,password,contactNumber}) => {
    email= email.toLowerCase();
    var reg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (email == null){
        return ('enter valid email id')
      }
      else {
        var user = await db.User.findOne({userName: {$regex:  new RegExp('^' + userName+ '$', 'i')}})
        if(user){
        return Promise.resolve({message:'Username already exist',error:true});
        }
        else {
          var user = await db.User.findOne({'email': email})
          if(user){
            return Promise.resolve({message:'Email already exist',error: true});
          }
          else {
              var newUser = new db.User({
                firstName:firstName,lastName:lastName, userName: userName,email : email, password: encrypt(password),contactNumber:contactNumber
              })
              var user =  await  newUser.save()
              user.message='User saved'
              user.error=false
              return  Promise.resolve(user);
            }
          }
        }
      }
      //signIn
      exports.signIn = async (root,{userName,password}) =>{

        var user = await db.User.findOne({'userName' : userName})
            if(user == undefined) {
              return Promise.reject('Please enter valid password');
            }
            else{
              if(user.password ==(password = encrypt(password))){
                if(user.isDelete == true){
                  return Promise.reject('Your Account is blocked');
                }
                else{
                 return Promise.resolve(user);
                 console.log("user")
                }
              }
              else{
                return Promise.reject('Invalid username or password');
              }
            }
      }
