export interface Transaction {
    id: string,
    account: Account,
    description: string | null,
    category: Category | null,
    reference: string | null,
    currency: string,
    amount: number,
    transactionDate: Date
}


interface Category {
    id: string,
    name: string,
    color: string | null
}

interface Account {
    id: string,
    name: string
}