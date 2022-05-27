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
     * @param page Page number
     * @param from The starting date
     * @param to The end date
     * @param account The account name
     * @returns Promise<Transaction[]>
     */
    async getAllTransactions(filters: filterParams): Promise<Transaction[]> {
        return await this.transactionRepository.getAllTransactions(filters);
    }
}