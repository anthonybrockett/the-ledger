import './IncomeList.css';
import IncomeItem from '../IncomeItem/IncomeItem';

export default function IncomeList({ incomeDate }) {

  const items = incomeDate.income.map(item =>
    <IncomeItem
      key={item._id}
      incomeItem={item}
    />
  );
  return (
    <main className="IncomeList">
      {items}
    </main>
  );
}