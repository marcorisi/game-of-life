var app = new Vue({
  el: '#app',

  data: {
    _interval: null
  },

  methods: {
    // start a new game of life
    play: function (event) {

      // already playing
      if (this._interval) {
        return false;
      }

      // otherwise, start a new game of life!
      this._interval = setInterval(function () {
        store.commit('next');
      }, 200);
    },

    // stop game of life
    stop: function (event) {
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

  created: function () {
    console.log('conway\'s way of life app created...');

    var options = {
      rows: 50,
      cols: 50,
    };
    store.commit('init', options); // initializing store
  }
});
