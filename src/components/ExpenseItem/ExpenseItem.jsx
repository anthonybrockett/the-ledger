import './ExpenseItem.css';
import { useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

export default function ExpenseItem({ expenseItem, deleteExpense, expenseDate, updateExpenseItem }) {
  const [updateStatus, setUpdateStatus] = useState(false);

  return (
    <div className="ExpenseItem">
      {updateStatus ? <ExpenseForm expenseItem={expenseItem} updateExpenseItem={updateExpenseItem} expenseDate={expenseDate} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} /> :
        <div>Expense: {expenseItem.amount} <br />
        Notes: {expenseItem.notes} <br />
        <button id="update-expense" onClick={() => setUpdateStatus(!updateStatus)}>Update</button><br />
        <button id="del-expense" onClick={() => deleteExpense(expenseItem.id, expenseDate)}>Delete</button>
        </div>
      }
    </div>
  );
}