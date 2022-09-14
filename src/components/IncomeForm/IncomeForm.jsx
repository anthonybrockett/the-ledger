import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./IncomeForm.css";


export default function IncomeForm({addIncomeItem, selectedDate, setSelectedDate, updateIncomeItem, incomeItem, incomeDate, updateStatus, setUpdateStatus}) {
  const [incomeFormData, setIncomeFormData] = useState(
    incomeItem ? incomeItem :
    {amount: 50, notes: ""});
  const navigate = useNavigate();

  function handleAddIncomeItem(evt) {
    evt.preventDefault();
    if(incomeItem) {
      const incomeId = incomeItem._id;
      updateIncomeItem(incomeFormData, incomeId, incomeDate);
      setUpdateStatus(!updateStatus);
      navigate('/')
    } else {
      addIncomeItem({incomeFormData});
      setIncomeFormData({ amount: 50, notes: "" });
      navigate('/')
    }
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
      <form className="new-income-form" onSubmit={handleAddIncomeItem} autoComplete="off">
        <label>Amount</label>
        <input
          name="amount"
          type="Number"
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
        /> <br />
        <button id="submit-income" type="submit">{incomeItem ? "Update Income" : "Add Income"}</button>
      </form>
    </>
  );
}