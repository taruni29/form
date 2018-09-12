const
{
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')
const {
  userType,
  userInput
} = require('../types/signup')
const signupController = require('../controllers/signupController')
const { catchErrors } = require('../../errorhandlers');

var db=require("../../db.js")

exports.signUp = {
  type: userType,
    args: {
      firstName:{
        type : GraphQLString
      },
      lastName:{
        type : GraphQLString
      },
      email: {
         type: GraphQLString,
         description: 'email of the user.'
      },
      userName: {
         type: GraphQLString,
         description: 'User name of the user.'
      },
      password: {
         type: GraphQLString,
         description: 'Password of the User.'
      },
      contactNumber:{
        type: GraphQLString
      },
    },
    resolve:catchErrors(signupController.signUp)
}
exports.signIn = {
  type : userType,
  args : {
    userName : {
      type : GraphQLString,
      description : 'userName.'
    },
    password : {
      type : GraphQLString,
      description : 'password of the user'
    },
  },
  resolve : catchErrors(signupController.signIn)
}
