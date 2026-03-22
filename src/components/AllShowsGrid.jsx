import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

export const AllShowsGrid = ({ shows }) => {
  const { setActiveShow } = useContext(PlayerContext);

  return (
    <div className='shows-grid'>
      {shows.map((show) => (
        <div
          onClick={() => setActiveShow(show)}
          className={`show-card ${show.category} cursor-pointer`}
          key={show.id + show.title}
          role="button"
          tabIndex={0}
        >
          <div className='show-card-image'>
            <img src={show.cover} alt={show.title} loading="lazy" />
          </div>
          <div className='show-card-info'>
            <span className={`show-category-badge ${show.category}`}>
              {show.category}
            </span>
            <h3 className='show-title'>{show.title}</h3>
            <h4 className='show-meta'>
              {show.place} — {show.date}
            </h4>
            <ul className='show-genres'>
              {show.genres.map((genre, index) => (
                <li key={index} className='show-genre'>
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
