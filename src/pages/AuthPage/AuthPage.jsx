import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div>
      <div className="login-title">
        <h1>Welcome to The Ledger!</h1>
        <h2>Please login or sign up below.</h2>
      </div>
      <div>
      { showLogin ?
          <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} />
          :
          <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} />
      }
      </div>
      <button className="sign-up" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up' : 'Log In'}
      </button>
    </div>
  );
}