// import {ApolloServer, gql} from "apollo-server";
// import { DocumentNode } from "graphql";

// export const typeDefs = gql`
//   type Query {
//     hello: String!
//     car(id: ID!): Car!
//   }

//   type Car {
//     id: ID!
//     color: String!
//     make: String!
//   }

//   interface Group {
//     id: ID!
//     name: String!
//     imageId: ID!
//     bodyHtml: String!
//     memberships: [GroupMembership!]!
//   }

//   type ManualGroup implements Group {
//     id: ID!
//     name: String!
//     imageId: ID!
//     bodyHtml: String!
//     memberships: [GroupMembership!]!
//   }

//   type AutomaticGroup implements Group {
//     id: ID!
//     name: String!
//     imageId: ID!
//     bodyHtml: String!
//     memberships: [GroupMembership!]!
//     features: [AutomaticGroupFeatures!]!
//     applyFeaturesSeparately: Boolean!
//   }

//   type AutomaticGroupFeatures {
//     column: String!
//   }

//   type GroupMembership {
//     groupId: ID!
//     carId: ID!
//   }
// `;


// // import {ApolloServer} from 'apollo-server';
// // import * as Graphs from 'graphql';

// // const CarType = new Graphs.GraphQLObjectType({
// //   name: 'Car',
// //   fields: {
// //     id: {type: Graphs.GraphQLID!},
// //     color: {type: Graphs.GraphQLString},
// //     make: {type: Graphs.GraphQLString}
// //   }
// // });

// // // Define the Group interface
// // const GroupInterface = new Graphs.GraphQLInterfaceType({
// //   name: 'Group',
// //   fields: {
// //     image: {type: Graphs.GraphQLString},
// //     cars: {type: new Graphs.GraphQLList(CarType)}
// //   },
// //   resolveType(value){
// //     if(value.features){
// //       return AutomaticGroupType;
// //     }
// //     return ManualGroupType;
// //   }
// // });

// // // Define the ManualGroup type
// // const ManualGroupType = new Graphs.GraphQLObjectType({
// //   name: 'ManualGroup',
// //   interfaces: [GroupInterface],
// //   fields: {
// //     image: {type: Graphs.GraphQLString},
// //     cars: {type: new Graphs.GraphQLList(CarType)}
// //   }
// // });

// // // Define the AutomaticGroupFeatures type
// // const AutomaticGroupFeatureType = new Graphs.GraphQLObjectType({
// //   name: 'AutomaticGroupFeature',
// //   fields: {
// //     featureName: {type: Graphs.GraphQLString}
// //   }
// // })

// // // Define the AutomaticGroupFeatures type
// // const AutomaticGroupType = new Graphs.GraphQLObjectType({
// //   name: 'AutomaticGroup',
// //   interfaces: [GroupInterface],
// //   fields: {
// //     image: {type: Graphs.GraphQLString},
// //     cars: {type: new Graphs.GraphQLList(CarType)},
// //     features: {type: new Graphs.GraphQLList(AutomaticGroupFeatureType)}
// //   }
// // });

// // // Define the Query 
// // const QueryType = new Graphs.GraphQLObjectType({
// //   name: 'Query',
// //   fields: {
// //     hello: {type: Graphs.GraphQLString},
// //     car: {
// //       type: CarType,
// //       args: {
// //         id: {type: Graphs.GraphQLID}
// //       }
// //     }
// //   }
// // })

// // export const typeDefs = new Graphs.GraphQLSchema({
// //   query: QueryType,
// //   types: [CarType, ManualGroupType, AutomaticGroupType, AutomaticGroupFeatureType]
// // })

import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
    hello: String
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    review(productId: ID!): [Review!]
    reviewWithId(id: ID!): Review!
  }

  type Mutation{
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput): Boolean!
    updateProduct(id: ID!, input: UpdateProductInput): Boolean!
    updateReview(id: ID!, input: UpdateReviewInput): Boolean!
  }

  type Product {
    id: String
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    comment: String!
    rating: Int!
    date: String!,
    productId: String!
  }

  input ProductsFilterInput{
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput{
    name: String!
  }

  input UpdateCategoryInput{
    name: String!
  }

  input AddProductInput{
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryName: String!
  }

  input UpdateProductInput{
    name: String
    description: String
    quantity: Int
    image: String
    price: Float
    onSale: Boolean
    categoryName: String
  }

  input AddReviewInput{
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }

  input UpdateReviewInput{
    title: String
    comment: String
    rating: Int
    productId: String
  }

  input DeleteCategoryInput{
    id: ID!
  }
  # input ReviewsFilterInput{
  #   rating: Int
  # }

`