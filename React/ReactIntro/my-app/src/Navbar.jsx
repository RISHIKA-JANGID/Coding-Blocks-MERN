
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">FitCommunity</a>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/workouts">Workouts</a></li>
        <li><a href="/challenges">Challenges</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register" className="register-btn">Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
