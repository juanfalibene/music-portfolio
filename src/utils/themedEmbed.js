// Adapts third-party player URLs to the current site theme.
// - Mixcloud: `light=1` selects the light widget (default is dark).
// - Spotify: `theme=0` selects the dark widget (no light-only option exists).
// - SoundCloud has no theme option; it is inverted with CSS in dark mode.
export const themedEmbed = (url, theme) => {
  if (!url) return url;
  const dark = theme === 'dark';

  if (url.includes('mixcloud.com')) {
    const clean = url.replace(/([?&])light=\d&?/, (_, sep) => sep).replace(/[?&]$/, '');
    return dark ? clean : `${clean}${clean.includes('?') ? '&' : '?'}light=1`;
  }

  if (url.includes('open.spotify.com')) {
    const clean = url.replace(/([?&])theme=\d&?/, (_, sep) => sep).replace(/[?&]$/, '');
    return dark ? `${clean}${clean.includes('?') ? '&' : '?'}theme=0` : clean;
  }

  return url;
};
