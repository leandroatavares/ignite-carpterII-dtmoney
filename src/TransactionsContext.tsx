import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

type Transaction = {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: Date
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //ou Pick<Transaction, 'type' | 'amount' ...>
type TransactionsProviderProps = {
  children: ReactNode
}
interface TransactionsContextShareData {
  transactions: Transaction[];
  createTransaction: (transactions: TransactionInput) => void;
}
export const TransactionsContext = createContext<TransactionsContextShareData>(
    {} as TransactionsContextShareData //force
  );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      { children }
    </TransactionsContext.Provider>
  )
}
