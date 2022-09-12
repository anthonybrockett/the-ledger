import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./ExpenseForm.css"


export default function ExpenseForm({addExpenseItem, selectedDate, setSelectedDate, updateExpenseItem, expenseItem, expenseDate, updateStatus, setUpdateStatus}) {
  const [expenseFormData, setExpenseFormData] = useState(
    expenseItem ? expenseItem :
    { amount: 50, notes: ""});
    const navigate = useNavigate();

  function handleAddExpenseItem(evt) {
    evt.preventDefault();
    if(expenseItem) {
      const expenseId = expenseItem._id
      updateExpenseItem(expenseFormData, expenseId, expenseDate)
      setUpdateStatus(!updateStatus);
      navigate('/');
    } else {
      addExpenseItem({expenseFormData});
      setExpenseFormData({ amount: 50, notes: "" });
      navigate('/')
    }
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
      <form className="new-expense-form" onSubmit={handleAddExpenseItem} autoComplete="off">
        <label>Amount</label>
        <input
          name="amount"
          type="Number"
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
        /> <br />
        <button type="submit">{expenseItem ? "Update Expense" : "Add Expense"}</button>
      </form>
    </>
  );
}