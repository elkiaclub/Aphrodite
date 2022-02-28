import { createApp } from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import { BlueMapApp } from './js/BlueMapRenderer'
import { createPinia } from 'pinia'

// bluemap app
const bluemap = new BlueMapApp(document.getElementById('map-container'))
window.bluemap = bluemap



try {
  const app = createApp(App)

  // Use store
  app.use(createPinia())

  // Mount
  app.mount('#app')

  // Load map data
  bluemap.load()
} catch (error) {
  console.error('error')
  console.log(error)
}

//
// // vue
// export const Vue = createApp(App).mount('#app')
// Vue.use(createPinia())
//
// // load bluemap next tick (to let the assets load first)
// Vue.$nextTick(() => {
//   bluemap.load().catch(error => console.error(error))
// })
