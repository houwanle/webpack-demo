import Vue from 'vue'
import app from './app.vue'
import router from '../router/router.js'

new Vue({
  el:'#app',
  router,
  render:(h)=>h(app)
})