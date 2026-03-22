import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='header'>
      <Link to={"/home"} className='header-logo-link'>
        <h1 className='logo'>
          <span className='logo-icon'>📀</span>
          <span className='logo-text'>JUANFALIBENE</span>
        </h1>
      </Link>
      <Navbar />
    </header>
  );
};
