import { createApp } from 'vue'
import App from './App.vue'
import LegoComponents from "../../../dist/<%= className%>.esm";

createApp(App).use(LegoComponents).mount('#app')
