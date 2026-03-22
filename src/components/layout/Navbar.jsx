import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink
            to='/home'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Latest
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/radio'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Radio
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/mixes'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Mixes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/playlists'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Playlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
