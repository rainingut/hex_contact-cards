const app = Vue.createApp({
  data() {
    return {
      lightBox: false,
      theme:'default',
      persons: [],
      selectCoord: {}
    }
  },
  methods: {
    getDatas() {
      axios
        .get('https://randomuser.me/api/?results=6')
        .then((res) => this.persons = res.data.results)
    },
  },
  mounted() {
    this.getDatas();
  }
})
 app.mount('#app');