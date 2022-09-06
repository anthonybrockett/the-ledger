import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import CalendarDetail from "../../components/CalendarDetail/CalendarDetail";
import "./Calendar.css";
import * as datesAPI from '../../utilities/dates-api';

export default function CalendarPage() {

    const [day, setDay] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [incomeItems, setIncomeItems] = useState([]);
    const [expenseItems, setExpenseItems] = useState([]);
    // const navigate = useNavigate();


    // useEffect(function() {
    //     async function getDates() {
    //       const dates = await datesAPI.getAllForUser();
    //       setDates(dates);
    //     }
    //     getDates();
    //   }, []);


    // async function handleSelectDate() {
    //     await datesAPI.createDate();
    //     navigate('/calendar');
    // }

    async function addIncomeItem(incomeId) {
        const updatedDay = await datesAPI.addIncomeToDay(incomeId);
        setDay(updatedDay);
    }
    
    function addExpenseItem(expenseItem) {
        setExpenseItems([...expenseItems, expenseItem])    
    }

    async function handleSaveDay() {
        await datesAPI.saveDay();
        // setDates([...dates, date])
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