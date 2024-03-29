import { createApp } from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import { createPinia } from 'pinia'

try {
  const app = createApp(App)

  // Use store
  app.use(createPinia())

  // Mount
  app.mount('#app')

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
