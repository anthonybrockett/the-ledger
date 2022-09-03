import { useState } from 'react';
import IncomeForm from "../IncomeForm/IncomeForm"


export default function CalendarDetail({dates, selectedDate}) {
    const [incomeItem, setIncomeItem] = useState({ date: new Date(), amount: 0 });

    function addIncomeItem(incomeItem) {
        setIncomeItem([...incomeItem, incomeItem])    
    }

    return (
        <div>
            <hr />
            <h3 className="cal-detail-title">{new Date(selectedDate).toLocaleDateString()}</h3>
            <h3 className="cal-detail-title">{(dates[0])}</h3>
            <IncomeForm addIncomeItem={addIncomeItem} selectedDate={selectedDate} />
        </div>
        
    );
  }