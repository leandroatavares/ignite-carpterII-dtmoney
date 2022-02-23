import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

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
  createTransaction: (transactions: TransactionInput) => Promise<void>;
}
const TransactionsContext = createContext<TransactionsContextShareData>(
    {} as TransactionsContextShareData //force
  );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()}
    )
    const { transaction } = response.data;

    setTransactions([...transactions, transaction])
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

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context;
}
