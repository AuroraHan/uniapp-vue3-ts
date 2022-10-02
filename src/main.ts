import { createApp } from 'vue'
import uView from 'vk-uview-ui'
import App from './App.vue'
// import Vue from 'vue'
// Vue.use(uView)
// const app = createApp(App)
// app.use(uView)
// app.mount('#app')
createApp(App).use(uView).mount('#app')
