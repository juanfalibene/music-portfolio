import React from 'react';
import { AllShowsGrid } from './AllShowsGrid';
import { radio, mixes, playlists } from '../data/music';
import { NextEventsList } from './NextEventsList';

export const Home = () => {
  const allShows = [...radio, ...mixes, ...playlists];

  return (
    <main className='home-main'>
      <div className='home-hero'>
        <h1>FOR THE LOVE OF SHARING MUSIC</h1>
      </div>
      <NextEventsList />
      <AllShowsGrid shows={allShows} />
    </main>
  );
};

