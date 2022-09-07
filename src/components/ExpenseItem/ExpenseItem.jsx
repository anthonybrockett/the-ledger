import './ExpenseItem.css';

export default function ExpenseItem({ expenseItem }) {
  return (
    <div className="ExpenseItem">
      <li>
        <div className="amount">{expenseItem.amount}</div>
        <div className="notes">{expenseItem.notes}</div>
      </li>
    </div>
  );
}