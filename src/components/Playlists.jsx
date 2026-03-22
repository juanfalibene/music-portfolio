import React from "react";
import { playlists } from "../data/music";
import { AllShowsGrid } from "./AllShowsGrid";

export const Playlist = () => {
  return (
    <main className='home-main'>
      <div className='home-hero'>
        <h1>PLAYLIST</h1>
      </div>
      <AllShowsGrid shows={playlists} />
    </main>
  );
};

