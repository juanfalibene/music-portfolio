import React from 'react';

export const SpotifyPlayer = ({ title, embed }) => {
  return (
    <div className='player'>
      <iframe
        title={title}
        src={embed}
        width='100%'
        height='152'
        frameBorder='0'
        allowFullScreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </div>
  );
};
