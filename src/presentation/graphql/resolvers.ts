import { TrnsactionServices } from "@/data/services";
import { GraphQLScalarType } from "graphql";
import { GraphQLContext } from "./types";

export const resolversGraphQL = {
    Query: {
        getAllTransactions: async (_: any, args: { page?: number, from?: string, to?: string, account?: string }, context: GraphQLContext) => {
            return context.transactionServices.getAllTransactions(args.page, args.from, args.to, args.account);
        }
    },

    Date: new GraphQLScalarType({
        name: "Date",
        description: "Date Scalar Type",
        serialize(value) {
            return new Date(value as number);
        }
    })
}