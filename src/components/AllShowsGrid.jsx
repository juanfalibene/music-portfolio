import React, { useState, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

export const AllShowsGrid = ({ shows, showFilters = false }) => {
  const { setActiveShow } = useContext(PlayerContext);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredShows = shows.filter((show) => {
    if (!showFilters || selectedCategory === 'all') return true;
    if (!show.parentCategory) return true;
    if (Array.isArray(show.parentCategory)) {
      return show.parentCategory.includes(selectedCategory);
    }
    return show.parentCategory === selectedCategory;
  });

  return (
    <div className='shows-container'>
      {showFilters && (
        <div className='category-filter-bar' role="tablist" aria-label="Category filter">
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            type="button"
            className={`filter-btn filter-organica ${selectedCategory === 'organica' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('organica')}
          >
            Organic
          </button>
          <button
            type="button"
            className={`filter-btn filter-electronica ${selectedCategory === 'electronica' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('electronica')}
          >
            Electronic
          </button>
          <button
            type="button"
            className={`filter-btn filter-video ${selectedCategory === 'video' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('video')}
          >
            Video
          </button>
        </div>
      )}

      <div className='shows-grid'>
        {filteredShows.map((show) => (
          <div
            onClick={() => setActiveShow(show)}
            className={`show-card ${show.category} cursor-pointer`}
            key={show.id + show.title}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActiveShow(show)}
          >
            {/* Contenedor de la imagen */}
            <div className='show-card-image relative'>
              <img src={show.cover} alt={show.title} loading="lazy" />

              {/* Botón de reproducción siempre visible en la esquina superior izquierda */}
              <button
                className='play-button-overlay'
                aria-label={`Play ${show.title}`}
                tabIndex={-1}
              >
                <div className='play-button'>
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
    </div>
  );
};