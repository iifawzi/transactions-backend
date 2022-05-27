import { TransactionRepository } from "@/data/contracts";
import { Transaction } from "@/domain/entities";
import { Prisma } from "@/infra/prisma";
import { filterParams } from "@/types";
import { transactionMapper } from "./transaction.mapper";

export class TransactionPostgreRepository implements TransactionRepository {

    /**
     * 
     * @param filters: filterParams
     * @returns 
     */
    public async getAllTransactions({ page, from, to, account }: filterParams): Promise<Transaction[]> {
        const limit = 20;
        const pageNumber = page ? page : 1;
        const skip = limit * (pageNumber - 1);
        const filter = this.prepareFilterQuery(from, to, account);
        const transactions = await Prisma.transactions.findMany(
            {
                include: { account: true, category: true },
                skip,
                take: limit,
                where: filter,
                orderBy: {
                    date: filter ? 'asc' : 'desc'
                }
            });

        const mappedTransactions = transactionMapper.collectionToDomain(transactions);
        return mappedTransactions;
    }

    /**
     * 
     * @param from The starting date
     * @param to The end date
     * @param account The account name
     */
    private prepareFilterQuery(from?: string, to?: string, account?: string) {
        let filterQuery = undefined;
        if (from) {
            filterQuery = {
                date: {
                    gte: new Date(from),
                }
            }
        }
        if (to) {
            filterQuery = {
                date: {
                    ...filterQuery?.date,
                    lt: new Date(to),
                }
            }
        }
        if (account) {
            filterQuery = {
                date: filterQuery?.date,
                account: {
                    name: account
                }
            }
        }

        return filterQuery;
    }
}