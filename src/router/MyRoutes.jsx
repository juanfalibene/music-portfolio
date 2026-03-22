import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { PlayerProvider } from '../context/PlayerContext';
import { GlobalPlayer } from '../components/player/GlobalPlayer';
import { Home } from '../components/Home';
import { Radio } from '../components/Radio';
import { Mixes } from '../components/Mixes';
import { Playlist } from '../components/Playlists';
import { About } from '../components/About';
import { Error404 } from '../components/Error404';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const MyRoutes = () => {
  return (
    <HashRouter>
      <PlayerProvider>
        <div className='layout'>
          <Header />
          <div className='page-content'>
            <Routes>
              <Route path='/' element={<Navigate to='/Home' />} />
              <Route path='/' element={<Home />} />
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/radio' element={<Radio />} />
              <Route path='/mixes' element={<Mixes />} />
              <Route path='/playlists' element={<Playlist />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <GlobalPlayer />
      </PlayerProvider>
    </HashRouter>
  );
};
