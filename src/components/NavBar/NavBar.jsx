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
      Welcome, <br />{user.name}
      <br />
      {/* <Link to='/dashboard'>Dashboard</Link> */}
      <br />
      <Link to='/'>Calendar</Link>
      <br />
      <Link to='' onClick={handleLogOut} className="logout">Log Out</Link>
    </nav>
  );
}