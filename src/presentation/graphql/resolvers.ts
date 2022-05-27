import { filterParams } from "@/types";
import { GraphQLScalarType } from "graphql";
import { GraphQLContext } from "./types";

export const resolversGraphQL = {
    Query: {
        getAllTransactions: async (_: any, args: filterParams, context: GraphQLContext) => {
            return await context.transactionServices.getAllTransactions(args);
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