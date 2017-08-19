/**
 * Creates the store: its purpose is to manage the state of the app.
 */
var store = new Vuex.Store({
  state: {
    ROWS: 0,
    COLS: 0,
    matrix: null,
  },

  mutations: {
    /**
     * Builds game of life matrix: this matrix has ROWS and COLS dimension.
     * Each cells is randomly set to a boolean value.
     * @param {string} state
     * @param {object} options
     */
    init (state, options) {

      var _ROWS = options.rows || 25,
          _COLS = options.cols || 25;

      // initialize matrix
      var _matrix = new Array(_ROWS);
      for (var ii = 0; ii < _ROWS; ii++) {
        _matrix[ii] = new Array(_COLS)
        for (var jj = 0; jj < _COLS; jj++) {
          _matrix[ii][jj] = Math.random() < 0.5;
        }
      }

      // updating state
      state.matrix = _matrix;

      // update matrix dimensions
      state.ROWS = _ROWS;
      state.COLS = _COLS;

      console.log('game initialized');
    },

    /**
     * Calculates the next iteration of the game.
     * @param {string} state
     */
    next (state) {

      // Returns the matrix index of the neighbour cells
      // identified by x and y coordinates
      var getNeighbourCoordinates = function (x, y, ROWS, COLS) {
        var xMin = Math.max(0, x-1),
            xMax = Math.min(ROWS-1, x+1),
            yMin = Math.max(0, y-1),
            yMax = Math.min(COLS-1, y+1),
            coordinates = [];

        for (var _x = xMin; _x <= xMax; _x++) {
          for (var _y = yMin; _y <= yMax; _y++) {
            // exclude target cell
            if ((_x != x) || (_y != y)) {
              coordinates.push({
                x: _x,
                y: _y,
              });
            }
          }
        }

        return coordinates;
      };

      // Determines the next status for the given cell
      // according to the game of life rules.
      var next = function (x, y, neighbourCoordinates) {

        // lists possible outcome of each iteration
        var UNDERPOPULATION = false,
            SURVIVE = true,
            OVERPOPULATION = false,
            REPRODUCTION = true;

        var amILive = state.matrix[x][y],
            livingCells = 0,
            next = amILive; // by default, return current state

        // calculates the number of living cells around the given one.
        for (var ii = 0, c = neighbourCoordinates.length; ii < c; ii++) {
          var coords = neighbourCoordinates[ii];
          livingCells += state.matrix[coords.x][coords.y] ? 1 : 0;
        }

        // 1. Any live cell with fewer than two live neighbours dies,
        // as if caused by underpopulation
        if (amILive && livingCells < 2) {
          next = UNDERPOPULATION;
        }
        // 2. Any live cell with two or three live neighbours
        // lives on to the next generation.
        else if (amILive && (livingCells === 2 || livingCells === 3)) {
          mext = SURVIVE;
        }
        // 3. Any live cell with more than three live neighbours dies,
        // as if by overpopulation.
        else if (amILive && livingCells > 3) {
          next = OVERPOPULATION;
        }
        // 4. Any dead cell with exactly three live neighbours becomes a live cell,
        // as if by reproduction
        else if (!amILive && livingCells === 3) {
          next = REPRODUCTION;
        }

        return next;
      };

      // initialize a new matrix
      var _matrix = new Array(state.ROWS);
      for (var ii = 0; ii < state.ROWS; ii++) {
        _matrix[ii] = new Array(state.COLS)
        for (var jj = 0; jj < state.COLS; jj++) {
          var neighbourCoordinates = getNeighbourCoordinates(ii, jj,
            state.ROWS, state.COLS);
          _matrix[ii][jj] = next(ii, jj, neighbourCoordinates);
        }
      }

      // update matrix
      state.matrix = _matrix;
    },
  },
});
