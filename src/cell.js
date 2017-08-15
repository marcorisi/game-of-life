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
        width: '20px',
        height: '20px',
        background: this.active ? '#000000' : '#FFFFFF'
      }
    }
  },
});
