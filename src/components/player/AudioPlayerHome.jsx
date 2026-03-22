import React from "react";

export const AudioPlayerHome = ({ title, embed, category }) => {
  return (
    <div className='spotlight-iframe' style={{ flexGrow: 2 }}>
      <iframe
        style={{ borderRadius: 0 }}
        title={title}
        width='100%'
        height='100%'
        scrolling='no'
        frameBorder='0'
        allow='autoplay'
        src={embed}
      ></iframe>
    </div>
  );
};
