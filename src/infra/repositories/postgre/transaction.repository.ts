import { TransactionRepository } from "@/data/contracts";
import { Transaction } from "@/domain/entities";
import { Prisma } from "@/infra/prisma";
import { transactionMapper } from "./transaction.mapper";

export class TransactionPostgreRepository implements TransactionRepository {

    /**
     * 
     * @param page Page number
     * @param from The starting date
     * @param to The end date
     * @param account The account name
     * @returns Promise<Transaction[]>
     */
    public async getAllTransactions(page?: number, from?: string, to?: string, account?: string): Promise<Transaction[]> {
        const limit = 20;
        const pageNumber = page ? page : 1;
        const skip = limit * (pageNumber - 1);
        const transactions = await Prisma.transactions.findMany(
            {
                include: { account: true, category: true },
                skip,
                take: limit,
                where: this.prepareFilterQuery(from, to, account),
                orderBy: {
                    date: 'desc'
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
                    lte: new Date(from),
                }
            }
        }
        if (to) {
            filterQuery = {
                date: {
                    ...filterQuery?.date,
                    gt: new Date(to),
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