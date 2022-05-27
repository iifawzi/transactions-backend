import { Transaction } from "@/domain/entities";
import { DataMapper } from "@/data/contracts";
import { Prisma } from "@prisma/client";


const transactionPostgree = Prisma.validator<Prisma.TransactionsArgs>()({ include: { category: true, account: true } })
type postgreeTransaction = Prisma.TransactionsGetPayload<typeof transactionPostgree>


class TransactionMapper extends DataMapper<postgreeTransaction, Transaction> {

    /**
     * 
     * @param obj postgreeTransaction
     * @returns Transaction
     */
    public toDomain(obj: postgreeTransaction): Transaction {
        return {
            id: obj.id,
            transactionDate: obj.date,
            account: obj.account,
            description: obj.description || null,
            category: obj.category || null,
            reference: obj.reference || null,
            currency: obj.currency,
            amount: obj.amount
        }
    }
}

export const transactionMapper = new TransactionMapper();