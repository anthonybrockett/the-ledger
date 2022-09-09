import { useState } from "react";
import {useNavigate} from "react-router-dom";


export default function IncomeForm({addIncomeItem, selectedDate, setSelectedDate, updateIncomeItem, incomeItem, incomeDate, updateStatus, setUpdateStatus}) {
  const [incomeFormData, setIncomeFormData] = useState(
    incomeItem ? incomeItem :
    {amount: 50, notes: ""});
  const navigate = useNavigate();

  function handleAddIncomeItem(evt) {
    evt.preventDefault();
    if(incomeItem) {
      const incomeId = incomeItem._id;
      // console.log(incomeId)
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
      <h1>Income</h1>
      <form onSubmit={handleAddIncomeItem} autoComplete="off">
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
        <button type="submit">{incomeItem ? "Update Income" : "Add Income"}</button>
        {/* <button onClick={handleUpdateIncomeItem}>Update Income</button> */}
      </form>
    </>
  );
}