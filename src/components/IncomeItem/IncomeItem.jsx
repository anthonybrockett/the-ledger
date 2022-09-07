import './IncomeItem.css';

export default function IncomeItem({ incomeItem }) {
  return (
    <div className="IncomeItem">
      <div className="amount">{incomeItem.amount}</div>
      <div className="notes">{incomeItem.notes}</div>
    </div>
  );
}