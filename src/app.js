/**
 * Vue app definition.
 */
var app = new Vue({
  el: '#app',

  data: {
    _interval: null
  },

  methods: {
    /**
     * Starts a new Game Of Life
     * @param {string}
     */
    play: function () {

      // already playing
      if (this._interval) {
        return false;
      }

      // otherwise, start a new game of life!
      this._interval = setInterval(function () {
        store.commit('next');
      }, 200);
    },

    /**
     * Stops the game.
     */
    stop: function () {
      clearInterval(this._interval);
      this._interval = null;          // reset _interval
    }
  },

  // Since Vuex stores are reactive, the simplest way to "retrieve" state
  // from it is simply returning some store state
  // from within computed properties
  computed: {
    ROWS: function () {
      return store.state.ROWS;
    },
    COLS: function () {
      return store.state.COLS;
    },
    matrix: function () {
      return store.state.matrix;
    }
  },

  /**
   * As soon as the app is created, initialize the store.
   */
  created: function () {
    console.log('conway\'s way of life app created...');

    var options = {
      rows: 50,
      cols: 50,
    };
    store.commit('init', options); // initializing store
  }
});
