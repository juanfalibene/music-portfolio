import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [activeShow, setActiveShow] = useState(null);

  return (
    <PlayerContext.Provider value={{ activeShow, setActiveShow }}>
      {children}
    </PlayerContext.Provider>
  );
};
