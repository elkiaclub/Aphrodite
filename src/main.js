import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VuePreload from 'vue-preload'

// Use vue-preload to preload pages before clicking on a link
// TODO: Implement this properly.
Vue.use(VuePreload, {
  // show the native progress bar
  // put <preloading></preloading> in your root component
  showProgress: true,
  // excutes when click
  onStart () {},
  // excutes when use .end() and after .setState()
  onEnd () {},
  // excutes when prefetching the state
  onPreLoading () {}
})

// Normalize.css
require('normalize.css')

// Ionicons
require('vue-ionicons/ionicons.css')

Vue.config.productionTip = false

// Loads in moment js for date manipulation
// TODO find a way to make this less than 50% off the total app size
Vue.use(require('vue-moment'))

// Makes components starting with *Base* available globally
const requireComponent = require.context(
  // The relative path of the components folder
  './components/base',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/ // For everything starting with Base<Something>
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

// Initialize
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
