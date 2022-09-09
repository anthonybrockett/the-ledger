import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList({ expenseDate, deleteExpense, updateExpenseItem }) {
  if(!expenseDate) return null;
  
  const items = expenseDate.expense.map(item =>
    <ExpenseItem
      key={item._id}
      expenseItem={item}
      deleteExpense={deleteExpense}
      expenseDate={expenseDate}
      updateExpenseItem={updateExpenseItem}
    />
  );
  return (
    <div className="ExpenseList">
      Expense
      {items}
    </div>
  );
}