import './ExpenseItem.css';

export default function ExpenseItem({ expenseItem }) {
  return (
    <div className="ExpenseItem">
        <div>Expense: {expenseItem.amount} <br />
        Notes: {expenseItem.notes} <br />
        {/* <button id="del-income" onClick={() => deleteIncome(incomeItem.id, incomeDate)}>X</button> */}
        
        </div>
        <div className="notes"></div>
    </div>
  );
}