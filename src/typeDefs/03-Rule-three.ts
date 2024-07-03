import { ApolloServer, gql } from "apollo-server";
import { GraphQLSchema } from "graphql";
// Rule #2: Always start with a high-level view of the objects
// and their relationships before you deal with specific fields.


export const typeDefs = gql`
  type Query {
    hello: String!
    car(id: ID!): Car!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }

  type Group  {
    Image
    [Car]
    [AutomaticGroupFeatures]
  }

  type AutomaticGroupFeatures {}

`;