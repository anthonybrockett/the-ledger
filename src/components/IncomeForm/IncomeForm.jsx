import { useState } from "react";


export default function IncomeForm({addIncomeItem, selectedDate, setSelectedDate}) {
  const [incomeFormData, setIncomeFormData] = useState({amount: 50, notes: ""});

  function handleAddIncomeItem(evt) {
    evt.preventDefault();
    addIncomeItem(incomeFormData);
    setIncomeFormData({ amount: 50, notes: "" });
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
        {/* <label>Date</label>
        <input
          name="date"
          type="datetime-local"
          value={incomeFormData.date}
          onChange={handleChange}
          required
        /> */}
        <label>Amount</label>
        <input
          name="amount"
          value={incomeFormData.amount}
          onChange={handleChange}
          required
          />
        <label>Notes</label>
        <input
          name="notes"
          value={incomeFormData.notes}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </>
  );
}