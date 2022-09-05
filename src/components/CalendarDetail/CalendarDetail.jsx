import { useState } from 'react';
import IncomeForm from "../IncomeForm/IncomeForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm"


export default function CalendarDetail({dates, selectedDate, setSelectedDate}) {
    const [incomeItems, setIncomeItems] = useState([]);
    const [expenseItems, setExpenseItems] = useState([]);

    function addIncomeItem(incomeItem) {
        setIncomeItems([...incomeItems, incomeItem])    
    }
    
    function addExpenseItem(expenseItem) {
        setExpenseItems([...expenseItems, expenseItem])    
    }

    return (
        <div>
            <hr />
            <h3 className="cal-detail-title">{new Date(selectedDate).toLocaleDateString()}</h3>
            <IncomeForm addIncomeItem={addIncomeItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <ExpenseForm addExpenseItem={addExpenseItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
        
    );
  }