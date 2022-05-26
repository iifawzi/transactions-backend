export interface Transaction {
    id: string,
    account: string,
    description: string | null,
    category: category | null,
    reference: string | null,
    currency: string,
    amount: number,
    transactionDate: Date
}


interface category {
    id: string,
    name: string,
    color: string | null
}

interface account {
    id: string,
    name: string
}