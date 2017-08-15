var store = new Vuex.Store({
  state: {
    ROWS: 0,
    COLS: 0,
    matrix: null,
  },

  mutations: {
    // Builds game of life matrix: this matrix has ROWS and COLS dimension.
    // Each cells is randomly set to a boolean value.
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
    }
  }
});
