import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

type Transactions = {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: Date
}
type TransactionsProviderProps = {
  children: ReactNode
}
export const TransactionsContext = createContext<Transactions[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  )
}
