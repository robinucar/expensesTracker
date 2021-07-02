import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';
const initialExpenses = [
  {
    id: 1,
    title: 'Car Issurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 2,
    title: 'Office Chairs',
    amount: 250.68,
    date: new Date(2021, 4, 12),
  },
  {
    id: 3,
    title: 'Toilet Papper',
    amount: 65.67,
    date: new Date(2021, 5, 10),
  },
  {
    id: 4,
    title: 'Lights',
    amount: 150.43,
    date: new Date(2021, 6, 30),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const saveExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpenseHandler={saveExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
