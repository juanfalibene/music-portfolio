import React from 'react';

export const VideoPlayer = ({ title, embed }) => {
  return (
    <div className='player-video-wrapper'>
      <iframe
        title={title}
        src={embed}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};
