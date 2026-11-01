import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { themedEmbed } from '../../utils/themedEmbed';

export const SpotifyPlayer = ({ title, embed }) => {
  const { theme } = useTheme();
  return (
    <div className='player'>
      <iframe
        title={title}
        src={themedEmbed(embed, theme)}
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
