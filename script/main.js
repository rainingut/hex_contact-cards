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

// 若是没有开启Devtools工具，在开发环境中开启，在生产环境中关闭
if (process.env.NODE_ENV == 'development') {
    Vue.config.devtools = true;
} else {
    Vue.config.devtools = false;
}
