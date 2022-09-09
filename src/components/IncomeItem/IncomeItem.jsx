import './IncomeItem.css';
import {useState} from 'react';
import IncomeForm from '../IncomeForm/IncomeForm';

export default function IncomeItem({ incomeItem, deleteIncome, incomeDate, updateIncomeItem }) {
  const [updateStatus, setUpdateStatus] = useState(false);

  return (
    <div className="IncomeItem">
      { updateStatus ? <IncomeForm incomeItem={incomeItem} updateIncomeItem={updateIncomeItem} incomeDate={incomeDate} /> :
        <div>Income: {incomeItem.amount}<br /> 
          Notes: {incomeItem.notes} <br />
          <button id="del-income" onClick={() => deleteIncome(incomeItem.id, incomeDate)}>X</button>
          <button onClick={() => setUpdateStatus(true)}>Update</button>
        </div>
      }
    </div>
  );
}