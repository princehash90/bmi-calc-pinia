import { createApp } from 'vue'
import {createPinia} from "pinia";// importing the pinia from the library
import './style.css'
import App from './App.vue'


const  app = createApp(App)// creating the app to save on a variable
const pinia = createPinia()// creating and configuring the app to use the store
app.use(pinia)
//this show on the browser
app.mount('#app') //connecting the app