// import { useState } from 'react';
import IncomeForm from "../IncomeForm/IncomeForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import IncomeList from "../IncomeList/IncomeList";
import ExpenseList from "../ExpenseList/ExpenseList"
import "./CalendarDetail.css"


export default function CalendarDetail({dates, selectedDate, setSelectedDate, addIncomeItem, addExpenseItem, handleSaveDay, deleteIncome, deleteExpense }) {

    return (
        <>
            <hr />
            <h3 id="cal-detail-title">{new Date(selectedDate).toLocaleDateString()}</h3>
            <main>
                    <IncomeForm id="income-form" addIncomeItem={addIncomeItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    <ExpenseForm id="expense-form" addExpenseItem={addExpenseItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />         
            </main>
            <div>
                <IncomeList
                    incomeDate={dates.find(date => date.date === selectedDate.toLocaleDateString().replaceAll('/', '-'))}
                    deleteIncome={deleteIncome}
                    />   
                <ExpenseList           
                    expenseDate={dates.find(date => date.date === selectedDate.toLocaleDateString().replaceAll('/', '-'))}
                    deleteExpense={deleteExpense}
                />   
            </div>
        </>  
    );
}