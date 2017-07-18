import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const sessionLink = () => (
  <nav className="login-signup">
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLink()
);

export default Greeting;
