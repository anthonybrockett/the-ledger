import { useState } from 'react';
import Calendar from 'react-calendar';
import CalendarDetail from "../../components/CalendarDetail/CalendarDetail";
import "./Calendar.css";

export default function CalendarPage() {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <div id="calendar">
                <h1>Calendar</h1>
                <Calendar onChange={setDate} value={date} />
            </div>
            <div id="detail">
                <CalendarDetail date={date} setDate={setDate} />
            </div>
        </>
    );
  }