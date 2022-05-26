import { Transaction } from "@/domain/entities";

export interface TransactionRepository {
    getAllTransactions(page?: number, from?: string, to?: string, account?: string): Promise<Transaction[]>
}