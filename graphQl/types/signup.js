const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql')



exports.userType = new GraphQLObjectType({
  name: 'userType',
  description: 'definition of User type',
    fields: () => ({
      _id: {
        type: GraphQLID
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      userName: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      createdDate: {
        type: GraphQLString,
        description: 'created  date.'
      },
      message:{
        type: GraphQLString
      },
      error:{
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
      contactNumber: {
        type: GraphQLString
      }

    })
})

exports.userInput = new GraphQLInputObjectType({
  name: 'userInput',
  description: 'definition of User input',
    fields: () => ({
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      userName: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      createdDate: {
        type: GraphQLString,
        description: 'created  date.'
      },
      password: {
        type: GraphQLString
      },
      contactNumber: {
        type: GraphQLString
      }
  })
})
