import React, { useContext } from 'react';
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
          onKeyDown={(e) => e.key === 'Enter' && setActiveShow(show)}
        >
          {/* Contenedor de la imagen */}
          <div className='show-card-image relative'> {/* He añadido 'relative' aquí */}
            <img src={show.cover} alt={show.title} loading="lazy" />

            {/* Botón de reproducción siempre visible en la esquina superior izquierda */}
            <button
              className='play-button-overlay' /* Nueva clase para el posicionamiento */
              aria-label={`Reproducir ${show.title}`}
              tabIndex={-1}
            >
              <div className='play-button'> {/* Clase para el estilo del botón */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="28"
                  height="28"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Información del show */}
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