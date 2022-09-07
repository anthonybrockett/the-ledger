// import { useState } from 'react';
import IncomeForm from "../IncomeForm/IncomeForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import IncomeList from "../IncomeList/IncomeList";
import "./CalendarDetail.css"


export default function CalendarDetail({dates, selectedDate, setSelectedDate, addIncomeItem, addExpenseItem, handleSaveDay }) {

    return (
        <>
            <hr />
            <h3 id="cal-detail-title">{new Date(selectedDate).toLocaleDateString()}</h3>
            <main>
                    <IncomeForm id="income-form" addIncomeItem={addIncomeItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    <ExpenseForm id="expense-form" addExpenseItem={addExpenseItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </main>
            <article>
                    <div style={{textAlign:"left", padding:"2px"}}>Income</div>
                    <IncomeList 
                        id="income-detail"
                        incomeDate={dates.find(date => date.date === selectedDate.toLocaleDateString().replaceAll('/', '-'))}
                    />
            </article>          
        </>  
    );
}