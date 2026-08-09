import React from 'react';
import { Link } from 'react-router-dom';
import { next } from '../data/music';

export const NextEventsList = () => {
  const nextList = next[Object.keys(next)[0]];

  if (!nextList || nextList.length === 0) return null;

  return (
    <div className='next-events-container'>
      <h2 className='reco-category-title'>Next</h2>
      <ul className='reco-items-list'>
        {nextList.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <li className='reco-item'>
              <span className='reco-item-id'>{item.date}</span>
              <span className='reco-item-name'>{item.venue}</span>
              <span className='reco-item-arrow'>&#8594;</span>
            </li>
          </a>
        ))}
      </ul>
      <div className='past-gigs-link-wrapper'>
        <Link to="/past-gigs" className='past-gigs-link'>
          Past Gigs &#8594;
        </Link>
      </div>
    </div>
  );
};
