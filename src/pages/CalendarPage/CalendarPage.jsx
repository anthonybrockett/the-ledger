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
        let date = new Date(selectedDate).toLocaleDateString().replaceAll('/', '-');
        // console.log(date);
        const updatedDay = await datesAPI.addIncomeToDay(date, incomeData);
        setDay(updatedDay);
    }
    
    async function deleteIncome(id) {
        await datesAPI.deleteIncome(id);
    }

    async function addExpenseItem(expenseData) {
        let date = new Date(selectedDate).toLocaleDateString().replaceAll('/', '-');
        const updatedDay = await datesAPI.addExpenseToDay(date, expenseData);
        setDay(updatedDay);    
    }

    async function handleSaveDay() {
        await datesAPI.saveDay(selectedDate);
        console.log(selectedDate)
    }

    return (
        <>
            <div id="calendar">
                <h1>Calendar</h1>
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
                />
            </div>
        </>
    );
  }