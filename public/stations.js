const stations = {
  'Auburn, CA': { coordinates: [], existing: false },
  'Rocklin, CA': { coordinates: [], existing: false },
  'Roseville, CA': { coordinates: [], existing: false },
  'Sacramento, CA': { coordinates: [], existing: false },
  'Davis, CA': { coordinates: [], existing: false },
  'Fairfield-Vacaville, CA': { coordinates: [], existing: false },
  'Suisun-Fairfield, CA': { coordinates: [], existing: false },
  'Martinez, CA': { coordinates: [], existing: false },
  'Richmond, CA': { coordinates: [], existing: false },
  'Berkeley, CA': { coordinates: [], existing: false },
  'Emeryville, CA': { coordinates: [], existing: false },
  'Oakland, CA': { coordinates: [], existing: false },
  'Fremont, CA': { coordinates: [], existing: false },
  'Santa Clara, CA': { coordinates: [], existing: false },
  'San Jose, CA': { coordinates: [], existing: false },
  'Bakersfield, CA': { coordinates: [], existing: false },
  'Wasco, CA': { coordinates: [], existing: false },
  'Corcoran, CA': { coordinates: [], existing: false },
  'Hanford, CA': { coordinates: [], existing: false },
  'Fresno, CA': { coordinates: [], existing: false },
  'Madera, CA': { coordinates: [], existing: false },
  'Merced, CA': { coordinates: [], existing: false },
  'Denair, CA': { coordinates: [], existing: false },
  'Modesto, CA': { coordinates: [], existing: false },
  'Stockton, CA': { coordinates: [], existing: false },
  'Lodi, CA': { coordinates: [], existing: false },
  'Sacramento, CA': { coordinates: [], existing: false },
  'San Jose, CA': { coordinates: [], existing: false },
  'Gilroy, CA': { coordinates: [], existing: false },
  'Pajaro-Watsonville, CA': { coordinates: [], existing: false },
  'Salinas, CA': { coordinates: [], existing: false },
  'Soledad, CA': { coordinates: [], existing: false },
  'King City, CA': { coordinates: [], existing: false },
  'Paso Robles, CA': { coordinates: [], existing: false },
  'San Luis Obispo, CA': { coordinates: [], existing: false },
  'San Diego, CA': { coordinates: [], existing: false },
  'San Diego (Old Town), CA': { coordinates: [], existing: false },
  'Sorrento Valley, CA': { coordinates: [], existing: false },
  'Solana Beach, CA': { coordinates: [], existing: false },
  'Oceanside, CA': { coordinates: [], existing: false },
  'San Clemente, CA': { coordinates: [], existing: false },
  'San Juan Capistrano, CA': { coordinates: [], existing: false },
  'Irvine, CA': { coordinates: [], existing: false },
  'Santa Ana, CA': { coordinates: [], existing: false },
  'Anaheim, CA': { coordinates: [], existing: false },
  'Fullerton, CA': { coordinates: [], existing: false },
  'Los Angeles, CA': { coordinates: [], existing: false },
  'Glendale, CA': { coordinates: [], existing: false },
  'Burbank Airport, CA': { coordinates: [], existing: false },
  'Van Nuys, CA': { coordinates: [], existing: false },
  'Chatsworth, CA': { coordinates: [], existing: false },
  'Simi Valley, CA': { coordinates: [], existing: false },
  'Moorpark, CA': { coordinates: [], existing: false },
  'Camarillo, CA': { coordinates: [], existing: false },
  'Oxnard, CA': { coordinates: [], existing: false },
  'Ventura, CA': { coordinates: [], existing: false },
  'Carpinteria, CA': { coordinates: [], existing: false },
  'Santa Barbara, CA': { coordinates: [], existing: false },
  'Goleta, CA': { coordinates: [], existing: false },
  'Lompoc-Surf, CA': { coordinates: [], existing: false },
  'Guadalupe, CA': { coordinates: [], existing: false },
  'Grover Beach-Santa Maria, CA': { coordinates: [], existing: false },
  'San Luis Obispo, CA': { coordinates: [], existing: false },
  'Los Angeles, CA': { coordinates: [], existing: false },
  'Fullerton, CA': { coordinates: [], existing: false },
  'Riverside, CA': { coordinates: [], existing: false },
  'San Bernardino, CA': { coordinates: [], existing: false },
  'Victorville, CA': { coordinates: [], existing: false },
  'Barstow, CA': { coordinates: [], existing: false },
  'Primm, NV': { coordinates: [], existing: false },
  'Enterprise, NV': { coordinates: [], existing: false },
  'Las Vegas, NV': { coordinates: [], existing: false },
  'Los Angeles, CA': { coordinates: [], existing: false },
  'Pomona, CA': { coordinates: [], existing: false },
  'Ontario, CA': { coordinates: [], existing: false },
  'Riverside, CA': { coordinates: [], existing: false },
  'Loma Linda, CA': { coordinates: [], existing: false },
  'Banning, CA': { coordinates: [], existing: false },
  'Palms Springs, CA': { coordinates: [], existing: false },
  'Rancho Mirage, CA': { coordinates: [], existing: false },
  'Indio, CA': { coordinates: [], existing: false },
  'Los Angeles, CA': { coordinates: [], existing: false },
  'Fullerton, CA': { coordinates: [], existing: false },
  'Riverside, CA': { coordinates: [], existing: false },
  'Loma Linda, CA': { coordinates: [], existing: false },
  'Banning, CA': { coordinates: [], existing: false },
  'Palms Springs, CA': { coordinates: [], existing: false },
  'Rancho Mirage, CA': { coordinates: [], existing: false },
  'Indio, CA': { coordinates: [], existing: false },
  'Yuma, AZ': { coordinates: [], existing: false },
  'Buckeye, AZ': { coordinates: [], existing: false },
  'Goodyear-Avondale, AZ': { coordinates: [], existing: false },
  'Phoenix, AZ': { coordinates: [], existing: false },
  'Phoenix Airport, AZ': { coordinates: [], existing: false },
  'Tempe, AZ': { coordinates: [], existing: false },
  'Queen Creek, AZ': { coordinates: [], existing: false },
  'Coolidge, AZ': { coordinates: [], existing: false },
  'Marana, AZ': { coordinates: [], existing: false },
  'Tucson, AZ': { coordinates: [], existing: false },
  'Buckeye, AZ': { coordinates: [], existing: false },
  'Goodyear-Avondale, AZ': { coordinates: [], existing: false },
  'Phoenix, AZ': { coordinates: [], existing: false },
  'Phoenix Airport, AZ': { coordinates: [], existing: false },
  'Tempe, AZ': { coordinates: [], existing: false },
  'Queen Creek, AZ': { coordinates: [], existing: false },
  'Coolidge, AZ': { coordinates: [], existing: false },
  'Marana, AZ': { coordinates: [], existing: false },
  'Tucson, AZ': { coordinates: [], existing: false },
  'Vancouver, BC': { coordinates: [], existing: false },
  'Bellingham, WA': { coordinates: [], existing: false },
  'Mount Vernon, WA': { coordinates: [], existing: false },
  'Stanwood, WA': { coordinates: [], existing: false },
  'Everett, WA': { coordinates: [], existing: false },
  'Edmonds, WA': { coordinates: [], existing: false },
  'Seattle, WA': { coordinates: [], existing: false },
  'Tukwila, WA': { coordinates: [], existing: false },
  'Tacoma, WA': { coordinates: [], existing: false },
  'Lacey-Olympia, WA': { coordinates: [], existing: false },
  'Centralia, WA': { coordinates: [], existing: false },
  'Kelso-Longview, WA': { coordinates: [], existing: false },
  'Vancouver, WA': { coordinates: [], existing: false },
  'Portland, OR': { coordinates: [], existing: false },
  'Oregon City, OR': { coordinates: [], existing: false },
  'Woodburn, OR': { coordinates: [], existing: false },
  'Salem, OR': { coordinates: [], existing: false },
  'Albany, OR': { coordinates: [], existing: false },
  'Eugene, OR': { coordinates: [], existing: false },
  'San Antonio, TX': { coordinates: [], existing: false },
  'New Braunfels, TX': { coordinates: [], existing: false },
  'San Marcos, TX': { coordinates: [], existing: false },
  'Austin, TX': { coordinates: [], existing: false },
  'Taylor/Georgetown, TX': { coordinates: [], existing: false },
  'Temple, TX': { coordinates: [], existing: false },
  'McGregor, TX': { coordinates: [], existing: false },
  'Cleburne, TX': { coordinates: [], existing: false },
  'Fort Worth, TX': { coordinates: [], existing: false },
  'DFW Airport, TX': { coordinates: [], existing: false },
  'Dallas, TX': { coordinates: [], existing: false },
  'Houston, TX': { coordinates: [], existing: false },
  'Navasota, TX': { coordinates: [], existing: false },
  'College Station, TX': { coordinates: [], existing: false },
  'Hearne, TX': { coordinates: [], existing: false },
  'Coriscana, TX': { coordinates: [], existing: false },
  'Dallas, TX': { coordinates: [], existing: false },
  'DFW Airport, TX': { coordinates: [], existing: false },
  'Fort Worth, TX': { coordinates: [], existing: false },
};

export default stations;
