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
    cars(skip: Int!, take: Int!): [Car!]!
    name: String!
    image: Image!
    bodyHtml: String!
  }

  type Image {
    id: ID!
    url: String!
  }

  type GroupFeatureSet {
    features: [GroupFeatures!]!
    applyFeaturesSeparately: Boolean!
  }

  type GroupFeature {
    feature: String!
  }
`;