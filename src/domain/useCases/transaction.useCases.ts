import { Transaction } from "../entities/transaction.entity";

export interface TransactionUseCases {
    getAllTransactions(page?: number, from?: string, to?: string, account?: string): Transaction[]
}