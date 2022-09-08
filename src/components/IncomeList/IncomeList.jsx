import './IncomeList.css';
import IncomeItem from '../IncomeItem/IncomeItem';

export default function IncomeList({ incomeDate, deleteIncome }) {
  if(!incomeDate) return null;
  
  const items = incomeDate.income.map(item =>
    <IncomeItem
      key={item._id}
      incomeItem={item}
      deleteIncome={deleteIncome}
      incomeDate={incomeDate}
    />
    );
    return (
      <div className="IncomeList">
        Income
        {items}
      </div>
  );
}