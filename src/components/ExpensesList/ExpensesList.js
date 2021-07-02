import React from 'react';
import ExpensesItem from '../ExpensesItem/ExpensesItem';
import './ExpensesList.css';

const ExpensesList = ({ data }) => {
  return (
    <div>
      <ul className='expenses-list'>
        {data.map((expense) => (
          <ExpensesItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
      {data.length === 0 && (
        <h2 className='expenses-list__fallback'> Found no expenses.</h2>
      )}
    </div>
  );
};

export default ExpensesList;
