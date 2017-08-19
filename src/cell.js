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
