import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);

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
