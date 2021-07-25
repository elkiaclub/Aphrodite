import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BlueMapApp } from './js/BlueMapRenderer'

// bluemap app
const bluemap = new BlueMapApp(document.getElementById('map-container'))
window.bluemap = bluemap

// vue
export const Vue = createApp(App).mount('#app')

// load bluemap next tick (to let the assets load first)
Vue.$nextTick(() => {
  bluemap.load().catch(error => console.error(error))
})
