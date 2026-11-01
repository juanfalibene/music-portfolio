import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { next } from '../data/music';
import { pastGigs } from '../data/past_gigs';

const gigs2026 = pastGigs.filter((gig) => gig.date.endsWith('.26'));

// Event dates in music.js use "dd-mm-yyyy"; keep today and future ones only.
const isUpcoming = ({ date }) => {
  const [d, m, y] = date.split('-').map(Number);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(y, m - 1, d) >= today;
};

export const NextEventsList = () => {
  const [open2026, setOpen2026] = useState(false);
  const nextList = next[Object.keys(next)[0]].filter(isUpcoming);

  return (
    <div className='next-events-container'>
      {nextList.length > 0 && (
        <>
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
        </>
      )}
      <div className='past-gigs-link-wrapper'>
        <button
          type='button'
          id='past-gigs-2026-toggle'
          className='past-gigs-link past-gigs-toggle'
          aria-expanded={open2026}
          aria-controls='past-gigs-2026-list'
          onClick={() => setOpen2026((v) => !v)}
        >
          Past Gigs 2026 <span className={`toggle-arrow${open2026 ? ' open' : ''}`}>&#8595;</span>
        </button>
        <Link to="/past-gigs" className='past-gigs-link'>
          Past Gigs (since 2016) &#8594;
        </Link>
      </div>
      <div id='past-gigs-2026-list' className={`past-gigs-accordion${open2026 ? ' open' : ''}`}>
        <ul className='reco-items-list'>
          {gigs2026.map((gig, index) => (
            <li className='reco-item' key={`${gig.id}-${index}`}>
              <span className='reco-item-id'>{gig.date}</span>
              <span className='reco-item-name'>{gig.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
