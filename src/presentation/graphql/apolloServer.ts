import { TrnsactionServices } from "@/data/services";
import { TransactionPostgreRepository } from "@/infra/repositories";
import { resolversGraphQL } from "./resolvers";
import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import path from 'path';


const transactionRepository = new TransactionPostgreRepository();
const transactionServices = new TrnsactionServices(transactionRepository);

export const apolloServer = new ApolloServer({
    typeDefs: readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
    resolvers: resolversGraphQL,
    introspection: process.env.NODE_ENV !== 'production',
    context() {
        return {
            transactionServices
        }
    }
})
