Vue.component('cell', {
  template: '<div v-bind:class="{ active: active }" v-bind:style="styleObject"></div>',

  data: function () {
    return {
      active: Math.random() < 0.5,
    }
  },
  computed: {
    styleObject: function () {
      return {
        width: '20px',
        height: '20px',
        background: this.active ? '#000000' : '#FFFFFF'
      }
    }
  }
});
