import './IncomeItem.css';

export default function IncomeItem({ incomeItem, deleteIncome, incomeDate }) {
  return (
    <div className="IncomeItem">
        <div>Income: {incomeItem.amount}<br /> 
          Notes: {incomeItem.notes} <br />
          <button id="del-income" onClick={() => deleteIncome(incomeItem.id, incomeDate)}>X</button>
        </div>
    </div>
  );
}