const
{
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} = require('graphql')
const {
  userType
} = require('../types/signup')
const signupController = require('../controllers/signupController')
const { catchErrors } = require('../../errorhandlers');

var db=require("../../db.js");

exports.listUsers= {
  type:  new GraphQLList(userType),
    args: {
      limit: {
        type: GraphQLInt
      }
    },
    resolve:catchErrors(signupController.listUsers)
}



exports.getUserById= {
  type:  userType,
      args:{
      _id: {
        type: GraphQLID
      }
    },
    resolve:catchErrors(signupController.getUserById)
}
