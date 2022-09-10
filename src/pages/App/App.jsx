import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import CalendarPage from '../CalendarPage/CalendarPage';
import DashboardPage from '../DashboardPage/DashboardPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            {/* <Route path='/' element={<DashboardPage />} /> */}
            <Route path='/' element={<CalendarPage user={user} setUser={setUser} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
