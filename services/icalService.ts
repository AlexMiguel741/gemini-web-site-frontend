
/**
 * ICAL SERVICE
 * Gestisce il fetch e il parsing dei file .ics da piattaforme esterne.
 */

export interface BookedRange {
  start: Date;
  end: Date;
}

export const fetchAndParseIcal = async (url: string): Promise<BookedRange[]> => {
  if (!url || url.includes('example.ics')) return [];
  
  try {
    // Proxy CORS per aggirare blocchi di Airbnb/Booking nel browser
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) throw new Error('CORS Proxy failed');
    
    const data = await response.json();
    const icsText = data.contents;
    
    if (!icsText) return [];
    
    return parseIcsString(icsText);
  } catch (error) {
    console.error('iCal Sync Error:', error);
    return [];
  }
};

const parseIcsString = (icsText: string): BookedRange[] => {
  const ranges: BookedRange[] = [];
  const lines = icsText.split(/\r?\n/);
  
  let currentStart: Date | null = null;
  let currentEnd: Date | null = null;

  for (const line of lines) {
    const cleanLine = line.trim();
    if (cleanLine.startsWith('BEGIN:VEVENT')) {
      currentStart = null;
      currentEnd = null;
    } else if (cleanLine.startsWith('DTSTART')) {
      currentStart = extractDate(cleanLine);
    } else if (cleanLine.startsWith('DTEND')) {
      currentEnd = extractDate(cleanLine);
    } else if (cleanLine.startsWith('END:VEVENT')) {
      if (currentStart && currentEnd) {
        ranges.push({ start: currentStart, end: currentEnd });
      }
    }
  }
  
  return ranges;
};

const extractDate = (line: string): Date | null => {
  const parts = line.split(':');
  const dateStr = parts[parts.length - 1];
  if (!dateStr || dateStr.length < 8) return null;

  // Formati: YYYYMMDD o YYYYMMDDTHHMMSSZ
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1;
  const day = parseInt(dateStr.substring(6, 8));

  const date = new Date(year, month, day);
  return isNaN(date.getTime()) ? null : date;
};
