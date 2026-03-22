import React from "react";
import { mixes } from "../data/music";
import { AllShowsGrid } from "./AllShowsGrid";

export const Mixes = () => {
  return (
    <main className='home-main'>
      <div className='home-hero'>
        <h1>MIXES</h1>
      </div>
      <AllShowsGrid shows={mixes} />
    </main>
  );
};

