import { useState } from "react";


export default function IncomeForm({addIncomeItem, selectedDate}) {
  const [incomeFormData, setIncomeFormData] = useState({ date: new Date().toLocaleDateString(), amount: 0 });

  function handleAddIncomeItem(evt) {
    evt.preventDefault();
    addIncomeItem(incomeFormData);
    setIncomeFormData({ date: new Date(), amount: 0 });
  }

  function handleChange(evt) {
    const newIncomeFormData = {
      ...incomeFormData,
      [evt.target.name]: evt.target.value
    };
    setIncomeFormData(newIncomeFormData);
  }

  return (
    <>
      <h1>Income</h1>
      <form onSubmit={handleAddIncomeItem}>
        <label>Date</label>
        <input
          name="date"
          type="datetime-local"
          // placeholder={new Date()}
          value={incomeFormData.date}
          onChange={handleChange}
          required
        />
        <label>Amount</label>
        <input
          name="amount"
          value={incomeFormData.amount}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </>
  );
}