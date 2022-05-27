import { Transaction } from "@/domain/entities";
import { filterParams } from "@/types";

export interface TransactionUseCases {
    getAllTransactions(filters: filterParams): Promise<Transaction[]>
}