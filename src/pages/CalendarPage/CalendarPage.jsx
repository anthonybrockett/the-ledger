import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import CalendarDetail from "../../components/CalendarDetail/CalendarDetail";
import "./Calendar.css";
import * as datesAPI from '../../utilities/dates-api';

export default function CalendarPage() {

    const [day, setDay] = useState(null);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    // const [incomeItems, setIncomeItems] = useState([]);
    // const [expenseItems, setExpenseItems] = useState([]);
    // const navigate = useNavigate();


    useEffect(function() {
        async function getDates() {
          const dates = await datesAPI.getAllForUser();
          setDates(dates)
        }
        getDates();
      }, []);

    async function addIncomeItem(incomeData) {
        const updatedDay = await datesAPI.addIncomeToDay(incomeData);
        setDay(updatedDay);
    }
    
    async function addExpenseItem(expenseId) {
        const updatedDay = await datesAPI.addExpenseToDay(expenseId);
        setDay(updatedDay);    
    }

    async function handleSaveDay() {
        await datesAPI.saveDay();
    }

    return (
        <>
            <div id="calendar">
                <h1>Calendar</h1>
                <Calendar onChange={setSelectedDate} showNeighboringMonth={false} />
            </div>
            <div id="detail">
                <CalendarDetail 
                date={day} 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
                addIncomeItem={addIncomeItem}
                addExpenseItem={addExpenseItem}
                handleSaveDay={handleSaveDay}
                />
            </div>
        </>
    );
  }