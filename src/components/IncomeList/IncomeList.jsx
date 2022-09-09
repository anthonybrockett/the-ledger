import './IncomeList.css';
import IncomeItem from '../IncomeItem/IncomeItem';

export default function IncomeList({ incomeDate, deleteIncome, updateIncomeItem }) {
  if(!incomeDate) return null;
  
  const items = incomeDate.income.map(item =>
    <IncomeItem
      key={item._id}
      incomeItem={item}
      deleteIncome={deleteIncome}
      incomeDate={incomeDate}
      updateIncomeItem={updateIncomeItem}
    />
    );
    return (
      <div className="IncomeList">
        Income
        {items}
      </div>
  );
}