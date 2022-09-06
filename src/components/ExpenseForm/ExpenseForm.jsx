import { useState } from "react";


export default function ExpenseForm({addExpenseItem, selectedDate, setSelectedDate}) {
  const [expenseFormData, setExpenseFormData] = useState({ amount: 50, notes: ""});

  function handleAddExpenseItem(evt) {
    evt.preventDefault();
    addExpenseItem({expenseFormData});
    setExpenseFormData({ amount: 50, notes: "" });
  }

  function handleChange(evt) {
    const newExpenseFormData = {
      ...expenseFormData,
      [evt.target.name]: evt.target.value
    };
    setExpenseFormData(newExpenseFormData);
  }

  return (
    <>
      <h1>Expense</h1>
      <form onSubmit={() => handleAddExpenseItem({expenseFormData})}>
        <label>Amount</label>
        <input
          name="amount"
          value={expenseFormData.amount}
          onChange={handleChange}
          required
        />
        <label>Notes</label>
        <input
          name="notes"
          value={expenseFormData.notes}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </>
  );
}