import React, { useState, useEffect, useRef } from 'react';
import { pastGigs } from '../data/past_gigs';

export const PastGigs = () => {
  const listRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(pastGigs[0]?.image || '');

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
    <section className='page recommendations-page past-gigs-page'>
      <div className='recommendations-container'>
        <div className='reco-image-wrapper'>
          <img src={hoveredImage} alt="Past Gig Flyer" decoding="async" />
        </div>
        <div className='reco-list-wrapper' ref={listRef}>
          <div className='reco-category'>
            <h2 className='reco-category-title'>Past Gigs since 2016</h2>
            <ul className='reco-items-list'>
              {pastGigs.map((item) => (
                <li
                  key={item.id}
                  className='reco-item'
                  onMouseEnter={() => setHoveredImage(item.image)}
                  data-image={item.image}
                  style={{ cursor: 'default' }}
                >
                  <span className='reco-item-id'>({item.date})</span>
                  <span className='reco-item-name'>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
