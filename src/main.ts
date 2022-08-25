import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.css'

import router from './router'
import store from './store'
import hyRequest from './service'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
