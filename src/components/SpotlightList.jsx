import React, { useState } from "react";
import { AudioPlayerHome } from "./player/AudioPlayerHome";
import { Link } from "react-router-dom";

export const SpotlightList = ({ category }) => {
  const [loadPlayer, setLoadPlayer] = useState(false);

  const playEmbed = () => {
    setLoadPlayer(true);
  };

  return category.slice(0, 1).map((sesh) => {
    return (
      <article
        className={`spotlight-card ${sesh.category}`}
        key={sesh.category + sesh.id}
      >
        {loadPlayer === true && (
          <AudioPlayerHome
            title={sesh.title}
            embed={sesh.embed_home}
            category={sesh.category}
            key={sesh.id}
          />
        )}
        <div className='spotlight-card-info'>
          {loadPlayer === false && (
            <Link to={"/" + sesh.category}>
              <img src={sesh.cover} alt={sesh.title} />
            </Link>
          )}
          <h3 className='spotlight-title'>{sesh.title}</h3>
          <h4 className='spotlight-date'>
            {sesh.place} - {sesh.date}
          </h4>
          <ul className='spotlight-genres'>
            {sesh.genres.map((genre, index) => (
              <li key={index} className='spotlight-genre'>
                {genre}
              </li>
            ))}
          </ul>
          <div className='sc-button-container'>
            <button
              key={sesh.id}
              className='play-button'
              onClick={() =>
                playEmbed(sesh.embed, sesh.id, sesh.title, sesh.category)
              }
            >
              PLAY
            </button>
            <Link to={"/" + sesh.category}>
              <button key={sesh.category} className='explore-button'>
                Explore {sesh.category}
              </button>
            </Link>
          </div>
        </div>
      </article>
    );
  });
};
