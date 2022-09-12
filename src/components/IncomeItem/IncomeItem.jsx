import './IncomeItem.css';
import {useState} from 'react';
import IncomeForm from '../IncomeForm/IncomeForm';

export default function IncomeItem({ incomeItem, deleteIncome, incomeDate, updateIncomeItem }) {
  const [updateStatus, setUpdateStatus] = useState(false);

  return (
    <div className="IncomeItem">
      { updateStatus ? <IncomeForm incomeItem={incomeItem} updateIncomeItem={updateIncomeItem} incomeDate={incomeDate} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} /> :
        <div>Income: {incomeItem.amount}<br /> 
          Notes: {incomeItem.notes} <br />
          <button id="update-income" onClick={() => setUpdateStatus(!updateStatus)}>Update</button><br />
          <button id="del-income" onClick={() => deleteIncome(incomeItem.id, incomeDate)}>Delete</button>
        </div>
      }
    </div>
  );
}