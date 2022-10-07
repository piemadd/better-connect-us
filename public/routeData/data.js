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
    hosts: ["PCJPB", "UP"],
    stations: ["Auburn", "Roseville", "Sacramento", "Oakland", "San Jose"],
    stops: {
      all: {
        stations: ["Auburn", "Roseville", "Sacramento", "Oakland", "San Jose"],
        time: {
          hours: 3,
          minutes: 50,
        },
      },
      key: {
        stations: ["Sacramento", "Oakland", "San Jose"],
        time: {
          hours: 2,
          minutes: 52,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: ["Sacramento", "Oakland"],
          trips: 15,
          extensions: [
            {
              stops: ["Oakland", "San Jose"],
              trips: 1,
            },
            {
              stops: ["Sacramento", "Roseville", "Auburn"],
              trips: 7,
            },
          ],
        },
      ],
      post: [
        {
          stops: ["Sacramento", "Oakland", "San Jose"],
          trips: 20,
          extensions: [
            {
              stops: ["Sacramento", "Roseville", "Auburn"],
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
    hosts: ["BNSF", "UP"],
    stations: [
      "Bakersfield",
      "Merced",
      "Sacramento",
      "Oakland",
      "Sacramento/Oakland",
    ],
    stops: {
      all: {
        stations: ["Merced", "Sacramento/Oakland"],
        time: {
          hours: 2,
          minutes: 18,
        },
      },
      key: {
        stations: ["Merced", "Sacramento"],
        time: {
          hours: 2,
          minutes: 18,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: ["Bakersfield", "Merced", "Oakland"],
          trips: 5,
          extensions: [],
        },
        {
          stops: ["Bakersfield", "Merced", "Sacramento"],
          trips: 2,
          extensions: [],
        },
      ],
      post: [
        {
          stops: ["Bakersfield", "Merced", "Oakland"],
          trips: 5,
          extensions: [],
        },
        {
          stops: ["Bakersfield", "Merced", "Sacramento"],
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
    hosts: ["PCJPB", "UP"],
    stations: ["San Jose", "Salinas", "San Luis Obispo"],
    stops: {
      all: {
        stations: ["San Jose", "Salinas", "San Luis Obispo"],
        time: {
          hours: 4,
          minutes: 48,
        },
      },
      key: {
        stations: ["San Jose", "Salinas", "San Luis Obispo"],
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
          stops: ["San Jose", "Salinas", "San Luis Obispo"],
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
    hosts: ["BNSF", "NCTD", "SCRRA", "UP"],
    stations: ["San Diego", "Los Angeles", "Santa Barbara", "San Luis Obispo"],
    stops: {
      all: {
        stations: [
          "San Diego",
          "Los Angeles",
          "Santa Barbara",
          "San Luis Obispo",
        ],
        time: {
          hours: 8,
          minutes: 20,
        },
      },
      key: {
        stations: ["San Diego", "Los Angeles"],
        time: {
          hours: 3,
          minutes: 5,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: ["San Diego", "Los Angeles"],
          trips: 13,
          extensions: [
            {
              stops: ["Los Angeles", "Santa Barbara"],
              trips: 5,
            },
            {
              stops: ["Santa Barbara", "San Luis Obispo"],
              trips: 2,
            },
          ],
        },
      ],
      post: [
        {
          stops: ["San Diego", "Los Angeles"],
          trips: 33,
          extensions: [
            {
              stops: ["Los Angeles", "Santa Barbara"],
              trips: 17,
            },
            {
              stops: ["Santa Barbara", "San Luis Obispo"],
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
    hosts: ["BNSF", "SCRRA", "UP"],
    stations: ["Los Angeles", "Las Vegas"],
    stops: {
      all: {
        stations: ["Los Angeles", "Las Vegas"],
        time: {
          hours: 6,
          minutes: 45,
        },
      },
      key: {
        stations: ["Los Angeles", "Las Vegas"],
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
          stops: ["Los Angeles", "Las Vegas"],
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
    hosts: ["BNSF", "SCRRA", "UP"],
    stations: ["Los Angeles", "Indio"],
    stops: {
      all: {
        stations: ["Los Angeles", "Indio"],
        time: {
          hours: 3,
          minutes: 12,
        },
      },
      key: {
        stations: ["Los Angeles", "Indio"],
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
          stops: ["Los Angeles", "Indio"],
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
    hosts: ["BNSF", "SCRRA", "UP"],
    stations: ["Los Angeles", "Phoenix", "Tucson"],
    stops: {
      all: {
        stations: ["Los Angeles", "Phoenix", "Tucson"],
        time: {
          hours: 10,
          minutes: 11,
        },
      },
      key: {
        stations: ["Los Angeles", "Phoenix"],
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
          stops: ["Los Angeles", "Phoenix", "Tucson"],
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
    hosts: ["UP"],
    stations: ["Buckeye", "Phoenix", "Tucson"],
    stops: {
      all: {
        stations: ["Buckeye", "Phoenix", "Tucson"],
        time: {
          hours: 3,
          minutes: 5,
        },
      },
      key: {
        stations: ["Phoenix", "Tucson"],
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
          stops: ["Buckeye", "Phoenix", "Tucson"],
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
    hosts: ['BNSF', 'UP',
      'Sound Transit'],
    stations: ['Vancouver', 'Seattle', 'Portland', 'Eugene'],
    stops: {
      all: {
        stations: ['Vancouver', 'Seattle', 'Portland', 'Eugene'],
        time: {
          hours: 9,
          minutes: 18,
        },
      },
      key: {
        stations: ['Seattle', 'Portland'],
        time: {
          hours: 2,
          minutes: 30,
        },
      },
    },
    trips: {
      pee: [
        {
          stops: ['Seattle', 'Portland'],
          trips: 4,
          extensions: [
            {
              stops: ['Vancouver', 'Seattle'],
              trips: 2,
            },
            {
              stops: ['Eugene', 'Portland'],
              trips: 2,
            },
          ],
        },
      ],
      post: [
        {
          stops: ['Seattle', 'Portland'],
          trips: 13,
          extensions: [
            {
              stops: ['Vancouver', 'Seattle'],
              trips: 4,
            },
            {
              stops: ['Eugene', 'Portland'],
              trips: 6,
            },
          ],
        },
      ],
    },
    fundingPerPassenger: 1,
    newPassengers: 3,
    infraCostPerPassenger: 0,
  }
};

export default routeData;
