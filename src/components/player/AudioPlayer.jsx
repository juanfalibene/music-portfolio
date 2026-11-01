import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { themedEmbed } from '../../utils/themedEmbed';

export const AudioPlayer = ({ title, embed }) => {
  const { theme } = useTheme();
  return (
    <div className='player'>
      <iframe
        title={title}
        width='100%'
        height='120'
        frameBorder='0'
        src={themedEmbed(embed, theme)}
      ></iframe>
    </div>
  );
};
