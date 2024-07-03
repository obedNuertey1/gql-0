import { ApolloServer, gql } from "apollo-server";
import { GraphQLSchema } from "graphql";

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

  type Group {
    id: ID!
    featureSet: GroupFeatureSet!
    cars: [Car!]!
    name: String!
    imageId: ID!
    bodyHtml: String!
  }

  type GroupFeatureSet {
    features: [GroupFeatures!]!
    applyFeaturesSeparately: Boolean!
  }

  type GroupFeature {
    feature: String!
  }
`;