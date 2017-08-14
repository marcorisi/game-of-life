var app = new Vue({
  el: '#app',

  data: {
  },

  // Since Vuex stores are reactive, the simplest way to "retrieve" state
  // from it is simply returning some store state
  // from within computed properties
  computed: {
    ROWS: function () {
      return store.state.ROWS
    },
    COLS: function () {
      return store.state.COLS
    },
  },

  created: function () {
    console.log('conway\'s way of life app created...');
  }
});
