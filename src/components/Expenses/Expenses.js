import React, { useState } from 'react';
import './Expenses.css';

import ExpensesList from '../ExpensesList/ExpensesList';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterExpenseHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterExpenseHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList data={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
