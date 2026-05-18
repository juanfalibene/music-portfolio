import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='navbar'>
      <button className='mobile-menu-toggle' onClick={toggleMenu}>
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <NavLink
            to='/home'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Latest
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/radio'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Radio
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/mixes'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Mixes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/playlists'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Playlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/recommendations'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Picks
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
