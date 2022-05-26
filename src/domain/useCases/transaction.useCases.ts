import { Transaction } from "@/domain/entities";

export interface TransactionUseCases {
    getAllTransactions(page?: number, from?: string, to?: string, account?: string): Promise<Transaction[]>
}