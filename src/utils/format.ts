export function currency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export function stringToDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}