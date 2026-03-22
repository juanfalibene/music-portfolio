import React from "react";
import { radio } from "../data/music";
import { AllShowsGrid } from "./AllShowsGrid";

export const Radio = () => {
  return (
    <main className='home-main'>
      <div className='home-hero'>
        <h1>RADIO</h1>
      </div>
      <AllShowsGrid shows={radio} />
    </main>
  );
};

