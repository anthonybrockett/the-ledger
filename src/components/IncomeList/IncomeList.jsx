import './IncomeList.css';
import IncomeItem from '../IncomeItem/IncomeItem';

export default function IncomeList({ incomeDate, deleteIncome }) {
  if(!incomeDate) return null;
  
  const items = incomeDate.income.map(item =>
    <IncomeItem
      key={item._id}
      incomeItem={item}
      deleteIncome={deleteIncome}
    />
    );
    return (
      <main className="IncomeList">
      {items}
      </main>
  );
}