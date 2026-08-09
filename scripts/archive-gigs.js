const fs = require('fs');
const path = require('path');
const vm = require('vm');

const MUSIC_PATH = path.join(__dirname, '../src/data/music.js');
const PAST_GIGS_PATH = path.join(__dirname, '../src/data/past_gigs.js');

const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function generateSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, '')    // Remove non-alphanumeric except spaces/hyphens
    .trim()
    .replace(/\s+/g, '-');           // Replace spaces with hyphens
}

function parseDate(dateStr) {
  // expects DD-MM-YYYY
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const [day, month, year] = parts.map(Number);
    return new Date(year, month - 1, day);
  }
  return new Date(dateStr);
}

function loadJsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Replace "export const" with "this." to evaluate as sandbox properties
  const stripped = content.replace(/export\s+const\s+/g, 'this.');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(stripped, sandbox);
  return sandbox;
}

function formatNext(nextObj) {
  return `export const next = {
  Venues: [
${nextObj.Venues.map(v => `    {
      date: "${v.date}",
      venue: "${v.venue}",
      link: "${v.link}",
    },`).join('\n')}
  ],
};
`;
}

function formatPastGigs(pastGigsArr) {
  const itemsStr = pastGigsArr.map(g => {
    return `  {
    id: ${JSON.stringify(g.id)},
    date: ${JSON.stringify(g.date)},
    name: ${JSON.stringify(g.name)},
    image: ${JSON.stringify(g.image)},
    raw_date: ${JSON.stringify(g.raw_date)},
  },`;
  }).join('\n');

  return `// Data for Past Gigs since 2016
export const pastGigs = [
${itemsStr}
];
`;
}

function archiveGigs() {
  console.log('Starting gig archiver...');
  
  if (!fs.existsSync(MUSIC_PATH) || !fs.existsSync(PAST_GIGS_PATH)) {
    console.error('Error: Required data files do not exist.');
    process.exit(1);
  }
  
  const musicData = loadJsFile(MUSIC_PATH);
  const pastGigsData = loadJsFile(PAST_GIGS_PATH);
  
  const nextVenues = musicData.next ? musicData.next.Venues : [];
  const pastGigsList = pastGigsData.pastGigs || [];
  
  const today = new Date();
  today.setHours(0, 0, 0, 0); // compare date only
  
  const activeVenues = [];
  const archivedGigs = [];
  
  for (const venueEvent of nextVenues) {
    const eventDate = parseDate(venueEvent.date);
    if (eventDate < today) {
      // Past event! Move it.
      const [day, month, year] = venueEvent.date.split('-').map(Number);
      const rawDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayStr = String(day).padStart(2, '0');
      const monthStr = String(month).padStart(2, '0');
      const yearShortStr = String(year).slice(-2);
      const formattedDate = `${dayStr}.${monthStr}.${yearShortStr}`;
      
      const venueSlug = generateSlug(venueEvent.venue);
      const monthName = monthNames[month - 1];
      const id = `${venueSlug}-${monthName}${yearShortStr}`;
      const image = `img/past_gigs/${rawDate}_${venueSlug}.jpg`;
      
      archivedGigs.push({
        id,
        date: formattedDate,
        name: venueEvent.venue,
        image,
        raw_date: rawDate
      });
      console.log(`Archiving event: "${venueEvent.venue}" on ${venueEvent.date}`);
    } else {
      activeVenues.push(venueEvent);
    }
  }
  
  if (archivedGigs.length === 0) {
    console.log('No past events found to archive.');
    return;
  }
  
  // Update music.js
  const musicContent = fs.readFileSync(MUSIC_PATH, 'utf8');
  const nextExportIndex = musicContent.indexOf('export const next =');
  if (nextExportIndex === -1) {
    console.error('Error: Could not locate "export const next =" in music.js');
    process.exit(1);
  }
  
  const updatedNextSection = formatNext({ Venues: activeVenues });
  const updatedMusicContent = musicContent.substring(0, nextExportIndex) + updatedNextSection;
  fs.writeFileSync(MUSIC_PATH, updatedMusicContent, 'utf8');
  console.log(`Updated music.js with ${activeVenues.length} future/current venues.`);
  
  // Update past_gigs.js
  const updatedPastGigs = [...archivedGigs, ...pastGigsList];
  // Sort descending by raw_date to maintain reverse chronological order
  updatedPastGigs.sort((a, b) => b.raw_date.localeCompare(a.raw_date));
  
  const updatedPastGigsContent = formatPastGigs(updatedPastGigs);
  fs.writeFileSync(PAST_GIGS_PATH, updatedPastGigsContent, 'utf8');
  console.log(`Updated past_gigs.js with ${archivedGigs.length} archived events.`);
}

archiveGigs();
