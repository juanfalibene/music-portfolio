import React from 'react';

export const VideoPlayer = ({ title, embed }) => {
  return (
    <iframe
      title={title}
      width='100%'
      height='100%'
      src={embed}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
};
