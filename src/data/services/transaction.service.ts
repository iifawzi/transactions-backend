import { Transaction } from "@/domain/entities";
import { TransactionUseCases } from "@/domain/useCases";
import { filterParams } from "@/types";
import { TransactionRepository } from "../contracts";

export class TrnsactionServices implements TransactionUseCases {
    constructor(private transactionRepository: TransactionRepository) {
        this.transactionRepository = transactionRepository
    }

    /**
     * 
     * @param filters filterParams
     * @returns Promise<Transaction[]>
     */
    async getAllTransactions(filters: filterParams): Promise<Transaction[]> {
        return await this.transactionRepository.getAllTransactions(filters);
    }
}