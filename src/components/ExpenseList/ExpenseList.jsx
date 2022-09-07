import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList({ expenseDate }) {
  if(!expenseDate) return null;
  
  const items = expenseDate.expense.map(item =>
    <ExpenseItem
      key={item._id}
      expenseItem={item}
    />
  );
  return (
    <main className="ExpenseList">
      {items}
    </main>
  );
}