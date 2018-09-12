const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const queries = require('./graphql/queries')
const mutations = require('./graphql/mutation')
// const subscriptions = require('./subscriptions')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
  }),
})
