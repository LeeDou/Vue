import Vue from 'vue'
import './styles/main.css'
import logo from './images/logo.jpg'

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
  // template: '<App/>',
  // components: { App },
  // data: {
  //   logo: logo,
  //   msg: 'hello word!'
  // }
})