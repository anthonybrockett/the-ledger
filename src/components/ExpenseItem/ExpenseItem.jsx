import './ExpenseItem.css';

export default function ExpenseItem({ expenseItem, deleteExpense, expenseDate }) {
  return (
    <div className="ExpenseItem">
        <div>Expense: {expenseItem.amount} <br />
        Notes: {expenseItem.notes} <br />
        <button id="del-expense" onClick={() => deleteExpense(expenseItem.id, expenseDate)}>X</button>
        
        </div>
        <div className="notes"></div>
    </div>
  );
}