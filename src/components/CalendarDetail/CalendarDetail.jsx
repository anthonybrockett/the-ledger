// import { useState } from 'react';
import IncomeForm from "../IncomeForm/IncomeForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm"
import "./CalendarDetail.css"


export default function CalendarDetail({date, selectedDate, setSelectedDate, addIncomeItem, addExpenseItem, handleSaveDay}) {

    return (
        <>
            <hr />
            <h3 id="cal-detail-title">{new Date(selectedDate).toLocaleDateString()}</h3>
            <main>
                    <IncomeForm id="income-form" addIncomeItem={addIncomeItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    <ExpenseForm id="expense-form" addExpenseItem={addExpenseItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    <button
                    onClick={handleSaveDay}
                    >Save Date</button>
            </main>
        </>
        
    );
}