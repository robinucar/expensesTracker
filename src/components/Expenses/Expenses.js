import React, { useState } from 'react';
import './Expenses.css';
import ExpensesItem from '../ExpensesItem/ExpensesItem';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

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

      {filteredExpenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
