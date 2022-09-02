import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      Welcome, {user.name}
      <br />
      <Link to='/'>Dashboard</Link>
      <br />
      <Link to='/calendar'>Calendar</Link>
      <br />
      <Link to='/income'>Income</Link>
      <br />
      <Link to='/expense'>Expense</Link>
      <br />
      <Link to='' onClick={handleLogOut} className="logout">Log Out</Link>
    </nav>
  );
}