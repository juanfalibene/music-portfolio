import React from "react";
import { useTheme } from '../../context/ThemeContext';
import { themedEmbed } from '../../utils/themedEmbed';

export const AudioPlayerHome = ({ title, embed, category }) => {
  const { theme } = useTheme();
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
        src={themedEmbed(embed, theme)}
      ></iframe>
    </div>
  );
};
