const routeData = {
  capitolCorridor: {
    routeName: "Capitol Corridor",
    stations: ["Auburn", "Roseville", "Sacramento", "Oakland", "San Jose"],
    stops: {
      all: {
        stations: [0, 1, 2, 3, 4],
        time: {
          hours: 3,
          minutes: 50,
        },
      },
      key: {
        stations: [2, 3, 4],
        time: {
          hours: 2,
          minutes: 52,
        },
      },
    },
    trips: {
      pre: [
        {
          start: 2,
          end: 3,
          trips: 15,
          extensions: [
            {
              start: 3,
              end: 4,
              trips: 1,
            },
            {
              start: 2,
              end: 0,
              trips: 7,
            },
          ],
        },
      ],
      post: [
        {
          start: 2,
          end: 4,
          trips: 20,
          extensions: [
            {
              start: 2,
              end: 0,
              trips: 10,
            },
          ],
        },
      ],
    },
    fundingPerPassenger: 0,
    newPassengers: 0,
    infraCostPerPassenger: 0,
  },
};

export default routeData;
