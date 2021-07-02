import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpensesDate from '../ExpensesDate/ExpensesDate';
import './ExpenseItem.css';

const ExpensesItem = ({ date, title, amount }) => {
  const [titleState, setTitleState] = useState(title);
  const changeTitleHandler = () => {
    setTitleState('This is a new title');
  };
  return (
    <Card className='expense-item'>
      <ExpensesDate date={date} />
      <div className='expense-item__description'>
        <h2>{titleState}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
};

export default ExpensesItem;
