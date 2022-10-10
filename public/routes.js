//pee == previous event edition

const example = {
  routeName: "Central Coast",
  routeID: "centralCoast",
  region: "west",
  mileage: 0,
  hosts: [],
  stations: [],
  stops: {
    all: {
      stations: [],
      time: {
        hours: 0,
        minutes: 0,
      },
    },
    key: {
      stations: [],
      time: {
        hours: 0,
        minutes: 0,
      },
    },
  },
  trips: {
    pee: [
      {
        stops: [],
        trips: 15,
        extensions: [
          {
            stops: [],
            trips: 0,
          },
        ],
      },
    ],
    post: [
      {
        stops: [],
        trips: 20,
        extensions: [
          {
            stops: [],
            trips: 10,
          },
        ],
      },
    ],
  },
  fundingPerPassenger: 0,
  newPassengers: 0,
  infraCostPerPassenger: 0,
};

const routeData = {
  capitolCorridor: {
    routeName: "Capitol Corridor",
    routeID: "capitolCorridor",
    region: "west",
    mileage: 168,
    mainStations: [
      "Auburn, CA",
      "Roseville, CA",
      "Sacramento, CA",
      "Oakland, CA",
      "San Jose, CA",
    ],
    hosts: ["the PCJPB", "UP"],
    stops: {
      all: {
        stations: [
          "Auburn, CA",
          "Rocklin, CA",
          "Roseville, CA",
          "Sacramento, CA",
          "Davis, CA",
          "Fairfield-Vacaville, CA",
          "Suisun-Fairfield, CA",
          "Martinez, CA",
          "Richmond, CA",
          "Berkeley, CA",
          "Emeryville, CA",
          "Oakland, CA",
          "Fremont, CA",
          "Santa Clara, CA",
          "San Jose, CA",
        ],
        time: {
          hours: 3,
          minutes: 50,
        },
      },
      key: {
        stations: [
          "Sacramento, CA",
          "Davis, CA",
          "Fairfield-Vacaville, CA",
          "Suisun-Fairfield, CA",
          "Martinez, CA",
          "Richmond, CA",
          "Berkeley, CA",
          "Emeryville, CA",
          "Oakland, CA",
          "Fremont, CA",
          "Santa Clara, CA",
          "San Jose, CA",
        ],
        time: {
          hours: 2,
          minutes: 52,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: [
            "Sacramento, CA",
            "Davis, CA",
            "Fairfield-Vacaville, CA",
            "Suisun-Fairfield, CA",
            "Martinez, CA",
            "Richmond, CA",
            "Berkeley, CA",
            "Emeryville, CA",
            "Oakland, CA",
          ],
          trips: 15,
          extensions: [
            {
              stops: [
                "Oakland, CA",
                "Fremont, CA",
                "Santa Clara, CA",
                "San Jose, CA",
              ],
              trips: 1,
            },
            {
              stops: [
                "Sacramento, CA",
                "Roseville, CA",
                "Rocklin, CA",
                "Auburn, CA",
              ],
              trips: 7,
            },
          ],
        },
      ],
      post: [
        {
          stops: [
            "Sacramento, CA",
            "Davis, CA",
            "Fairfield-Vacaville, CA",
            "Suisun-Fairfield, CA",
            "Martinez, CA",
            "Richmond, CA",
            "Berkeley, CA",
            "Emeryville, CA",
            "Oakland, CA",
            "Fremont, CA",
            "Santa Clara, CA",
            "San Jose, CA",
          ],
          trips: 20,
          extensions: [
            {
              stops: [
                "Sacramento, CA",
                "Roseville, CA",
                "Rocklin, CA",
                "Auburn, CA",
              ],
              trips: 10,
            },
          ],
        },
      ],
    },
    fundingPerPassenger: 2,
    newPassengers: 2,
    infraCostPerPassenger: 0,
  },
  sanJoaquins: {
    routeName: "San Joaquins",
    routeID: "sanJoaquins",
    region: "west",
    mileage: 114,
    mainStations: [
      "Bakersfield, CA",
      "Fresno, CA",
      "Merced, CA",
      "Stockton, CA",
      "Sacramento, CA",
      "Oakland, CA",
    ],
    hosts: ["BNSF", "UP"],
    stops: {
      all: {
        stations: [
          "Bakersfield, CA",
          "Wasco, CA",
          "Corcoran, CA",
          "Hanford, CA",
          "Fresno, CA",
          "Madera, CA",
          "Merced, CA",
          "Denair, CA",
          "Modesto, CA",
          "Stockton, CA",
          "Lodi, CA",
          "Sacramento, CA",
        ],
        time: {
          hours: 2,
          minutes: 18,
        },
      },
      branches: [
        [
          "Stockton, CA",
          "Oakley, CA",
          "Antioch-Pittsburg, CA",
          "Martinez, CA",
          "Richmond, CA",
          "Berkeley, CA",
          "Emeryville, CA",
          "Oakland, CA",
        ],
      ],
      key: {
        stations: [
          "Bakersfield, CA",
          "Wasco, CA",
          "Corcoran, CA",
          "Hanford, CA",
          "Fresno, CA",
          "Madera, CA",
          "Merced, CA",
          "Denair, CA",
          "Modesto, CA",
          "Stockton, CA",
          "Lodi, CA",
          "Sacramento, CA",
        ],
        time: {
          hours: 2,
          minutes: 18,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: [
            "Bakersfield, CA",
            "Wasco, CA",
            "Corcoran, CA",
            "Hanford, CA",
            "Fresno, CA",
            "Madera, CA",
            "Merced, CA",
            "Denair, CA",
            "Modesto, CA",
            "Stockton, CA",
            "Oakley, CA",
            "Antioch-Pittsburg, CA",
            "Martinez, CA",
            "Richmond, CA",
            "Berkeley, CA",
            "Emeryville, CA",
            "Oakland, CA",
          ],
          trips: 5,
          extensions: [],
        },
        {
          stops: [
            "Bakersfield, CA",
            "Wasco, CA",
            "Corcoran, CA",
            "Hanford, CA",
            "Fresno, CA",
            "Madera, CA",
            "Merced, CA",
            "Denair, CA",
            "Modesto, CA",
            "Stockton, CA",
            "Lodi, CA",
            "Sacramento, CA",
          ],
          trips: 2,
          extensions: [],
        },
      ],
      post: [
        {
          stops: [
            "Merced, CA",
            "Denair, CA",
            "Modesto, CA",
            "Stockton, CA",
            "Oakley, CA",
            "Antioch-Pittsburg, CA",
            "Martinez, CA",
            "Richmond, CA",
            "Berkeley, CA",
            "Emeryville, CA",
            "Oakland, CA",
          ],
          trips: 5,
          extensions: [],
        },
        {
          stops: [
            "Merced, CA",
            "Denair, CA",
            "Modesto, CA",
            "Stockton, CA",
            "Lodi, CA",
            "Sacramento, CA",
          ],
          trips: 6,
          extensions: [],
        },
      ],
    },
    fundingPerPassenger: 0,
    newPassengers: 3,
    infraCostPerPassenger: 0,
  },
  centralCoast: {
    routeName: "Central Coast",
    routeID: "centralCoast",
    region: "west",
    mileage: 203,
    mainStations: ["San Jose, CA", "Salinas, CA", "San Luis Obispo, CA"],
    hosts: ["the PCJPB", "UP"],
    stops: {
      all: {
        stations: [
          "San Jose, CA",
          "Gilroy, CA",
          "Pajaro-Watsonville, CA",
          "Salinas, CA",
          "Soledad, CA",
          "King City, CA",
          "Paso Robles, CA",
          "San Luis Obispo, CA",
        ],
        time: {
          hours: 4,
          minutes: 48,
        },
      },
      key: {
        stations: [
          "San Jose, CA",
          "Gilroy, CA",
          "Pajaro-Watsonville, CA",
          "Salinas, CA",
          "Soledad, CA",
          "King City, CA",
          "Paso Robles, CA",
          "San Luis Obispo, CA",
        ],
        time: {
          hours: 4,
          minutes: 48,
        },
      },
    },
    trips: {
      pee: [],
      post: [
        {
          stops: [
            "San Jose, CA",
            "Gilroy, CA",
            "Pajaro-Watsonville, CA",
            "Salinas, CA",
            "Soledad, CA",
            "King City, CA",
            "Paso Robles, CA",
            "San Luis Obispo, CA",
          ],
          trips: 3,
          extensions: [],
        },
      ],
    },
    fundingPerPassenger: 2,
    newPassengers: 0,
    infraCostPerPassenger: 2,
  },
  pacificSurfliner: {
    routeName: "Pacific Surfliner",
    routeID: "pacificSurfliner",
    region: "west",
    mileage: 359,
    mainStations: [
      "San Diego, CA",
      "Los Angeles, CA",
      "Santa Barbara, CA",
      "San Luis Obispo, CA",
    ],
    hosts: ["BNSF", "NCTD", "SCRRA", "UP"],
    stops: {
      all: {
        stations: [
          "San Diego, CA",
          "San Diego (Old Town), CA",
          "Sorrento Valley, CA",
          "Solana Beach, CA",
          "Oceanside, CA",
          "San Clemente, CA",
          "San Juan Capistrano, CA",
          "Irvine, CA",
          "Santa Ana, CA",
          "Anaheim, CA",
          "Fullerton, CA",
          "Los Angeles, CA",
          "Glendale, CA",
          "Burbank Airport, CA",
          "Van Nuys, CA",
          "Chatsworth, CA",
          "Simi Valley, CA",
          "Moorpark, CA",
          "Camarillo, CA",
          "Oxnard, CA",
          "Ventura, CA",
          "Carpinteria, CA",
          "Santa Barbara, CA",
          "Goleta, CA",
          "Lompoc-Surf, CA",
          "Guadalupe, CA",
          "Grover Beach-Santa Maria, CA",
          "San Luis Obispo, CA",
        ],
        time: {
          hours: 8,
          minutes: 20,
        },
      },
      key: {
        stations: [
          "San Diego, CA",
          "San Diego (Old Town), CA",
          "Sorrento Valley, CA",
          "Solana Beach, CA",
          "Oceanside, CA",
          "San Clemente, CA",
          "San Juan Capistrano, CA",
          "Irvine, CA",
          "Santa Ana, CA",
          "Anaheim, CA",
          "Fullerton, CA",
          "Los Angeles, CA",
        ],
        time: {
          hours: 3,
          minutes: 5,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: [
            "San Diego, CA",
            "San Diego (Old Town), CA",
            "Sorrento Valley, CA",
            "Solana Beach, CA",
            "Oceanside, CA",
            "San Clemente, CA",
            "San Juan Capistrano, CA",
            "Irvine, CA",
            "Santa Ana, CA",
            "Anaheim, CA",
            "Fullerton, CA",
            "Los Angeles, CA",
          ],
          trips: 13,
          extensions: [
            {
              stops: [
                "Los Angeles, CA",
                "Glendale, CA",
                "Burbank Airport, CA",
                "Van Nuys, CA",
                "Chatsworth, CA",
                "Simi Valley, CA",
                "Moorpark, CA",
                "Camarillo, CA",
                "Oxnard, CA",
                "Ventura, CA",
                "Carpinteria, CA",
                "Santa Barbara, CA",
              ],
              trips: 5,
            },
            {
              stops: [
                "Santa Barbara, CA",
                "Goleta, CA",
                "Lompoc-Surf, CA",
                "Guadalupe, CA",
                "Grover Beach-Santa Maria, CA",
                "San Luis Obispo, CA",
              ],
              trips: 2,
            },
          ],
        },
      ],
      post: [
        {
          stops: [
            "San Diego, CA",
            "San Diego (Old Town), CA",
            "Sorrento Valley, CA",
            "Solana Beach, CA",
            "Oceanside, CA",
            "San Clemente, CA",
            "San Juan Capistrano, CA",
            "Irvine, CA",
            "Santa Ana, CA",
            "Anaheim, CA",
            "Fullerton, CA",
            "Los Angeles, CA",
          ],
          trips: 33,
          extensions: [
            {
              stops: [
                "Los Angeles, CA",
                "Glendale, CA",
                "Burbank Airport, CA",
                "Van Nuys, CA",
                "Chatsworth, CA",
                "Simi Valley, CA",
                "Moorpark, CA",
                "Camarillo, CA",
                "Oxnard, CA",
                "Ventura, CA",
                "Carpinteria, CA",
                "Santa Barbara, CA",
              ],
              trips: 17,
            },
            {
              stops: [
                "Santa Barbara, CA",
                "Goleta, CA",
                "Lompoc-Surf, CA",
                "Guadalupe, CA",
                "Grover Beach-Santa Maria, CA",
                "San Luis Obispo, CA",
              ],
              trips: 8,
            },
          ],
        },
      ],
    },
    fundingPerPassenger: 2,
    newPassengers: 3,
    infraCostPerPassenger: 0,
  },
  lasVegas: {
    routeName: "Las Vegas",
    routeID: "lasVegas",
    region: "west",
    mileage: 334,
    mainStations: ["Las Vegas, NV", "Riverside, CA", "Los Angeles, CA"],
    hosts: ["BNSF", "SCRRA", "UP"],
    stops: {
      all: {
        stations: [
          "Los Angeles, CA",
          "Fullerton, CA",
          "Riverside, CA",
          "San Bernardino, CA",
          "Victorville, CA",
          "Barstow, CA",
          "Primm, NV",
          "Enterprise, NV",
          "Las Vegas, NV",
        ],
        time: {
          hours: 6,
          minutes: 45,
        },
      },
      key: {
        stations: [
          "Los Angeles, CA",
          "Fullerton, CA",
          "Riverside, CA",
          "San Bernardino, CA",
          "Victorville, CA",
          "Barstow, CA",
          "Primm, NV",
          "Enterprise, NV",
          "Las Vegas, NV",
        ],
        time: {
          hours: 6,
          minutes: 45,
        },
      },
    },
    trips: {
      pee: [],
      post: [
        {
          stops: [
            "Los Angeles, CA",
            "Fullerton, CA",
            "Riverside, CA",
            "San Bernardino, CA",
            "Victorville, CA",
            "Barstow, CA",
            "Primm, NV",
            "Enterprise, NV",
            "Las Vegas, NV",
          ],
          trips: 2,
          extensions: [],
        },
      ],
    },
    fundingPerPassenger: 2,
    newPassengers: 1,
    infraCostPerPassenger: 0,
  },
  coachellaValley: {
    routeName: "Coachella Valley",
    routeID: "coachellaValley",
    region: "west",
    mileage: 140,
    mainStations: ["Los Angeles, CA", "Indio, CA"],
    hosts: ["BNSF", "SCRRA", "UP"],
    stops: {
      all: {
        stations: [
          "Los Angeles, CA",
          "Pomona, CA",
          "Ontario, CA",
          "Riverside, CA",
          "Loma Linda, CA",
          "Banning, CA",
          "Palms Springs, CA",
          "Rancho Mirage, CA",
          "Indio, CA",
        ],
        time: {
          hours: 3,
          minutes: 12,
        },
      },
      key: {
        stations: [
          "Los Angeles, CA",
          "Pomona, CA",
          "Ontario, CA",
          "Riverside, CA",
          "Loma Linda, CA",
          "Banning, CA",
          "Palms Springs, CA",
          "Rancho Mirage, CA",
          "Indio, CA",
        ],
        time: {
          hours: 3,
          minutes: 12,
        },
      },
    },
    trips: {
      pee: [],
      post: [
        {
          stops: [
            "Los Angeles, CA",
            "Pomona, CA",
            "Ontario, CA",
            "Riverside, CA",
            "Loma Linda, CA",
            "Banning, CA",
            "Palms Springs, CA",
            "Rancho Mirage, CA",
            "Indio, CA",
          ],
          trips: 4,
          extensions: [],
        },
      ],
    },
    fundingPerPassenger: 0,
    newPassengers: 2,
    infraCostPerPassenger: 0,
  },
  laPhoenixTuscon: {
    routeName: "LA Phoenix/Tuscon",
    routeID: "laPhoenixTuscon",
    region: "west",
    mileage: 559,
    mainStations: [
      "Los Angeles, CA",
      "Riverside, CA",
      "Indio, CA",
      "Phoenix, AZ",
      "Tucson, AZ",
    ],
    hosts: ["BNSF", "SCRRA", "UP"],
    stops: {
      all: {
        stations: [
          "Los Angeles, CA",
          "Pomona, CA",
          "Ontario, CA",
          "Riverside, CA",
          "Loma Linda, CA",
          "Banning, CA",
          "Palms Springs, CA",
          "Rancho Mirage, CA",
          "Indio, CA",
          "Yuma, AZ",
          "Buckeye, AZ",
          "Goodyear-Avondale, AZ",
          "Phoenix, AZ",
          "Phoenix Airport, AZ",
          "Tempe, AZ",
          "Queen Creek, AZ",
          "Coolidge, AZ",
          "Marana, AZ",
          "Tucson, AZ",
        ],
        time: {
          hours: 10,
          minutes: 11,
        },
      },
      key: {
        stations: [
          "Los Angeles, CA",
          "Pomona, CA",
          "Ontario, CA",
          "Riverside, CA",
          "Loma Linda, CA",
          "Banning, CA",
          "Palms Springs, CA",
          "Rancho Mirage, CA",
          "Indio, CA",
          "Yuma, AZ",
          "Buckeye, AZ",
          "Goodyear-Avondale, AZ",
          "Phoenix, AZ",
        ],
        time: {
          hours: 7,
          minutes: 43,
        },
      },
    },
    trips: {
      pee: [],
      post: [
        {
          stops: [
            "Los Angeles, CA",
            "Pomona, CA",
            "Ontario, CA",
            "Riverside, CA",
            "Loma Linda, CA",
            "Banning, CA",
            "Palms Springs, CA",
            "Rancho Mirage, CA",
            "Indio, CA",
            "Yuma, AZ",
            "Buckeye, AZ",
            "Goodyear-Avondale, AZ",
            "Phoenix, AZ",
            "Phoenix Airport, AZ",
            "Tempe, AZ",
            "Queen Creek, AZ",
            "Coolidge, AZ",
            "Marana, AZ",
            "Tucson, AZ",
          ],
          trips: 1,
          extensions: [],
        },
      ],
    },
    fundingPerPassenger: 2,
    newPassengers: 1,
    infraCostPerPassenger: 0,
  },
  phoenixTuscon: {
    routeName: "Phoenix/Tuscon",
    routeID: "phoenixTuscon",
    region: "west",
    mileage: 154,
    mainStations: [
      "Phoenix, AZ",
      "Tucson, AZ",
    ],
    hosts: ["UP"],
    stops: {
      all: {
        stations: [
          "Buckeye, AZ",
          "Goodyear-Avondale, AZ",
          "Phoenix, AZ",
          "Phoenix Airport, AZ",
          "Tempe, AZ",
          "Queen Creek, AZ",
          "Coolidge, AZ",
          "Marana, AZ",
          "Tucson, AZ",
        ],
        time: {
          hours: 3,
          minutes: 5,
        },
      },
      key: {
        stations: [
          "Phoenix, AZ",
          "Phoenix Airport, AZ",
          "Tempe, AZ",
          "Queen Creek, AZ",
          "Coolidge, AZ",
          "Marana, AZ",
          "Tucson, AZ",
        ],
        time: {
          hours: 2,
          minutes: 25,
        },
      },
    },
    trips: {
      pee: [],
      post: [
        {
          stops: [
            "Buckeye, AZ",
            "Goodyear-Avondale, AZ",
            "Phoenix, AZ",
            "Phoenix Airport, AZ",
            "Tempe, AZ",
            "Queen Creek, AZ",
            "Coolidge, AZ",
            "Marana, AZ",
            "Tucson, AZ",
          ],
          trips: 3,
          extensions: [],
        },
      ],
    },
    fundingPerPassenger: 2,
    newPassengers: 1,
    infraCostPerPassenger: 1,
  },
  cascades: {
    routeName: "Cascades",
    routeID: "cascades",
    region: "west",
    mileage: 461,
    mainStations: [
      "Vancouver, BC",
      "Seattle, WA",
      "Tacoma, WA",
      "Portland, OR",
      "Eugene, OR",
    ],
    hosts: ["BNSF", "UP", "Sound Transit"],
    stops: {
      all: {
        stations: [
          "Vancouver, BC",
          "Bellingham, WA",
          "Mount Vernon, WA",
          "Stanwood, WA",
          "Everett, WA",
          "Edmonds, WA",
          "Seattle, WA",
          "Tukwila, WA",
          "Tacoma, WA",
          "Lacey-Olympia, WA",
          "Centralia, WA",
          "Kelso-Longview, WA",
          "Vancouver, WA",
          "Portland, OR",
          "Oregon City, OR",
          "Woodburn, OR",
          "Salem, OR",
          "Albany, OR",
          "Eugene, OR",
        ],
        time: {
          hours: 9,
          minutes: 18,
        },
      },
      key: {
        stations: [
          "Seattle, WA",
          "Tukwila, WA",
          "Tacoma, WA",
          "Lacey-Olympia, WA",
          "Centralia, WA",
          "Kelso-Longview, WA",
          "Vancouver, WA",
          "Portland, OR",
        ],
        time: {
          hours: 2,
          minutes: 30,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: [
            "Seattle, WA",
            "Tukwila, WA",
            "Tacoma, WA",
            "Lacey-Olympia, WA",
            "Centralia, WA",
            "Kelso-Longview, WA",
            "Vancouver, WA",
            "Portland, OR",
          ],
          trips: 4,
          extensions: [
            {
              stops: [
                "Seattle, WA",
                "Edmonds, WA",
                "Everett, WA",
                "Stanwood, WA",
                "Mount Vernon, WA",
                "Bellingham, WA",
                "Vancouver, BC",
              ],
              trips: 2,
            },
            {
              stops: [
                "Portland, OR",
                "Oregon City, OR",
                "Woodburn, OR",
                "Salem, OR",
                "Albany, OR",
                "Eugene, OR",
              ],
              trips: 2,
            },
          ],
        },
      ],
      post: [
        {
          stops: [
            "Seattle, WA",
            "Tukwila, WA",
            "Tacoma, WA",
            "Lacey-Olympia, WA",
            "Centralia, WA",
            "Kelso-Longview, WA",
            "Vancouver, WA",
            "Portland, OR",
          ],
          trips: 13,
          extensions: [
            {
              stops: [
                "Seattle, WA",
                "Edmonds, WA",
                "Everett, WA",
                "Stanwood, WA",
                "Mount Vernon, WA",
                "Bellingham, WA",
                "Vancouver, BC",
              ],
              trips: 4,
            },
            {
              stops: [
                "Portland, OR",
                "Oregon City, OR",
                "Woodburn, OR",
                "Salem, OR",
                "Albany, OR",
                "Eugene, OR",
              ],
              trips: 6,
            },
          ],
        },
      ],
    },
    fundingPerPassenger: 1,
    newPassengers: 3,
    infraCostPerPassenger: 0,
  },
};

export default routeData;