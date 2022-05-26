import { Transaction } from "@/domain/entities";
import { TransactionUseCases } from "@/domain/useCases";
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
    async getAllTransactions(page?: number, from?: string, to?: string, account?: string): Promise<Transaction[]> {
        return await this.transactionRepository.getAllTransactions(page, from, to, account);
    }
}