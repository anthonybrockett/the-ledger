import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import CalendarPage from '../CalendarPage/CalendarPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import ExpensePage from '../ExpensePage/ExpensePage';
import IncomePage from '../IncomePage/IncomePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/income' element={<IncomePage />} />
            <Route path='/expense' element={<ExpensePage />} />
            <Route path='/' element={<DashboardPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
