import { Transaction } from "@/domain/entities";
import { filterParams } from "@/types";

export interface TransactionRepository {
    getAllTransactions(filters: filterParams): Promise<Transaction[]>
}