import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from '../Form/ExpenseForm/ExpenseForm';

const NewExpense = ({ onAddExpenseHandler }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseHandler(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button className='new-expense button' onClick={startEditingHandler}>
          Add new Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelData={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
