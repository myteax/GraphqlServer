const { gql } = require("apollo-server");

const typeDefs = gql`
  type Users {
    id: Int!
    name: String!
    age: Int!
    sex: String!
    creditscore: Int!
  }

  type Query {
    GetUsers: [Users!]!
    GetUser(id: Int!): Users!
  }

  type Mutation {
    AddUser(name: String!, age: Int!, sex: String!, creditscore: Int!): Users!
    SubUser(id: Int!): Users!
    UpdateUser(
      id: Int!
      name: String!
      age: Int!
      sex: String!
      creditscore: Int!
    ): Users!
  }
`;

module.exports = { typeDefs };
