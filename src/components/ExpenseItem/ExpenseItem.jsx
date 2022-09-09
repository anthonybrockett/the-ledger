import './ExpenseItem.css';
import { useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

export default function ExpenseItem({ expenseItem, deleteExpense, expenseDate, updateExpenseItem }) {
  const [updateStatus, setUpdateStatus] = useState(false);

  return (
    <div className="ExpenseItem">
      {updateStatus ? <ExpenseForm expenseItem={expenseItem} updateExpenseItem={updateExpenseItem} expenseDate={expenseDate} /> :
        <div>Expense: {expenseItem.amount} <br />
        Notes: {expenseItem.notes} <br />
        <button id="del-expense" onClick={() => deleteExpense(expenseItem.id, expenseDate)}>X</button>
        <button onClick={() => setUpdateStatus(true)}>Update</button>
        </div>
      }
    </div>
  );
}