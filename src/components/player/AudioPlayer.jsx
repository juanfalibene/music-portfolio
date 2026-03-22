import React from 'react';

export const AudioPlayer = ({ title, embed }) => {
  return (
    <div className='player'>
      <iframe
        title={title}
        width='100%'
        height='120'
        frameBorder='0'
        src={embed}
      ></iframe>
    </div>
  );
};
