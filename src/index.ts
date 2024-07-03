import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typeDefs/00-Naive-Schema";
import {v4} from 'uuid'
import db, { categories, products, reviews } from "./initialData";
import { Query } from "./Query";
import { Category } from "./Category";
import { Product } from "./Product";
import { Review } from "./Review";
import { Mutation } from "./Mutation";



const randomUID = v4;

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Category,
        Product,
        Mutation
    },
    cors: {origin: '*'},
    context: {
        categories,
        products,
        reviews,
        db,
        randomUID
    }
});

server.listen().then(({url})=>{
    console.log(`🚀  Server ready at ${url}`)
})