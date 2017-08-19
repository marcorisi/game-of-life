/**
 * Represents a cell in Conway's game of live.
 * This component exposes the active props: it specifies whether the cell
* is live or dead.
 */
Vue.component('cell', {
  template: '<div v-bind:class="{ active: active }" v-bind:style="styleObject"></div>',

  props: {
    active: {
      type: Boolean,
      default: false,
    }
  },

  data: function () {
    return {}
  },

  computed: {
    styleObject: function () {
      return {
        width: '10px',
        height: '10px',
        background: this.active ? '#000000' : '#FFFFFF',
        border: '1px solid #CCC'
      }
    }
  },
});
