import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpensesDate from '../ExpensesDate/ExpensesDate';
import './ExpenseItem.css';

const ExpensesItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpensesDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>£ {amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpensesItem;
