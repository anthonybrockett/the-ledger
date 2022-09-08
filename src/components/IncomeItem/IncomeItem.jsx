import './IncomeItem.css';

export default function IncomeItem({ incomeItem, deleteIncome }) {
  return (
    <div className="IncomeItem">
      <li>
        <div className="amount">{incomeItem.amount}</div>
        <div className="notes">{incomeItem.notes}</div>
        <button onClick={() => deleteIncome(incomeItem.id)}>X</button>
      </li>
    </div>
  );
}