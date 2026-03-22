import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { AudioPlayer } from './AudioPlayer';
import { VideoPlayer } from './VideoPlayer';
import { SpotifyPlayer } from './SpotifyPlayer';

export const GlobalPlayer = () => {
  const { activeShow, setActiveShow } = useContext(PlayerContext);

  if (!activeShow) return null;

  const renderPlayer = () => {
    if (activeShow.embed.includes('youtube')) {
      return <VideoPlayer title={activeShow.title} embed={activeShow.embed} />;
    }
    if (activeShow.embed.includes('spotify') || activeShow.category === 'playlists') {
      return <SpotifyPlayer title={activeShow.title} embed={activeShow.embed} />;
    }
    return <AudioPlayer title={activeShow.title} embed={activeShow.embed} />;
  };

  return (
    <div className='global-player-container active'>
      <div className='global-player-header'>
        <div className='global-player-info'>
          <span className='global-player-title'>{activeShow.title}</span>
          <span className='global-player-subtitle'>{activeShow.place}</span>
        </div>
        <button 
          className='global-player-close' 
          onClick={() => setActiveShow(null)}
          title="Close Player"
        >
          ✖️
        </button>
      </div>
      <div className='global-player-embed'>
        {renderPlayer()}
      </div>
    </div>
  );
};
