import React, { useState, useEffect, useRef } from 'react';
import { recommendations } from '../data/music';

export const Recommendations = () => {
  const listRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(recommendations.Albums[0].image);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0% -40% 0%', // Target the middle portion of the screen
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target.getAttribute('data-image');
          if (image) setHoveredImage(image);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const items = listRef.current?.querySelectorAll('.reco-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className='page recommendations-page'>
      <div className='recommendations-container'>
        <div className='reco-image-wrapper'>
          <img src={hoveredImage} alt="Hovered Selection" />
        </div>
        <div className='reco-list-wrapper' ref={listRef}>
          {Object.entries(recommendations).map(([category, items]) => (
            <div key={category} className='reco-category'>
              <h2 className='reco-category-title'>{category}</h2>
              <ul className='reco-items-list'>
                {items.map((item) => (
                  <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                    <li
                      className='reco-item'
                      onMouseEnter={() => setHoveredImage(item.image)}
                      data-image={item.image}
                    >
                      <span className='reco-item-id'>({item.id})</span>
                      <span className='reco-item-name'>{item.name}</span>
                      <span className='reco-item-arrow'>&#8594;</span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
