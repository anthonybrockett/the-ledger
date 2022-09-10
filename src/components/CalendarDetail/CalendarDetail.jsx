// import { useState } from 'react';
import IncomeForm from "../IncomeForm/IncomeForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import IncomeList from "../IncomeList/IncomeList";
import ExpenseList from "../ExpenseList/ExpenseList"
import "./CalendarDetail.css"


export default function CalendarDetail({dates, selectedDate, setSelectedDate, addIncomeItem, addExpenseItem, handleSaveDay, deleteIncome, deleteExpense, updateIncomeItem, updateExpenseItem }) {

    return (
        <>
            <hr />
            <h3 id="cal-detail-title">{new Date(selectedDate).toLocaleDateString()}</h3>
            <div className="calendar-detail">
                    <h5 id="income-title">Income</h5><br />
                    <IncomeForm id="income-form" addIncomeItem={addIncomeItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} updateIncomeItem={updateIncomeItem} /> <br />
                    <h5 id="expense-title">Expense</h5><br />
                    <ExpenseForm id="expense-form" addExpenseItem={addExpenseItem} selectedDate={selectedDate} setSelectedDate={setSelectedDate} updateExpenseItem={updateExpenseItem} />                       
                    <div id="fill"> </div>
                    <IncomeList
                        id="income-detail"
                        incomeDate={dates.find(date => date.date === selectedDate.toLocaleDateString().replaceAll('/', '-'))}
                        deleteIncome={deleteIncome}
                        updateIncomeItem={updateIncomeItem}
                        />   
                    <ExpenseList         
                        id="expense-detail"  
                        expenseDate={dates.find(date => date.date === selectedDate.toLocaleDateString().replaceAll('/', '-'))}
                        deleteExpense={deleteExpense}
                        updateExpenseItem={updateExpenseItem}
                    />   
            </div>
        </>  
    );
}