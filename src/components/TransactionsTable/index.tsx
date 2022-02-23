import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { currency, stringToDate } from "../../utils/format";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={`--${transaction.type}`}>
                {currency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {stringToDate(transaction.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}