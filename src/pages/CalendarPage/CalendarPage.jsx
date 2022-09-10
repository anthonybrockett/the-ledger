import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import CalendarDetail from "../../components/CalendarDetail/CalendarDetail";
import NavBar from "../../components/NavBar/NavBar"
import "./Calendar.css";
import * as datesAPI from '../../utilities/dates-api';

export default function CalendarPage({user, setUser}) {

    const [day, setDay] = useState(null);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());


    useEffect(function() {
        async function getDates() {
          const dates = await datesAPI.getAllForUser();
          setDates(dates)
        }
        getDates();
      }, []);

    async function addIncomeItem(incomeData) {
        let date = new Date(selectedDate).toLocaleDateString().replaceAll('/', '-');
        const updatedDates = await datesAPI.addIncomeToDay(date, incomeData);
        setDates(updatedDates);
        
    }

    async function updateIncomeItem(incomeData, id, incomeDate) {
        const updatedDates = await datesAPI.updateIncome(incomeData, id, incomeDate);
        setDates(updatedDates);
    }
    
    async function deleteIncome(id, incomeDate) {
        const newDates = await datesAPI.deleteIncome(id, incomeDate);
        setDates(newDates);
    }

    async function updateExpenseItem(expenseData, id, expenseDate) {
        const updatedDates = await datesAPI.updateExpense(expenseData, id, expenseDate);
        setDates(updatedDates);
    }
    
    async function addExpenseItem(expenseData) {
        let date = new Date(selectedDate).toLocaleDateString().replaceAll('/', '-');
        const updatedDates = await datesAPI.addExpenseToDay(date, expenseData);
        setDates(updatedDates);    
    }
    
    async function deleteExpense(id, expenseDate) {
        const newDates = await datesAPI.deleteExpense(id, expenseDate);
        setDates(newDates);
    }
    
    async function handleSaveDay() {
        await datesAPI.saveDay(selectedDate);
        console.log(selectedDate)
    }

    return (
        <main className="calendar-page">
            <div id="calendar">
                <Calendar onChange={setSelectedDate} value={selectedDate} showNeighboringMonth={false} />
            </div>
            <div id="detail">
                <CalendarDetail 
                dates={dates} 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
                addIncomeItem={addIncomeItem}
                addExpenseItem={addExpenseItem}
                handleSaveDay={handleSaveDay}
                deleteIncome={deleteIncome}
                deleteExpense={deleteExpense}
                updateIncomeItem={updateIncomeItem}
                updateExpenseItem={updateExpenseItem}
                />
            </div>
            <div id="nav">
                <NavBar user={user} setUser={setUser} />
            </div>
        </main>
    );
  }