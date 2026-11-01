import React from 'react';
import { AllShowsGrid } from './AllShowsGrid';
import { radio, mixes, playlists } from '../data/music';
import { NextEventsList } from './NextEventsList';

export const Home = () => {
  const allShows = [...radio, ...mixes, ...playlists];

  return (
    <main className='home-main'>
      <div className='home-hero'>
        <h1>
          <span className='hero-subtitle'>DJ & SELECTOR</span>
          <span className='hero-main-title'>FOR THE LOVE OF SHARING MUSIC</span>
        </h1>
      </div>
      <NextEventsList />
      <AllShowsGrid shows={allShows} showFilters />
    </main>
  );
};

