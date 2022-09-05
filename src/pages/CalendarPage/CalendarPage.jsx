import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import CalendarDetail from "../../components/CalendarDetail/CalendarDetail";
import "./Calendar.css";
import * as datesAPI from '../../utilities/dates-api';

export default function CalendarPage() {

    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();


    useEffect(function() {
        async function getDates() {
          const dates = await datesAPI.getAllForUser();
          setSelectedDate(dates[0]);
          setDates(dates);
        }
        getDates();
      });


    // async function handleSelectDate() {
    //     await datesAPI.createDate();
    //     navigate('/calendar');
    // }

    return (
        <>
            <div id="calendar">
                <h1>Calendar</h1>
                <Calendar onChange={setSelectedDate} showNeighboringMonth={false} />
            </div>
            <div id="detail">
                <CalendarDetail dates={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
        </>
    );
  }