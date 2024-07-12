import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import mixpanel from 'mixpanel-browser';
 
mixpanel.init(`${import.meta.env.VITE_MIXPANEL_TOKEN}`, {debug: true, track_pageview: true, persistence: 'localStorage', ignore_dnt: false});

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
