import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          type: 'deposit',
          amount: 400.50,
          category: 'category',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
