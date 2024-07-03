import { ApolloServer, gql, GraphQLSchemaModule } from "apollo-server";
import { GraphQLSchema } from "graphql";

// Rule #2: Always start with a high-level view of the objects
// and their relationships before you deal with specific fields.

// const { ApolloServer, gql } = require("apollo-server");

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

  interface Group {
    Image
    [GroupMembership]
  }

  type ManualGroup implements Group {
    Image
    [Car]
  }

  type AutomaticGroup implements Group {
    Image
    [Car]
    [AutomaticGroupFeatures]
  }

  type AutomaticGroupFeatures {}
`
;